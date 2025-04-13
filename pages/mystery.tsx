import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaArrowLeft, FaHeart } from 'react-icons/fa';

const messages = [
  'next time buddy',
  'love you',
  'i want chouchou'
];

export default function MysteryPage() {
  const [currentImage, setCurrentImage] = useState('');
  const [currentMessage, setCurrentMessage] = useState('');

  const getRandomImage = () => {
    // This will be replaced with actual images from your src/images directory
    const images = [
      '/images/chou1.jpg',
      '/images/chou2.jpg',
      '/images/chou3.jpg',
      '/images/chou4.jpg',
      '/images/chou5.jpg',
      '/images/chou6.jpg',
      '/images/chou7.jpg',
      '/images/chou8.jpg',
      '/images/chou9.jpg',
    ];
    return images[Math.floor(Math.random() * images.length)];
  };

  const getRandomMessage = () => {
    return messages[Math.floor(Math.random() * messages.length)];
  };

  const handleClick = () => {
    setCurrentImage(getRandomImage());
    setCurrentMessage(getRandomMessage());
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <>
      <Head>
        <title>Mystery Box</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-700 to-red-500 p-8">
        <Link href="/main" className="text-white mb-4 inline-flex items-center hover:text-pink-300">
          <FaArrowLeft className="mr-2" /> Back to Main
        </Link>

        <div className="max-w-2xl mx-auto text-center">
          <div 
            className="bg-white/10 backdrop-blur-lg rounded-xl p-8 cursor-pointer transform transition-all duration-300 hover:scale-105"
            onClick={handleClick}
          >
            <FaHeart className="text-white text-6xl mx-auto mb-6" />
            <h1 className="text-white text-3xl font-bold mb-8">Mystery Box</h1>
            
            {currentImage && (
              <div className="mb-8">
                <img 
                  src={currentImage} 
                  alt="Mystery" 
                  className="max-w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            )}
            
            <p className="text-white text-2xl font-semibold">
              {currentMessage}
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 