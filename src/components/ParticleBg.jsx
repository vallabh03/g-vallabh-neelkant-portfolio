import React, { useEffect, useRef } from 'react';

const ParticleBg = ({ isDarkMode }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let particlesArray = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      constructor(width, height) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.directionX = (Math.random() - 0.5) * 0.4;
        this.directionY = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 2 + 0.5;
        this.color = isDarkMode ? 'rgba(6, 182, 212, 0.4)' : 'rgba(99, 102, 241, 0.3)';
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update(width, height) {
        if (this.x > width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > height || this.y < 0) {
          this.directionY = -this.directionY;
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    const initParticles = () => {
      particlesArray = [];
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 13000);
      for (let i = 0; i < Math.min(numberOfParticles, 120); i++) {
        particlesArray.push(new Particle(canvas.width, canvas.height));
      }
    };

    const connect = () => {
      let opacityValue = 1;
      const maxDistance = 110;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const distSqr = (particlesArray[a].x - particlesArray[b].x) ** 2 + 
                          (particlesArray[a].y - particlesArray[b].y) ** 2;
          
          if (distSqr < maxDistance * maxDistance) {
            const distance = Math.sqrt(distSqr);
            opacityValue = 1 - (distance / maxDistance);
            
            ctx.strokeStyle = isDarkMode 
              ? `rgba(6, 182, 212, ${opacityValue * 0.15})`
              : `rgba(99, 102, 241, ${opacityValue * 0.12})`;
              
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(canvas.width, canvas.height);
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isDarkMode]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none transition-colors duration-300"
    />
  );
};

export default ParticleBg;
