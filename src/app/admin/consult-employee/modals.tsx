'use client';

import { Modal } from '@/app/components/modal';
import { MultipleForm } from '@/app/components/multipleForm';
import { ActionButton } from '@/app/components/pure/button';
import { FormEvent, useState } from 'react';
import { adminForm, employeeForm } from './resources';

export default function NewEmployeeForm({ isVisible, setIsVisible }: any) {
  const [isAdminForm, setIsAdminForm] = useState(true);

  const handleAdminSubmit = (e: FormEvent) => {
    e.preventDefault();

    const getData = new FormData(e.target as HTMLFormElement);

    function helper(formNames: string[]) {
      return formNames.map((el: string) => getData.get(el));
    }

    const data = helper([
      'usuario',
      'nCompleto',
      'email',
      'dni',
      'edad',
      'telefono'
    ]);

    console.log(data);
  };

  const handleEmployeeSubmit = (e: FormEvent) => {
    e.preventDefault();

    const getData = new FormData(e.target as HTMLFormElement);

    function helper(formNames: string[]) {
      return formNames.map((el: string) => getData.get(el));
    }

    const data = helper([
      'usuario',
      'nCompleto',
      'email',
      'dni',
      'edad',
      'telefono',
      'jAsignado'
    ]);

    console.log(data);
  };

  const handleChangeForm = () => {
    setIsAdminForm(!isAdminForm);
  };
  return (
    <>
      {isVisible && (
        <>
          <Modal isVisible={isVisible} onClose={() => setIsVisible(false)}>
            <select
              className="h-10 w-full p-2 border-b-2 active:border-0"
              onChange={handleChangeForm}
            >
              <option>Admin</option>
              <option>Employee</option>
            </select>
            {(isAdminForm && (
              <form id="add-admin-id" onSubmit={handleAdminSubmit}>
                <MultipleForm formList={adminForm} />
                <ActionButton>Create</ActionButton>
              </form>
            )) || (
              <form id="add-employee-id" onSubmit={handleEmployeeSubmit}>
                <MultipleForm formList={employeeForm} />
                <ActionButton>Create</ActionButton>
              </form>
            )}
          </Modal>
        </>
      )}
    </>
  );
}
