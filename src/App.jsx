import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AboutUs from './pages/AboutUS'
import ContactUs from './pages/ContactUs'
import Footer from './components/Footer'
import Services from './pages/Services'
import ReverseOsmosis from './pages/Services/ReverseOsmosis'
import SeaWater from './pages/Services/SeaWater'
import SurfaceWaterTreatement from './pages/Services/SurfaceWaterTreatement'
import WaterSoftening from './pages/Services/WaterSoftening'
import IronRemoval from './pages/Services/IronRemoval'
import DMPlant from './pages/Services/DMPlant'
import STPServices from './pages/Services/STPServices'
import ETPServices from './pages/Services/ETPServices'
import DispenserService from './pages/Services/DispenserService'
import CommercialProducts from './components/CommercialProducts';
import ProductPage from './pages/Products/ProductPage';
import CommercialProductOne from './components/CommercialProductOne';
import CommercialProductTwo from './components/CommercialProductTwo';
import CommercialProductThree from './components/CommercialProductThree';
import CommercialProductFour from './components/CommercialProductFour';
import CommercialProductFive from './components/CommercialProductFive';
import CommercialProductSix from './components/CommercialProductSix';
import CommercialProductSeven from './components/CommercialProductSeven';
import WaterBackground from './Animation/WaterBackground'
import SignIn from './Admin/SignIn';
import Dashboard from './Admin/Dashboard';
import CheckoutPage from './pages/CheckoutPage';


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
  

    <WaterBackground>

    <Routes>
    
      <Route path='/admin' element={<SignIn/>} />  
      <Route path='/admin/dashboard' element={<Dashboard/>}/>

      <Route path='/*' element={<MainLayout/>} />
    </Routes>
    </WaterBackground>

    </>
  );
}
function MainLayout() {
  return(
    <>
    
     <Header/>
      <WaterBackground>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/service" element={<Services/>}/>
          <Route path="/services/reverse-osmosis"element={<ReverseOsmosis/>}/>
          <Route path='/services/seawater-desalination' element={<SeaWater/>} />
          <Route path='/services/surface-water-treatment' element={<SurfaceWaterTreatement/>} />
          <Route path='/services/water-softening' element={<WaterSoftening/>} />
          <Route path='/services/iron-removal' element={<IronRemoval/> } />
          <Route path='/services/dm-plant'  element={<DMPlant/>}/>
          <Route path='/services/stp-services' element={<STPServices/>} />
          <Route path='/services/etp-services' element={<ETPServices/>} />
          <Route path='/services/dispenser-services' element={<DispenserService/> } />
          <Route path='/personal-products' element={<ProductPage/>} />
          <Route path='/checkout' element={<CheckoutPage/>} />
          <Route path="/commercial-products" element={<CommercialProducts />} />
        <Route path="/product/1" element={<CommercialProductOne />} />
        <Route path="/product/2" element={<CommercialProductTwo/>} />
        <Route path="/product/3" element= {<CommercialProductThree/>}/>
        <Route path='/product/4' element={<CommercialProductFour />}/>
        <Route path='/product/5' element={<CommercialProductFive />}/>
        <Route path='/product/6' element={<CommercialProductSix />}/>
        <Route path='/product/7' element={<CommercialProductSeven />}/>
        </Routes>
      </WaterBackground>
      <Footer/>
    </>
  )

}

export default App