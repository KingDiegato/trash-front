'use client';
interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isVisible,
  onClose,
  children
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center">
      <div className="w-[80vw] flex flex-col">
        <div className="bg-white p-4 rounded-lg">
          <button onClick={() => onClose()}>Cerrar</button>
          {children}
        </div>
      </div>
    </div>
  );
};
