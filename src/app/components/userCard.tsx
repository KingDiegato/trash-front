interface UserCardProps {
  clientName: string;
  clientLastName: string;
}

export const UserCard: React.FC<UserCardProps> = ({
  clientName,
  clientLastName
}) => {
  return (
    <div className="w-[320px] max-w-xs bg-[#f0f4f7] h-[160px] rounded-lg m-2 border">
      <div className="flex">
        <div className="w-[90px] h-[90px] m-2  bg-white border"></div>
        <div className="text-left">
          <p className="text-xl">{(clientName && clientName) || '--|--'}</p>
          <p className="text-xl">
            {(clientLastName && clientLastName) || '--|--'}
          </p>
        </div>
      </div>
      <div className="bg-black h-10">
        <img src="" alt="" />
      </div>
    </div>
  );
};
