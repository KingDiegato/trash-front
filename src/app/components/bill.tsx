interface BillProps {
  items: {
    id?: any;
    name: string;
    description: string;
    price: number;
    quantity: number;
    image: string;
  }[];
}

export const Bill: React.FC<BillProps> = ({ items }) => {
  return (
    <section className="m-4 bg-[#f0f4f7] h-1/2 overflow-auto border">
      <ul>
        {(items &&
          items.map((item) => (
            <li key={item.id} className="flex justify-around items-center  p-2">
              {
                <img
                  className="aspect-square"
                  width={64}
                  height={64}
                  src={item.image}
                  alt={item.name}
                />
              }
              <div className="text-left">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p>Precio: {item.price}Cr.</p>
              </div>
              <span>{item.quantity}</span>
              <p>Total: {item.price * item.quantity}Cr.</p>
            </li>
          ))) ||
          ''}
        <li className="sticky bottom-0 bg-white">
          <hr />
          <p className="text-2xl">
            <span>Total: </span>
            <span>
              {items.reduce((acc, item) => acc + item.price * item.quantity, 0)}
            </span>
            Cr.
          </p>
        </li>
      </ul>
    </section>
  );
};
