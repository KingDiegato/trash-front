import { Bill } from '@/app/components/bill';
import { Merchandise } from '@/app/components/merchandise';
import { ActionButton } from '@/app/components/pure/button';
import { SingleForm } from '@/app/components/pure/form';
import { AppTable } from '@/app/components/table';
import { UserCard } from '@/app/components/userCard';
import Link from 'next/link';

export default function Facturar() {
  return (
    <>
      <Link className="text-blue-500 px-10" href="/employee">
        Regresar
      </Link>
      <div className="text-center">
        <h1 className="text-4xl font-bold">Panel de Ventas</h1>
        <section className="flex p-10 gap-6">
          <div className="w-2/3 h-[600px]">
            <SingleForm
              type="text"
              placeholder="Nombre"
              name="nombre"
              error={false}
            />
            <div className="h-[300px] bg-white overflow-auto">
              <AppTable
                tableItems={['ID', 'Nombre', 'Descripción', 'Precio']}
                tableData={[
                  [1, 2, 3, 4],
                  [5, 6, 7, 8],
                  [9, 10, 11, 12],
                  [13, 14, 15, 16],
                  [17, 18, 19, 20],
                  [21, 22, 23, 24],
                  [25, 26, 27, 28]
                ]}
              />
            </div>
            <div className="h-[300px]">
              <Merchandise />
            </div>
          </div>
          <aside className="flex flex-col w-1/3 h-600 bg-white items-center">
            <h2 className="text-3xl">Factura</h2>
            <Bill items={itemsInCart} />
            <div className="flex ">
              <SingleForm
                error={false}
                type="text"
                placeholder="123123123"
                name="cardID"
              />
              <span className="text-4xl">{'>'}</span>
            </div>
            <UserCard clientName="john" clientLastName="doe" />
            <div>
              <ActionButton>Limpiar</ActionButton>
              <ActionButton>Confirmar</ActionButton>
            </div>
          </aside>
        </section>
      </div>
    </>
  );
}

const itemsInCart = [
  {
    name: 'shirt',
    description: 'blue shirt',
    price: 100,
    quantity: 1,
    image:
      'https://www.lincoln.ne.gov/files/sharedassets/public/parks-amp-rec/parks-amp-facilities/parks/antelope/lpr-park-antplay2.jpg?w=1080'
  },
  {
    name: 'shirt',
    description: 'blue shirt',
    price: 100,
    quantity: 1,
    image:
      'https://www.lincoln.ne.gov/files/sharedassets/public/parks-amp-rec/parks-amp-facilities/parks/antelope/lpr-park-antplay2.jpg?w=1080'
  },
  {
    name: 'shirt',
    description: 'blue shirt',
    price: 100,
    quantity: 1,
    image:
      'https://www.lincoln.ne.gov/files/sharedassets/public/parks-amp-rec/parks-amp-facilities/parks/antelope/lpr-park-antplay2.jpg?w=1080'
  },
  {
    name: 'shirt',
    description: 'blue shirt',
    price: 100,
    quantity: 1,
    image:
      'https://www.lincoln.ne.gov/files/sharedassets/public/parks-amp-rec/parks-amp-facilities/parks/antelope/lpr-park-antplay2.jpg?w=1080'
  }
];
