'use client';
import ShortForm from '@/app/components/shortForm';
import { AppTable } from '@/app/components/table';
import Link from 'next/link';
import NewEmployeeForm from './modals';
import { useState } from 'react';

export default function ConsultEmployeePage() {
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
          <AppTable
            tableItems={['ID', 'Nombre', 'Tipo de empleado', 'Acciones']}
            tableData={[
              [1, 'john', 'Empleado Juego'],
              [0, '', 'Empleado Administrativo']
            ]}
          />
          <NewEmployeeForm setIsVisible={setIsVisible} isVisible={isVisible} />
        </section>
      </div>
    </>
  );
}
