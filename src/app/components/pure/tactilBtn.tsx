/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';

interface TactilProps {
  src: string;
  btnName: string;
  href: string;
}
export const TactilBtn: React.FC<TactilProps> = ({ src, btnName, href }) => {
  return (
    <Link href={href} className="flex flex-col items-center">
      <button className="w-80 h-80 bg-white shadow-gray-300 shadow-lg rounded">
        <img className="aspect-square p-1 rounded" src={src} alt="tactil" />
      </button>
      <h2 className="font-bold text-2xl">{btnName}</h2>
    </Link>
  );
};
