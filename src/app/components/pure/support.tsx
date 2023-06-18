import { SupportIcon } from '@/app/icons/supportSvg';

export const SupportBtn = () => {
  return (
    <button className="absolute bottom-10 right-10 bg-white text-blue-700 hover:border-blue-700 font-bold py-2 px-2 rounded-full">
      <div className="flex gap-4 items-center text-2xl pr-4">
        <SupportIcon /> Support
      </div>
    </button>
  );
};
