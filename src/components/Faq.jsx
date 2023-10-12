import React from 'react';


const faqs = [
  {
    id: 1,
    question: 'Apa Fullday itu ?',
    answer: 'Fullday rental mobil / motor adalah rental yang dapat digunakan selama 24 jam, namun pengembalian kendaraan harus sebelum jam 23.59 WIB',
  },
  {
    id: 2,
    question: 'Drop Out ?',
    answer: 'Dropout adalah layanan pengantaran yang dapat dilakukan ke tempat tujuan di dalam kota, seperti hotel, bandara, stasiun, atau terminal sekali jalan',
  },
  {
    id: 3,
    question: 'Bagaimana sistem pembayaran di GT Travel ?',
    answer: 'Dp pemesanan minimal 25% dari harga dan pelunasan saat Penjemputan / selesai trip tour',
  },
  {
    id: 4,
    question: 'Apa saja resiko yang ditanggung oleh pihak penyewa kendaraan ?',
    answer: 'Kecelakaan, Pencurian, Penipuan, Penggelapan dan Kriminal lainnya',
  },
  {
    id: 5,
    question: 'Apakah ada biaya tambahan untuk rute tertentu?',
    answer: 'Biaya tambahan untuk rute wonosari dan pantai adalah sebesar Rp.50.000. Biaya ini akan dikenakan untuk setiap rute, terlepas dari jarak tempuh dan waktu sewa.',
  },
  
];

function Faq() {
  return (
    <div>
      <div className="space-y-4 px-20">
        <h1 className='text-center font-bold text-3xl'>FAQ</h1>
        {faqs.map((faq) => (
          <details key={faq.id} className="group [&_summary::-webkit-details-marker]:hidden" open>
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-blue-100 p-4 px-20 text-gray-900">
              <h2 className="font-medium">
                {faq.question}
              </h2>
              <svg
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="mt-4 px-20 p-4 leading-relaxed text-gray-700">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}

export default Faq;
