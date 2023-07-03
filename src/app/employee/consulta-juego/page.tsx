'use client';

import { Modal } from '@/app/components/modal';
import { MultipleForm } from '@/app/components/multipleForm';
import { ActionButton } from '@/app/components/pure/button';
import ShortForm from '@/app/components/shortForm';
import { AppTable } from '@/app/components/table';
import Link from 'next/link';
import { FormEvent, useState } from 'react';

const tableHeaderGames = ['ID', 'Nombre', 'Descripción', 'Precio'];
const tableDataGames = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

export default function ConsultGames() {
  const [isVisible, setIsVisible] = useState(false);

  const handleGameSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <Link className="text-blue-500 px-10" href="/employee">
        Regresar
      </Link>
      <div className="text-center">
        <h1 className="text-4xl font-bold">Consulta Juegos</h1>
        <section className="flex flex-col p-10">
          <ShortForm setOpen={setIsVisible} />
          <AppTable tableItems={tableHeaderGames} tableData={tableDataGames} />
          {isVisible && (
            <>
              <Modal isVisible={isVisible} onClose={() => setIsVisible(false)}>
                <form onSubmit={handleGameSubmit}>
                  <MultipleForm formList={formMocks} />
                  <ActionButton>Create</ActionButton>
                </form>
              </Modal>
            </>
          )}
        </section>
      </div>
    </>
  );
}

const formMocks = [
  {
    label: 'Nombre',
    name: 'input1',
    type: 'text',
    placeholder: 'ruleta...',
    error: false
  }
];
