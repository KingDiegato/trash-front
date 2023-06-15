import { AppTable } from '@/app/components/table';

const tableHeaderGames = ['ID', 'Nombre', 'Descripción', 'Precio'];
const tableDataGames = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

export default function ConsultGames() {
  return (
    <div>
      <h1>Consulta juegos</h1>
      <AppTable tableItems={tableHeaderGames} tableData={tableDataGames} />
    </div>
  );
}
