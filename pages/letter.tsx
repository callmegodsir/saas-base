import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

interface Chef {
  name: string;
  email: string;
}

const chefs: Chef[] = [
  { name: 'Grand Chef', email: 'maxlemgav@gmail.com' },
  { name: 'Petit Chef', email: 'fransu1@icloud.com' }
];

export default function LetterPage() {
  const [to, setTo] = useState<string>('');
  const [from, setFrom] = useState<string>('');
  const [toEmail, setToEmail] = useState<string>('');
  const [fromEmail, setFromEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleChefSelect = (field: 'to' | 'from', chef: Chef) => {
    if (field === 'to') {
      setTo(chef.name);
      setToEmail(chef.email);
    } else {
      setFrom(chef.name);
      setFromEmail(chef.email);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would implement the email sending logic
    console.log('Sending email:', { to: toEmail, from: fromEmail, message });
  };

  return (
    <>
      <Head>
        <title>Write a Letter to a Chouchou</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-700 to-red-500 p-8">
        <div className="max-w-2xl mx-auto">
          <Link href="/main" className="text-white mb-6 inline-flex items-center hover:text-pink-300">
            <FaArrowLeft className="mr-2" /> Back to Main
          </Link>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
            <h1 className="text-white text-3xl font-bold mb-8 text-center">Write a Letter to a Chouchou</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white mb-2">To:</label>
                <div className="flex gap-2 mb-2">
                  {chefs.map((chef) => (
                    <button
                      key={chef.name}
                      type="button"
                      onClick={() => handleChefSelect('to', chef)}
                      className={`px-4 py-2 rounded-lg ${
                        to === chef.name
                          ? 'bg-pink-500 text-white'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      {chef.name}
                    </button>
                  ))}
                </div>
                <input
                  type="email"
                  value={toEmail}
                  onChange={(e) => {
                    setToEmail(e.target.value);
                    setTo('');
                  }}
                  placeholder="Or enter email address"
                  className="w-full bg-white/10 backdrop-blur-lg rounded-lg p-4 text-white placeholder-white/50"
                />
              </div>

              <div>
                <label className="block text-white mb-2">From:</label>
                <div className="flex gap-2 mb-2">
                  {chefs.map((chef) => (
                    <button
                      key={chef.name}
                      type="button"
                      onClick={() => handleChefSelect('from', chef)}
                      className={`px-4 py-2 rounded-lg ${
                        from === chef.name
                          ? 'bg-pink-500 text-white'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      {chef.name}
                    </button>
                  ))}
                </div>
                <input
                  type="email"
                  value={fromEmail}
                  onChange={(e) => {
                    setFromEmail(e.target.value);
                    setFrom('');
                  }}
                  placeholder="Or enter email address"
                  className="w-full bg-white/10 backdrop-blur-lg rounded-lg p-4 text-white placeholder-white/50"
                />
              </div>

              <div>
                <label className="block text-white mb-2">Message:</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full h-48 bg-white/10 backdrop-blur-lg rounded-lg p-4 text-white placeholder-white/50"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-4 rounded-lg hover:bg-pink-600 transition-colors duration-300"
              >
                Send Letter
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
} 