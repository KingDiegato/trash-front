import { ActionButton } from './pure/button';
import { SingleForm } from './pure/form';

interface AppTableProps {
  tableItems: string[];
  tableData: any[];
}

export const AppTable: React.FC<AppTableProps> = ({
  tableItems = [],
  tableData = []
}) => {
  return (
    <section className="flex flex-col p-10">
      <form id="consult-games-id" className="mb-4">
        <div className="flex gap-10">
          <ActionButton>Añadir</ActionButton>
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
      <table className="w-full bg-white p-10">
        <thead>
          <tr>
            {tableItems.map((title) => (
              <th className="text-lg" key={title + crypto.randomUUID()}>
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="max-h-[400px] overflow-auto">
          {tableData.map((arr) => (
            <tr
              className="text-center items-center"
              key={arr + crypto.randomUUID()}
            >
              {arr.map((data: any) => (
                <td key={data + crypto.randomUUID()} className="p-2">
                  {data}
                  <hr />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
