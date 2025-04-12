import { useState } from 'react'
import './App.css'
import AboutUs from './pages/aboutUs'
import Home from './components/Home'
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import CommercialProducts from './components/CommercialProducts'
import ProductPage from './pages/Products/ProductPage'
// import Home from './components/Home'
import CommercilaProductOne from './components/CommercilaProductOne'
import WaterBackground from './Animation/WaterBackground'
import SignIn from './Admin/SignIn';
import Dashboard from './Admin/Dashboard';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
  
    <Routes>
      <Route path='/admin' element={<SignIn/>} />  
      <Route path='/admin/dashboard' element={<Dashboard/>}/>

      <Route path='/*' element={<MainLayout/>} />
    </Routes>

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
          <Route path='/commercial-products' element={<CommercialProducts/>} />
          <Route path='/product/:id' element={<CommercilaProductOne />} />
        </Routes>
      </WaterBackground>
      <Footer/>
    </>
  )

}

export default App