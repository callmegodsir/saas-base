import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { FaLock } from 'react-icons/fa';

export default function PasswordPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correctPasswords = [
      'i want chouchou',
      'I want chouchou',
      'Iwantchouchou',
      'iwantchouchou'
    ];
    
    if (correctPasswords.includes(password.toLowerCase())) {
      router.push('/main');
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <>
      <Head>
        <title>Enter Password</title>
      </Head>
      <div className="min-h-screen bg-black flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-4xl font-bold mb-8">Welcome to hacker chouchou</h1>
          <FaLock className="text-white text-6xl mb-6 mx-auto" />
          <h2 className="text-white text-2xl mb-4">password?</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Enter password"
            />
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    </>
  );
} 