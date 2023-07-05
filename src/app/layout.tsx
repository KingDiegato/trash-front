import Head from 'next/head';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

const links = [
  {
    label: 'Home',
    route: '/'
  }
];

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Ticketera</title>
      </head>
      <body className={'min-h-screen'}>{children}</body>
    </html>
  );
}
