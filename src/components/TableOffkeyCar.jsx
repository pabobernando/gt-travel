import React from 'react';
import Alphard from '../assets/alphard.jpg';
import Agya from '../assets/agya.png';
import AgyaKuning from '../assets/agyaKuning.png';
import BrioAuto from '../assets/brioKuning.png'
import BrioManual from '../assets/brioManual.png'
import Inova from '../assets/inovaReborn.png'
import Avanza from '../assets/avanza.png'
import AvanzaGrand from '../assets/avanzaGrand.png'

function TableOffkeyCar() {

  const vehicles = [
    {
      name: 'AGYA New MT',
      image: AgyaKuning,
      prices: [
        { duration: '12 Jam', price: ' 250.000' },
        { duration: '24 Jam', price: ' 300.000' },
        { duration: 'Fullday', price: ' 275.000' },
      ],
    },
    {
      name: 'AGYA New AT',
      image: Agya,
      prices: [
        { duration: '12 Jam', price: ' 300.000' },
        { duration: '24 Jam', price: ' 350.000' },
        { duration: 'Fullday', price: ' 325.000' },
      ],
    },
    {
      name: 'Brio New MT',
      image: BrioManual,
      prices: [
        { duration: '12 Jam', price: ' 250.000' },
        { duration: '24 Jam', price: ' 300.000' },
        { duration: 'Fullday', price: ' 275.000' },
      ],
    },
    {
      name: 'Brio New AT',
      image: BrioAuto,
      prices: [
        { duration: '12 Jam', price: ' 300.000' },
        { duration: '24 Jam', price: ' 350.000' },
        { duration: 'Fullday', price: ' 325.000' },
      ],
    },
    {
      name: 'Grand Avanza New MT',
      image: AvanzaGrand,
      prices: [
        { duration: '12 Jam', price: ' 250.000' },
        { duration: '24 Jam', price: ' 300.000' },
        { duration: 'Fullday', price: ' 275.000' },
      ],
    },
    {
      name: 'Grand Avanza New AT',
      image: AvanzaGrand,
      prices: [
        { duration: '12 Jam', price: ' 300.000' },
        { duration: '24 Jam', price: ' 350.000' },
        { duration: 'Fullday', price: ' 325.000' },
      ],
    },
    {
      name: 'Avanza New FWD MT',
      image: Avanza,
      prices: [
        { duration: '12 Jam', price: ' 300.000' },
        { duration: '24 Jam', price: ' 350.000' },
        { duration: 'Fullday', price: ' 325.000' },
      ],
    },
    {
      name: 'Avanza New FWD AT',
      image: Avanza,
      prices: [
        { duration: '12 Jam', price: ' 350.000' },
        { duration: '24 Jam', price: ' 400.000' },
        { duration: 'Fullday', price: ' 375.000' },
      ],
    },
    {
      name: 'Innova Reborn Solar MT',
      image: Inova,
      prices: [
        { duration: '12 Jam', price: '-' },
        { duration: '24 Jam', price: '-' },
        { duration: 'Fullday', price: ' 500.000' },
      ],
    },
    {
      name: 'Innova Reborn Solar AT',
      image: Inova,
      prices: [
        { duration: '12 Jam', price: '-' },
        { duration: '24 Jam', price: '-' },
        { duration: 'Fullday', price: ' 550.000' },
      ],
    },
  ];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
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
                  <dd className="text-sm text-gray-500">Lepas Kunci</dd>
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

export default TableOffkeyCar;
