import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutUs from './pages/aboutUs'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <AboutUs />
    </>
  )
}

export default App
