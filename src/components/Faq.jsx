import React from 'react';


const faqs = [
  {
    id: 1,
    question: 'Apa syarat Sewa Mobil ( Lepas Kunci ) khusus tamu luar jogja  ?',
    answer: 'Persyaratan untuk tamu dari luar kota Yogyakarta:\n\n- 2 KTP (Asli)\n- 2 SIM C (Asli)\n- 2 NPWP (Asli)\n\nAtau alternatif identitas yang diterima:\n\n- KK (Asli)\n- 2 Paspor (Asli)\n- 2 BPJS (Asli)\n- 2 Kartu Mahasiswa (Asli)\n- 2 Kartu Karyawan/Pekerja (Asli)\n- Buku Nikah (Asli)\n- Atau identitas lain yang asli.\n\nMinimal diperlukan 3 identitas asli untuk keperluan reservasi.',
  },
  {
    id: 2,
    question: 'Apa syarat Sewa Mobil ( Lepas Kunci ) khusus tamu lokal jogja  ?',
    answer: 'Jaminan untuk penyewaan motor meliputi motor dan STNK (asli), sedangkan untuk mobil mencakup mobil dan STNK (asli). Selain itu, kami juga menerima sertifikat SHM (asli) dan BPKB + kendaraan (asli) sebagai jaminan.Adapun syarat yang perlu dipenuhi adalah menyertakan minimal 1 KTP (asli), 1 SIM C (asli), dan 1 NPWP (asli). Alternatif identitas lain yang dapat digunakan mencakup KK (asli), Paspor (asli), BPJS (asli), kartu mahasiswa (asli), kartu karyawan/pekerja (asli), buku nikah (asli), atau identitas lain yang asli. Pastikan minimal terdapat 3 identitas asli yang diperlukan untuk keperluan reservasi.',
  },
  {
    id: 3,
    question: 'Apa syarat Sewa Motor ?',
    answer: 'Persyaratan untuk tamu dari luar kota dan dalam kota Yogyakarta adalah sebagai berikut:Minimal 3 identitas asli diperlukan.Salah satu identitas yang wajib adalah KTP.Identitas tambahan yang dapat digunakan termasuk Sim A, NPWP, KK, Paspor, BPJS, Kartu Mahasiswa, Kartu Karyawan/Pekerja, dan Buku Nikah.Pastikan identitas yang digunakan adalah yang asli dan sah.Dengan memenuhi persyaratan ini, Anda dapat menikmati layanan kami dengan lebih baik. ',
  },
  {
    id: 4,
    question: 'Apa Fullday itu ?',
    answer: 'Fullday rental mobil / motor adalah rental yang dapat digunakan selama 24 jam, namun pengembalian kendaraan harus sebelum jam 23.59 WIB',
  },
  {
    id: 5,
    question: 'Drop Out ?',
    answer: 'Dropout adalah layanan pengantaran yang dapat dilakukan ke tempat tujuan di dalam kota, seperti hotel, bandara, stasiun, atau terminal sekali jalan',
  },
  {
    id: 6,
    question: 'Bagaimana sistem pembayaran di GT Travel ?',
    answer: 'Dp pemesanan minimal 25% dari harga dan pelunasan saat Penjemputan / selesai trip tour',
  },
  {
    id: 7,
    question: 'Apa saja resiko yang ditanggung oleh pihak penyewa kendaraan ?',
    answer: 'Kecelakaan, Pencurian, Penipuan, Penggelapan dan Kriminal lainnya',
  },
  {
    id: 8,
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
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-blue-100 p-4 text-gray-900">
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="mt-4 leading-relaxed text-gray-700 p-4">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}

export default Faq;
