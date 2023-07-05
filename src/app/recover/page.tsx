'use client';

import { FormEvent, useState } from 'react';
import { MultipleForm } from '../components/multipleForm';
import { ActionButton } from '../components/pure/button';
import Spinner from './spinner';

const formList = [
  {
    name: 'correo',
    label: 'Correo Electronico',
    type: 'email',
    placeholder: 'example@gmail.com',
    error: false
  }
];

export default function RecoverPassword() {
  const [loading, setLoading] = useState(false);

  const handleSubmitRecoverReq = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const getData = new FormData(e.target as HTMLFormElement);

    const data = Object.fromEntries(getData.entries());

    if (data.admin) {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((data) => {
          data.json();
        })
        .then((json) => {
          setLoading(false);
          console.log('finished');
        });
      console.log(data);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] bg-white m-20">
      <form id="recover-pass-id" onSubmit={handleSubmitRecoverReq}>
        <MultipleForm formList={formList} />
        <div className="flex gap-2">
          <input type="checkbox" name="admin" />
          <label>Soy Administrador</label>
        </div>
        <div className="flex justify-center py-4">
          {loading ? (
            <ActionButton dis>
              <span className="flex">
                <Spinner />
                Enviando
              </span>
            </ActionButton>
          ) : (
            <ActionButton>Recuperar</ActionButton>
          )}
        </div>
      </form>
    </div>
  );
}
