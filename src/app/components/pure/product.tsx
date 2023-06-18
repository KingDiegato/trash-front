interface ProductTileProps {
  name: string;
  image: string;
  price: number;
  description: string;
}
export const ProductTile: React.FC<ProductTileProps> = (
  { name, image, price, description },
  ...props
) => {
  return (
    <div className="flex w-full justify-around mb-4">
      <img
        className="aspect-square"
        width={80}
        height={80}
        src={image}
        alt={name}
      />
      <article className="flex flex-col text-left">
        <h2 className="text-2xl text-blue-600">{name}</h2>
        <p className="text-gray-500 italic">{description}</p>
        <p>Precio: {price}Cr.</p>
      </article>
      <div className="flex gap-2 items-center">
        <input className="w-14 h-10 rounded text-center" type="number" />
        <button className="text-2xl">+</button>
        <button className="text-2xl">-</button>
      </div>
      <button>Agregar</button>
    </div>
  );
};
