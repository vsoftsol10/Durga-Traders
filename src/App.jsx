import { useState } from 'react'
import viteLogo from '/vite.svg'
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


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={ <ContactUs/>} />
        <Route path="/service" element={<Services/>}/>
        <Route path="/services/reverse-osmosis"element={<ReverseOsmosis/>}/>
        <Route path='/services/seawater-desalination' element={<SeaWater/>} />
        <Route path='/services/surface-water-treatment' element={<SurfaceWaterTreatement/>} />
        <Route path='/services/water-softening' element={<WaterSoftening/>} />
      </Routes>
      <Footer/>
    </>
  );

}

export default App
