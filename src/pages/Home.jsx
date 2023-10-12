import React from 'react'
import { Helmet } from 'react-helmet'
import Cta from '../components/Cta'
import Navbar from '../components/Navbar'
import Recomend from '../components/Recomend'
import Section1 from '../components/Section1'
import Service from '../components/Service'
import Testimonials from '../components/Testimonial'
import Faq from '../components/Faq'

function Home() {
  return (
    <div>
      <Helmet>
        <title>Ghany Travel - Rental Mobil Murah Bandara YIA Kulon Progo</title>
      </Helmet>
        <Navbar />
        <Cta />
        <Section1 />
        <Service />
        <Testimonials />
        <Faq />
    </div>
  )
}

export default Home