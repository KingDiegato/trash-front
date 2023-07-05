'use client';

import Image from 'next/image';
import { SingleForm } from './pure/form';
import { ActionButton } from './pure/button';
import { FormEvent } from 'react';

export const Login = () => {
  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    const getData = new FormData(e.target as HTMLFormElement);

    const data = Object.fromEntries(getData.entries());

    if (data.admin) {
      console.log(data);
    }
  };
  return (
    <section className="flex flex-col p-10 justify-center min-w-[360px] shadow-md min-h-[500px] bg-white">
      <div className="flex flex-col gap-4 ">
        <Image src="" alt="logo" width={200} height={200} />
        <form onSubmit={handleLogin}>
          <SingleForm
            label="Usuario"
            error={false}
            type="text"
            placeholder="Usuario"
            name="username"
          />
          <SingleForm
            label="Contraseña"
            error={false}
            type="password"
            placeholder="Contraseña"
            name="password"
          />
          <div className="flex text-bold p-2 gap-2">
            <input type="checkbox" name="admin" />
            <label>Admin</label>
          </div>
          <div className="flex justify-between">
            <ActionButton>Login</ActionButton>
            <ActionButton>Clear</ActionButton>
          </div>
        </form>
      </div>
    </section>
  );
};
