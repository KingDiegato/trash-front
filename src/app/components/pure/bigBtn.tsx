import Link from 'next/link';

interface BigBtnProps {
  children: React.ReactNode;
  href: string;
}

export const BigBtn: React.FC<BigBtnProps> = ({ children, href }) => {
  return (
    <Link href={href} className="flex flex-col items-center">
      <button className="w-80 h-80 bg-white shadow-gray-300 shadow-lg rounded">
        {children}
      </button>
    </Link>
  );
};
