import React from 'react';
import Lexi from '../assets/lexi.png'
import Nmax from '../assets/nmax.png'
import Fazzio from '../assets/fazzio.png'
import Vespa from '../assets/vespa.png'
import Xmax from '../assets/xmax.png'
import Beat from '../assets/beat.png'
import Vario from '../assets/vario.png'
import Scoopy from '../assets/scoopy.png'

function TableMotor() {

  const vehicles = [
    {
      name: 'Nmax',
      image: Nmax,
      prices: [
        { duration: '12 Jam', price: ' 100.000' },
        { duration: '24 Jam', price: ' 150.000' },
        { duration: 'Mingguan', price: ' 700.000' },
      ],
    },
    {
      name: 'Lexi',
      image: Lexi,
      prices: [
        { duration: '12 Jam', price: ' 80.000' },
        { duration: '24 Jam', price: ' 100.000' },
        { duration: 'Mingguan', price: ' 500.000' },
      ],
    },
    {
      name: 'Fazzio',
      image: Fazzio,
      prices: [
        { duration: '12 Jam', price: ' 100.000' },
        { duration: '24 Jam', price: ' 120.000' },
        { duration: 'Mingguan', price: ' 600.000' },
      ],
    },
    {
      name: 'Vario',
      image: Vario,
      prices: [
        { duration: '12 Jam', price: ' 80.000' },
        { duration: '24 Jam', price: ' 100.000' },
        { duration: 'Mingguan', price: ' 500.000' },
      ],
    },
    {
      name: 'Scoopy',
      image: Scoopy,
      prices: [
        { duration: '12 Jam', price: ' 80.000' },
        { duration: '24 Jam', price: ' 100.000' },
        { duration: 'Mingguan', price: ' 500.000' },
      ],
    },
    {
      name: 'Beat',
      image: Beat,
      prices: [
        { duration: '12 Jam', price: ' 60.000' },
        { duration: '24 Jam', price: ' 80.000' },
        { duration: 'Mingguan', price: ' 400.000' },
      ],
    },
    {
      name: 'Vespa Matic Sprint 150cc',
      image: Vespa,
      prices: [
        { duration: '12 Jam', price: ' 150.000' },
        { duration: '24 Jam', price: ' 200.000' },
        { duration: 'Mingguan', price: ' 1.200.000' },
      ],
    },
    {
      name: 'Xmax 300cc',
      image: Xmax,
      prices: [
        { duration: '12 Jam', price: '250.000' },
        { duration: '24 Jam', price: '300.000' },
        { duration: 'Mingguan', price: '1.800.000' },
      ],
    },
  ];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
      {vehicles.map((vehicle, index) => (
        <div key={index} className="flex justify-center" >
          <div className="block rounded-lg p-2 shadow-sm shadow-blue-200 w-full sm:w-1/2 md:w-1/2">
            <img
              alt={vehicle.name}
              src={vehicle.image}
              className="h-70 w-full rounded-md object-cover"
            />

            <div className="mt-2">
              <dl>
                <div>
                  <dt className="sr-only">Price</dt>
                  <dd className="text-sm text-gray-500">Ghany Tour Travel</dd>
                </div>

                <div>
                  <dt className="sr-only">Address</dt>
                  <dd className="font-medium ">{vehicle.name}</dd>
                </div>
              </dl>

              <div className="mt-6 flex items-center justify-between text-xs">
                {vehicle.prices.map((price, priceIndex) => (
                  <div key={priceIndex} className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                    

                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-gray-500 text-sm">{price.duration}</p>
                      <p className="font-medium text-sm">{price.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TableMotor;
