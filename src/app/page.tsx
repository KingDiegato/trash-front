'use client';

import Link from 'next/link';
import './globals.css';
import Image from 'next/image';
import { useEffect } from 'react';

export default function MainPage() {
  const handleClick = () => {
    console.log('click');
    document.documentElement.requestFullscreen();
  };

  return (
    <div className="bg-blue-500 h-screen w-full flex flex-col items-center justify-center gap-10">
      <Image
        src="/logo.png"
        alt="logo"
        width={400}
        height={400}
        className="bg-white"
      />
      <Link href="/login">
        <button
          onClick={handleClick}
          className="bg-white border-2 border-transparent text-blue-700 hover:border-blue-700 font-bold py-2 px-4 rounded w-60"
        >
          Join
        </button>
      </Link>
    </div>
  );
}
