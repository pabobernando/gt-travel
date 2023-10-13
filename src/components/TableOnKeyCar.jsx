import React from 'react';
import Alphard from '../assets/alphard.jpg';
import Agya from '../assets/agya.png';
import Avanza from '../assets/avanza.png'
import Brio from '../assets/brioKuning.png'
import Inova from '../assets/inovaReborn.png'
import AvanzaGrand from '../assets/avanzaGrand.png'
import Hiace from '../assets/hiace.png'
import HiaceL from '../assets/hiaceLong.png'

function TableOnkeyCar() {

  const vehicles = [
    {
      name: 'AGYA New',
      image: Agya,
      prices: [
        { duration: '12 Jam', price: ' 500.000' },
        { duration: 'Fullday', price: ' 600.000' },
      ],
    },
    {
      name: 'Brio New',
      image: Brio,
      prices: [
        
        { duration: '12 Jam', price: ' 500.000' },
        { duration: 'Fullday', price: ' 600.000' },
        
      ],
    },
    {
      name: 'Grand Avanza New',
      image: AvanzaGrand,
      prices: [
        
        { duration: '12 Jam', price: ' 500.000' },
        { duration: 'Fullday', price: ' 600.000' },
        
      ],
    },
    {
      name: 'Avanza New FWD Manual',
      image: Avanza,
      prices: [
        
        { duration: '12 Jam', price: '550.000' },
        { duration: 'Fullday', price: '650.000' },
        
      ],
    },
    {
      name: 'Innova Reborn',
      image: Inova,
      prices: [
        
        { duration: '12 Jam', price: '700.000' },
        { duration: 'Fullday', price: '800.000' },
      
      ],
    },
    {
      name: 'Toyota Hiace Comuter',
      image: Hiace,
      prices: [
        
        { duration: '12 Jam', price: '1.200.000' },
        { duration: 'Fullday', price: '1.300.000' },
        
      ],
    },
    {
        name: 'Hiace Premio & Elf Long',
        image: HiaceL,
        prices: [
          
          { duration: '12 Jam', price: '1.300.000' },
          { duration: 'Fullday', price: '1.500.000' },
         
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
                  <dd className="text-sm text-gray-500">Mobil + Driver + BBM</dd>
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

export default TableOnkeyCar;
