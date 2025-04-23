import React, { useEffect, useRef } from 'react';
import './WaterBackground.css';

const WaterBackground = ({ children }) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    canvas.width = width;
    canvas.height = height;
    
    // Particles array
    const particlesArray = [];
    const numberOfParticles = 200;
    
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = `rgba(173, 216, 230, ${this.opacity})`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.size > 0.2) this.size -= 0.05;
        
        // Wrap around edges
        if (this.x < 0 || this.x > width) this.speedX *= -1;
        if (this.y < 0 || this.y > height) this.speedY *= -1;
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
      
      reset() {
        if (this.size <= 0.2) {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.size = Math.random() * 5 + 1;
          this.opacity = Math.random() * 0.5 + 0.1;
          this.color = `rgba(173, 216, 230, ${this.opacity})`;
        }
      }
    }
    
    function init() {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }
    
    function animate() {
      ctx.clearRect(0, 0, width, height);
      
      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, 'rgba(240, 248, 255, 0.8)');
      gradient.addColorStop(1, 'rgba(224, 255, 255, 0.8)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      
      // Draw wave pattern
      drawWaves();
      
      // Update and draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
        particlesArray[i].reset();
      }
      
      // Connect nearby particles with lines
      connectParticles();
      
      requestAnimationFrame(animate);
    }
    
    function drawWaves() {
      const time = Date.now() * 0.001;
      const amplitude = 20;
      const frequency = 0.01;
      
      ctx.beginPath();
      ctx.moveTo(0, height * 0.7);
      
      for (let x = 0; x < width; x++) {
        const y = Math.sin(x * frequency + time) * amplitude + height * 0.7;
        ctx.lineTo(x, y);
      }
      
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      
      const waveGradient = ctx.createLinearGradient(0, height * 0.7, 0, height);
      waveGradient.addColorStop(0, 'rgba(0, 119, 190, 0.2)');
      waveGradient.addColorStop(1, 'rgba(0, 119, 190, 0.05)');
      ctx.fillStyle = waveGradient;
      ctx.fill();
      
      // Add second wave
      ctx.beginPath();
      ctx.moveTo(0, height * 0.8);
      
      for (let x = 0; x < width; x++) {
        const y = Math.sin(x * frequency * 1.5 + time * 1.2) * amplitude + height * 0.8;
        ctx.lineTo(x, y);
      }
      
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      
      const waveGradient2 = ctx.createLinearGradient(0, height * 0.8, 0, height);
      waveGradient2.addColorStop(0, 'rgba(65, 105, 225, 0.15)');
      waveGradient2.addColorStop(1, 'rgba(65, 105, 225, 0.05)');
      ctx.fillStyle = waveGradient2;
      ctx.fill();
    }
    
    function connectParticles() {
      const maxDistance = 100;
      
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            ctx.strokeStyle = `rgba(173, 216, 230, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }
    
    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    
    window.addEventListener('resize', handleResize);
    
    init();
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className="water-background-container">
      <canvas ref={canvasRef} className="water-background-canvas" />
      <div className="water-background-content">
        {children}
      </div>
    </div>
  );
};

export default WaterBackground;