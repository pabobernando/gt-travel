import React from 'react';
import Alphard from '../assets/alphard1.png';
import Camry from '../assets/camry1.png'
import Pajero from '../assets/pajero1.png'
import Fortuner from '../assets/fortuner1.png'



function VipSection() {

    const vehicles = [
        {
          name: 'Alphard Transformer New',
          image: Alphard,
          prices: [
            { duration: 'Fullday', price: ' 3.500.000' },
            { duration: '12 Jam', price: ' 3.000.000' },
            { duration: 'Drop Out', price: ' 2.000.000' },
          ],
        },
        {
          name: 'Pajero Dakkar 4 x 2',
          image: Pajero,
          prices: [
            { duration: 'Fullday', price: ' 2.000.000' },
            { duration: '12 Jam', price: ' 1.800.000' },
            { duration: 'Drop Out', price: ' 1.000.000' }
          ],
        },
        {
          name: 'Toyota Fortuner Vrz',
          image: Fortuner,
          prices: [
            { duration: 'Fullday', price: ' 2.000.000' },
            { duration: '12 Jam', price: ' 1.800.000' },
            { duration: 'Drop Out', price: ' 1.000.000' }
          ],
        },
        {
          name: 'Toyota Camry / Accord',
          image: Camry,
          prices: [
            { duration: 'Fullday', price: '2.500.000' },
            { duration: '12 Jam', price: '2.000.000' },
            { duration: 'Drop Out', price: '1.500.000' }
          ],
        },
      ];

  return (
    <div>
<h1 className='text-center mt-5 font-bold text-3xl text-blue-500'>All In VVIP</h1>
<div className="px-6 py-6 md:py-12 lg:py-16 xl:flex xl:items-center">
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
</div>

    </div>
  )
}

export default VipSection