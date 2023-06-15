export const ServerStatus = ({ status = 200 }: { status?: number }) => {
  return (
    <div className="flex border-2 border-blue-800 min-w-[80px] max-w-[180px] items-center rounded-full">
      <div
        className={`${
          status === 200 ? 'bg-green-500' : 'bg-red-500'
        } w-5 h-5 rounded-full ml-6`}
      ></div>
      <h2 className="font-bold text-xl mx-4">
        {status === 200 ? 'Online' : 'Offline'}
      </h2>
    </div>
  );
};
