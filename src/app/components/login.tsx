import Image from 'next/image';
import { SingleForm } from './pure/form';
import { ActionButton } from './pure/button';

export const Login = () => {
  return (
    <section className="flex flex-col p-10 justify-center min-w-[360px] shadow-md min-h-[500px] bg-white">
      <div className="flex flex-col gap-4 ">
        <Image src="" alt="logo" width={200} height={200} />
        <SingleForm
          error={false}
          type="text"
          placeholder="Usuario"
          name="username"
        />
        <SingleForm
          error={false}
          type="password"
          placeholder="Contraseña"
          name="password"
        />
        <div className="flex justify-between">
          <ActionButton>Login</ActionButton>
          <ActionButton>Clear</ActionButton>
        </div>
      </div>
    </section>
  );
};
