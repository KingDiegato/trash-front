import { AppTable } from '@/app/components/table';
import Link from 'next/link';

const tableHeaderGames = ['ID', 'Nombre', 'Descripción', 'Precio'];
const tableDataGames = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

export default function ConsultGames() {
  return (
    <>
      <Link className="text-blue-500 px-10" href="/employee">
        Regresar
      </Link>
      <div className="text-center">
        <h1 className="text-4xl font-bold">Consulta Juegos</h1>
        <AppTable tableItems={tableHeaderGames} tableData={tableDataGames} />
      </div>
    </>
  );
}
