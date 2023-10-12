import React from 'react'
import Navbar from '../components/Navbar'
import SectionCar from '../components/SectionCar'
import ContentPrice from '../components/ContentPrice'
import TableOffkey2 from '../components/TableOffkeyCar'
import { Helmet } from 'react-helmet'
import TableOnkeyCar from '../components/TableOnKeyCar'
import VipSection from '../components/VipSection'


function ProductCar() {
  return (
    <div>
      <Helmet>
        <title>Ghany Travel - Harga Sewa Mobil Murah Bandara YIA Kulon Progo</title>
      </Helmet>
        <Navbar />
        <SectionCar />
        <TableOffkey2 />
        <ContentPrice />
        <TableOnkeyCar />
        <VipSection />
    </div>
  )
}

export default ProductCar