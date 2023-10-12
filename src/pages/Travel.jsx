import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import Recomend from '../components/Recomend'
import Recomend2 from '../components/Recomend2'



function Travel() {
  return (
    <div>
      <Helmet>
        <title>Ghany Travel - Paket Wisata Yogyakarta Murah dan Menarik</title>
      </Helmet>
        <Navbar />
        <Recomend />
        <Recomend2 />
    </div>
  )
}

export default Travel