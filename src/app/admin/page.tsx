import { BigBtn } from '../components/pure/bigBtn';
import { ActionButton } from '../components/pure/button';

export default function AdminPage() {
  return (
    <main className="flex flex-col items-center min-h-screen gap-10">
      <h1 className="text-4xl font-bold">Admin Panel</h1>
      <div className="flex gap-20">
        <BigBtn href="/admin/consult-users">Usuarios</BigBtn>
        <BigBtn href="/admin/consult-employee">Empleados</BigBtn>
      </div>
      <div>
        <ActionButton>Informes</ActionButton>
      </div>
      <div className="flex">
        <ActionButton>Auditoria</ActionButton>
        <ActionButton>Auditoria</ActionButton>
      </div>
    </main>
  );
}
