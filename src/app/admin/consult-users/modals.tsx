'use client';

import { Modal } from '@/app/components/modal';
import { MultipleForm } from '@/app/components/multipleForm';
import { ActionButton } from '@/app/components/pure/button';
import { FormEvent, useState } from 'react';
import { createUserForm } from './resources';

interface NewUserFormProps {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

export const CreateUserModal: React.FC<NewUserFormProps> = ({
  isVisible,
  setIsVisible
}) => {
  const handleCreateUser = (e: FormEvent) => {
    e.preventDefault();

    const getData = new FormData(e.target as HTMLFormElement);

    const data = Object.fromEntries(getData.entries());

    console.log(data);
  };

  return (
    <>
      {isVisible && (
        <Modal isVisible={isVisible} onClose={() => setIsVisible(false)}>
          <form id="add-user-id" onSubmit={handleCreateUser}>
            <MultipleForm formList={createUserForm} />
            <ActionButton>Crear</ActionButton>
          </form>
        </Modal>
      )}
    </>
  );
};
