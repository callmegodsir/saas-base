import Head from 'next/head';
import Link from 'next/link';
import { FaHistory, FaImages, FaEnvelope, FaHeart, FaGamepad } from 'react-icons/fa';

export default function MainPage() {
  return (
    <>
      <Head> Hello 
        <title>Chouchou Website</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-700 to-red-500">
        {/* Header */}
        <header className="bg-black/30 backdrop-blur-lg py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-white text-3xl md:text-4xl font-bold text-center">
              All you need to know about les chouchous
            </h1>
          </div>
        </header>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/letter" className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 h-full flex flex-col items-center justify-center text-center hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaEnvelope className="text-white text-2xl" />
                </div>
                <h2 className="text-white text-xl font-semibold mb-2">Write a message to a Chouchou</h2>
                <p className="text-white/70">Send a heartfelt message to your favorite Chouchou</p>
              </div>
            </Link>

            <Link href="/gallery" className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 h-full flex flex-col items-center justify-center text-center hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaImages className="text-white text-2xl" />
                </div>
                <h2 className="text-white text-xl font-semibold mb-2">Photo Gallery</h2>
                <p className="text-white/70">Browse through our collection of memories</p>
              </div>
            </Link>

            <Link href="/games" className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 h-full flex flex-col items-center justify-center text-center hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaGamepad className="text-white text-2xl" />
                </div>
                <h2 className="text-white text-xl font-semibold mb-2">Games and Entertainment</h2>
                <p className="text-white/70">Play games and watch movies together</p>
              </div>
            </Link>

            <Link href="/history" className="block">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                <h2 className="text-white text-2xl font-bold mb-4">History of the Chouchous</h2>
                <p className="text-white/80">Discover the story of how the Chouchous came to be.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
} 