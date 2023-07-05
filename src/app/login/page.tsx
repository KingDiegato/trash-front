import Link from 'next/link';
import { Login } from '../components/login';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Login></Login>
      <div className="text-blue-500 font-bold pt-2">
        <Link href="/recover">Olvidaste la Contraseña?</Link>
      </div>
    </main>
  );
}
