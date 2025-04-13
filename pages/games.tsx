import Head from 'next/head';
import Link from 'next/link';
import { FaArrowLeft, FaGamepad } from 'react-icons/fa';

export default function GamesPage() {
  return (
    <>
      <Head>
        <title>Games and Entertainment</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-700 to-red-500 p-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/main" className="text-white mb-6 inline-flex items-center hover:text-pink-300">
            <FaArrowLeft className="mr-2" /> Back to Main
          </Link>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
            <h1 className="text-white text-3xl font-bold mb-8 text-center">Games and Entertainment</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a 
                href="https://www.solitaireparadise.com/games_list/briscola.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <FaGamepad className="text-white text-2xl" />
                </div>
                <h2 className="text-white text-xl font-semibold mb-2">Briscolla</h2>
                <p className="text-white/70">Play the classic Italian card game</p>
              </a>

              <a 
                href="https://pubg.com/en/events/wwrdevent" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <FaGamepad className="text-white text-2xl" />
                </div>
                <h2 className="text-white text-xl font-semibold mb-2">PUBG</h2>
                <p className="text-white/70">Battle it out in the ultimate survival game</p>
              </a>

              <a 
                href="https://www.leagueoflegends.com/ko-kr/download/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <FaGamepad className="text-white text-2xl" />
                </div>
                <h2 className="text-white text-xl font-semibold mb-2">League of Legends</h2>
                <p className="text-white/70">Team up for epic MOBA battles</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 