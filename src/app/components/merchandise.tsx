import { ActionButton } from './pure/button';
import { ProductTile } from './pure/product';

export const Merchandise = () => {
  return (
    <>
      <div className="flex justify-around bg-white border">
        <ActionButton>Merch</ActionButton>
        <ActionButton>Comida</ActionButton>
        <ActionButton>Tickets</ActionButton>
        <ActionButton>Juguetes</ActionButton>
      </div>
      <div className="bg-white h-full border overflow-auto">
        <div className="flex flex-col pt-2">
          {/* TODO: Create it as a map */}
          <ProductTile
            name="shirt"
            description={'blue shirt'}
            price={100}
            image={
              'https://www.lincoln.ne.gov/files/sharedassets/public/parks-amp-rec/parks-amp-facilities/parks/antelope/lpr-park-antplay2.jpg?w=1080'
            }
          />
          <ProductTile
            name="shirt"
            description={'blue shirt'}
            price={100}
            image={
              'https://www.lincoln.ne.gov/files/sharedassets/public/parks-amp-rec/parks-amp-facilities/parks/antelope/lpr-park-antplay2.jpg?w=1080'
            }
          />
          <ProductTile
            name="shirt"
            description={'blue shirt'}
            price={100}
            image={
              'https://www.lincoln.ne.gov/files/sharedassets/public/parks-amp-rec/parks-amp-facilities/parks/antelope/lpr-park-antplay2.jpg?w=1080'
            }
          />
          <ProductTile
            name="shirt"
            description={'blue shirt'}
            price={100}
            image={
              'https://www.lincoln.ne.gov/files/sharedassets/public/parks-amp-rec/parks-amp-facilities/parks/antelope/lpr-park-antplay2.jpg?w=1080'
            }
          />
        </div>
      </div>
    </>
  );
};
