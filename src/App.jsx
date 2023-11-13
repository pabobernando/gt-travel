import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Travel from './pages/Travel';
import Home from './pages/Home';
import ProductMobil from './pages/ProductCar';
import ProductMotor from './pages/ProductMotor';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-11410340028';
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'AW-11410340028');
    };

    // Cleanup the script tag on component unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array ensures that the effect runs once after the initial render

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pricelistmobil' element={<ProductMobil />} />
          <Route path='/pricelistmotor' element={<ProductMotor />} />
          <Route path='/travel' element={<Travel />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
