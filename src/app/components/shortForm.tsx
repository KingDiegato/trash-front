'use client';

import { ActionButton } from './pure/button';
import { SingleForm } from './pure/form';

interface FormProps {
  setOpen: (arg: boolean) => void;
}

export default function ShortForm({ setOpen }: FormProps) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      id="consult-games-id"
      className="mb-4"
    >
      <div className="flex gap-10">
        <button
          onClick={() => setOpen(true)}
          className="bg-white border-2 border-transparent text-blue-700 hover:border-blue-700 font-bold py-2 px-4 rounded"
        >
          Añadir
        </button>
        <div className="w-full">
          <SingleForm
            name="filter"
            placeholder="Placeholder"
            type="text"
            error={false}
          />
        </div>
        <ActionButton>Buscar</ActionButton>
      </div>
    </form>
  );
}
