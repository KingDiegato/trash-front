'use client';

import { ActionButton } from './pure/button';

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
    <div className="fixed z-10 inset-0 bg-black bg-opacity-25 flex justify-center items-center">
      <div className="w-[80vw] flex flex-col">
        <div className="flex flex-col bg-white p-4 rounded-lg">
          <div className="flex justify-end">
            <button
              className=" bg-white border-2 border-transparent text-blue-700 hover:border-blue-700 font-bold py-2 px-4 rounded"
              onClick={() => onClose()}
            >
              Cerrar
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
