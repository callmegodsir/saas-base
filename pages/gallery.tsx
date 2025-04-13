import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaArrowLeft, FaCalendarAlt } from 'react-icons/fa';
import Image from 'next/image';

interface ImageData {
  src: string;
  date: string;
  location: string;
  month: string;
}

export default function GalleryPage() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>('');

  useEffect(() => {
    // Sample data for demonstration
    const sampleImages: ImageData[] = Array.from({ length: 46 }, (_, i) => {
      const imageNumber = i + 1;
      const locations = ['Seoul', 'Jeju', 'Thailand', 'Vietnam'];
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                     'July', 'August', 'September', 'October', 'November', 'December'];
      const vietnamLocations = ['Ha Long bay', 'Hanoi', 'Hagiang Loop'];
      
      // Assign specific images to Vietnam
      let location = locations[i % locations.length];
      let month = months[i % months.length];
      
      if ([1, 2, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33].includes(imageNumber)) {
        location = 'Vietnam';
        // Assign Vietnam locations based on image number ranges
        if ([1, 2, 22, 23, 24].includes(imageNumber)) {
          month = 'Ha Long bay';
        } else if ([25, 26, 27, 28, 29].includes(imageNumber)) {
          month = 'Hanoi';
        } else if ([30, 31, 32, 33].includes(imageNumber)) {
          month = 'Hagiang Loop';
        }
      } else if ([3, 4, 7, 8, 14, 15, 16, 18, 20, 34, 39, 40, 43, 44].includes(imageNumber)) {
        location = 'Seoul';
      } else if ([35, 37, 38].includes(imageNumber)) {
        location = 'Jeju';
      } else if ([10, 11, 12, 13, 17, 21].includes(imageNumber)) {
        location = 'Thailand';
        month = 'Thailand';
      }
      
      return {
        src: `/images/chou${imageNumber}.jpg`,
        date: new Date(2020 + Math.floor(i / 12), i % 12, 1).toISOString().split('T')[0],
        location: location,
        month: month
      };
    });
    setImages(sampleImages);
  }, []);

  const locations = Array.from(new Set(images.map(img => img.location))).sort();
  const filteredImages = selectedLocation 
    ? images.filter(img => img.location === selectedLocation)
    : images;

  const imagesByMonth = filteredImages.reduce((acc, img) => {
    if (!acc[img.month]) {
      acc[img.month] = [];
    }
    acc[img.month].push(img);
    return acc;
  }, {} as Record<string, ImageData[]>);

  return (
    <>
      <Head>
        <title>Photo Gallery - Chouchou</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-700 to-red-500 p-8">
        <div className="max-w-6xl mx-auto">
          <Link href="/main" className="text-white mb-6 inline-flex items-center hover:text-pink-300">
            <FaArrowLeft className="mr-2" /> Back to Main
          </Link>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
            <h1 className="text-white text-3xl font-bold mb-8 text-center">Photo Gallery</h1>

            {/* Location Filter */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              <button
                onClick={() => setSelectedLocation('')}
                className={`px-4 py-2 rounded-lg ${
                  selectedLocation === ''
                    ? 'bg-pink-500 text-white'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                All Locations
              </button>
              {locations.map(location => (
                <button
                  key={location}
                  onClick={() => setSelectedLocation(location)}
                  className={`px-4 py-2 rounded-lg ${
                    selectedLocation === location
                      ? 'bg-pink-500 text-white'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {location}
                </button>
              ))}
            </div>

            {/* Gallery Content */}
            <div className="space-y-12">
              {Object.entries(imagesByMonth).map(([month, monthImages]) => (
                <div key={month} className="space-y-4">
                  <div className="flex items-center text-white mb-4">
                    <FaCalendarAlt className="mr-2" />
                    <h2 className="text-xl font-semibold">
                      {monthImages[0].location === 'Thailand' ? 'Thailand' : `${month} - ${monthImages[0].location}`}
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {monthImages.map((img, index) => (
                      <div
                        key={index}
                        className="relative aspect-square overflow-hidden rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
                      >
                        <Image
                          src={img.src}
                          alt={`Photo from ${month} in ${img.location}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 