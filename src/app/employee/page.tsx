import { TactilBtn } from '../components/pure/tactilBtn';

export default function Employee() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-12">Panel de Empleado</h2>
      <div className="flex gap-20">
        <TactilBtn
          src="https://www.lincoln.ne.gov/files/sharedassets/public/parks-amp-rec/parks-amp-facilities/parks/antelope/lpr-park-antplay2.jpg?w=1080"
          btnName="Juegos"
          href="/employee/consulta-juegos"
        />
        <TactilBtn src="" btnName="Facturar" href="/" />
      </div>
    </div>
  );
}
