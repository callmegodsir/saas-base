import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/password');
  }, [router]);

  return (
    <>
      <Head>
        <title>Loading...</title>
      </Head>
      <div className="min-h-screen bg-black flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl font-bold mb-4">Welcome to chouchou hacker</h1>
        <h2 className="text-white text-2xl">Loading...</h2>
      </div>
    </>
  );
}
