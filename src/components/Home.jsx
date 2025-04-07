import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Particles from './Particles/Particles';

const Home = () => {
    return (
        <div>
            {/* <Header /> */}
            
            <div style={{ width: '100%', height: '600px', position: 'relative' }}>
            <h2>Home</h2>
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />  
</div>
           
            <Footer />
        </div>
    )
}

export default Home