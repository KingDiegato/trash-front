'use client';
interface ButtonProps {
  children: React.ReactNode;
  dis?: boolean;
}

export const ActionButton: React.FC<ButtonProps> = ({ children, dis }) => {
  return (
    <button
      disabled={dis}
      className="bg-white border-2 border-transparent text-blue-700 hover:border-blue-700 font-bold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
};
