import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Travel from './pages/Travel'
import Home from './pages/Home'
import ProductMobil from './pages/ProductCar'
import ProductMotor from './pages/ProductMotor'
import Faq from './components/Faq'


function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/pricelistmobil' element={<ProductMobil />} />
          <Route path='/pricelistmotor' element={<ProductMotor />} />
          <Route path='/travel' element={<Travel />} />
          <Route path='faq' element={<Faq />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
