import React from 'react'
import Navbar from '../components/Navbar'
import Section3 from '../components/SectionMotor'
import ContentPrice from '../components/ContentPrice'
import TableOffkey2 from '../components/TableOffkeyCar'
import { Helmet } from 'react-helmet'
import TableOnkeyCar from '../components/TableOnKeyCar'
import TableMotor from '../components/TableMotor'


function ProductMotor() {
  return (
    <div>
      <Helmet>
        <title>Ghany Travel - Harga Sewa Motor Murah Bandara YIA Kulon Progo</title>
      </Helmet>
        <Navbar />
        <Section3 />
        <TableMotor />
    </div>
  )
}

export default ProductMotor