import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
`;

const Particle = styled.div<{ x: number; y: number; size: number; opacity: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: radial-gradient(circle, rgba(255, 0, 0, 0.8) 0%, transparent 70%);
  border-radius: 50%;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  opacity: ${props => props.opacity};
  filter: blur(1px);
  animation: float 3s ease-in-out infinite;
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
`;

const GridOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(255, 0, 0, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 0, 0, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: grid-move 10s linear infinite;
  
  @keyframes grid-move {
    0% { transform: translate(0, 0); }
    100% { transform: translate(50px, 50px); }
  }
`;

const MouseTrail = styled.div<{ x: number; y: number; size: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.6) 0%, transparent 70%);
  border-radius: 50%;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  pointer-events: none;
  animation: fade-out 1s ease-out forwards;
  
  @keyframes fade-out {
    0% { 
      opacity: 1; 
      transform: scale(1);
    }
    100% { 
      opacity: 0; 
      transform: scale(2);
    }
  }
`;

interface Props {
  mousePosition: { x: number; y: number };
}

const InteractiveBackground: React.FC<Props> = ({ mousePosition }) => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; opacity: number }>>([]);
  const [mouseTrails, setMouseTrails] = useState<Array<{ id: number; x: number; y: number; size: number }>>([]);
  const trailIdRef = useRef(0);

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 2,
      opacity: Math.random() * 0.5 + 0.3
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    // Add mouse trail effect
    const newTrail = {
      id: trailIdRef.current++,
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      size: 20
    };

    setMouseTrails(prev => [...prev.slice(-5), newTrail]);

    // Clean up old trails
    const timer = setTimeout(() => {
      setMouseTrails(prev => prev.filter(trail => trail.id !== newTrail.id));
    }, 1000);

    return () => clearTimeout(timer);
  }, [mousePosition]);

  // Update particle positions based on mouse proximity
  useEffect(() => {
    setParticles(prev => prev.map(particle => {
      const dx = mousePosition.x - particle.x;
      const dy = mousePosition.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 150) {
        const force = (150 - distance) / 150;
        const moveX = (dx / distance) * force * 20;
        const moveY = (dy / distance) * force * 20;
        
        return {
          ...particle,
          x: Math.max(0, Math.min(window.innerWidth, particle.x - moveX)),
          y: Math.max(0, Math.min(window.innerHeight, particle.y - moveY)),
          opacity: Math.min(1, particle.opacity + force * 0.5)
        };
      }
      
      return {
        ...particle,
        opacity: Math.max(0.3, particle.opacity - 0.01)
      };
    }));
  }, [mousePosition]);

  return (
    <BackgroundContainer>
      <GridOverlay />
      {particles.map(particle => (
        <Particle
          key={particle.id}
          x={particle.x}
          y={particle.y}
          size={particle.size}
          opacity={particle.opacity}
        />
      ))}
      {mouseTrails.map(trail => (
        <MouseTrail
          key={trail.id}
          x={trail.x}
          y={trail.y}
          size={trail.size}
        />
      ))}
    </BackgroundContainer>
  );
};

export default InteractiveBackground;
