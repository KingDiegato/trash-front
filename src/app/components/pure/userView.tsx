import { UserIcon } from '@/app/icons/userSvg';

const UserData = ({ userData }: { userData: string }) => {
  return (
    <div className="max-w-[180px] mx-4">
      <h2 className="font-bold text-xl overflow-x-hidden">{userData}</h2>
    </div>
  );
};
export const UserView = () => {
  return (
    <div className="flex gap-4 max-w-[360px] items-center border-2 border-blue-800 rounded-full">
      <UserIcon />
      <UserData userData="Usuario@gmail.com" />
    </div>
  );
};
