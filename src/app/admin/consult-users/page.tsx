'use client';

import { ActionTable } from '@/app/components/actionTable';
import { Modal } from '@/app/components/modal';
import { MultipleForm } from '@/app/components/multipleForm';
import { ActionButton } from '@/app/components/pure/button';
import ShortForm from '@/app/components/shortForm';
import { AppTable } from '@/app/components/table';
import Link from 'next/link';
import { useState } from 'react';

export default function ConsultUsersPage() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <Link className="text-blue-500 px-10" href="/employee">
        Regresar
      </Link>
      <div className="text-center">
        <h1 className="text-4xl font-bold">Consulta Empleados</h1>
        <section className="flex flex-col p-10">
          <ShortForm setOpen={setIsVisible} />
          <ActionTable
            tableItems={['ID', 'Nombre', 'Registro', 'Tipo de empleado']}
            tableData={[
              [1, 'john doe', '15/6/2023', 'Empleado Juego'],
              [2, 'john doe', '15/6/2023', 'Empleado Administrativo']
            ]}
          />
          {isVisible && (
            <>
              <Modal isVisible={isVisible} onClose={() => setIsVisible(false)}>
                <MultipleForm formList={[]} />
                <ActionButton>Create</ActionButton>
              </Modal>
            </>
          )}
        </section>
      </div>
    </>
  );
}
