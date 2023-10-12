import React from 'react';

function ContentPrice() {
  return (
    <div className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-2xl font-semibold leading-8 text-gray-900 mb-8 sm:mb-10">
          Partner
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 text-center gap-4 sm:gap-6 md:gap-8 lg:gap-8 xl:gap-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-2xl font-bold">Ghany Wash</h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-2xl font-bold">Ghany Kost</h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-2xl font-bold">Ghany Homestay</h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-2xl font-bold">GM GROUP</h1>
        </div>
      </div>
    </div>
  );
}

export default ContentPrice;
