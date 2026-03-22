import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 2rem;
  margin-top: 70px;
`;

const HeroContent = styled(motion.div)`
  text-align: center;
  max-width: 800px;
  z-index: 10;
`;

const GlitchTitle = styled(motion.h1)`
  font-family: 'Press Start 2P', cursive;
  font-size: clamp(2rem, 5vw, 4rem);
  color: #ff0000;
  text-shadow: 
    0.05em 0 0 #00ffff,
    -0.025em -0.05em 0 #ff1493,
    0.025em 0.05em 0 #ffff00;
  margin-bottom: 2rem;
  position: relative;
  animation: glitch 2s infinite;
  
  @keyframes glitch {
    0%, 100% {
      text-shadow: 
        0.05em 0 0 #00ffff,
        -0.025em -0.05em 0 #ff1493,
        0.025em 0.05em 0 #ffff00;
    }
    25% {
      text-shadow: 
        -0.05em -0.025em 0 #00ffff,
        0.025em 0.025em 0 #ff1493,
        -0.05em -0.05em 0 #ffff00;
    }
    50% {
      text-shadow: 
        0.025em 0.05em 0 #00ffff,
        0.05em 0 0 #ff1493,
        0 -0.05em 0 #ffff00;
    }
    75% {
      text-shadow: 
        0 0.025em 0 #00ffff,
        0.025em 0 0 #ff1493,
        -0.025em -0.025em 0 #ffff00;
    }
  }
`;

const Subtitle = styled(motion.p)`
  font-family: 'Kalam', cursive;
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: #ffffff;
  margin-bottom: 3rem;
  line-height: 1.6;
  opacity: 0.9;
`;

const CTAButton = styled(motion.button)`
  background: transparent;
  border: 2px solid #ff0000;
  color: #ffffff;
  padding: 1rem 2rem;
  font-family: 'Press Start 2P', cursive;
  font-size: 0.9rem;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, #ff0000, transparent);
    transition: left 0.5s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    color: #000000;
    border-color: #00ffff;
    text-shadow: 0 0 10px #00ffff;
    transform: scale(1.05);
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

const FloatingSymbol = styled(motion.div)<{ delay: number }>`
  position: absolute;
  font-size: 2rem;
  color: rgba(255, 0, 0, 0.3);
  animation: float 6s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
`;

const BibleVerse = styled(motion.div)`
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid rgba(255, 0, 0, 0.3);
  border-radius: 10px;
  padding: 1.5rem;
  margin: 2rem 0;
  position: relative;
  
  &::before {
    content: '"';
    position: absolute;
    top: -10px;
    left: 20px;
    font-size: 3rem;
    color: #ff0000;
    opacity: 0.5;
  }
`;

const VerseText = styled.p`
  font-family: 'Kalam', cursive;
  font-size: 1.2rem;
  color: #ffffff;
  margin: 0;
  font-style: italic;
  line-height: 1.8;
`;

const VerseReference = styled.p`
  font-family: 'Press Start 2P', cursive;
  font-size: 0.8rem;
  color: #00ffff;
  text-align: right;
  margin: 1rem 0 0 0;
`;

interface Props {
  mousePosition: { x: number; y: number };
}

const Hero: React.FC<Props> = ({ mousePosition }) => {
  const [currentVerse, setCurrentVerse] = useState(0);
  
  const verses = [
    { text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.", reference: "John 3:16" },
    { text: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.", reference: "Matthew 7:7" },
    { text: "Come to me, all you who are weary and burdened, and I will give you rest.", reference: "Matthew 11:28" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVerse((prev) => (prev + 1) % verses.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [verses.length]);

  const symbols = ['✝', '☦', '✚', '✠', '✟', '☨', '☧', '⛪'];

  return (
    <HeroContainer id="hero">
      <FloatingElements>
        {symbols.map((symbol, index) => (
          <FloatingSymbol
            key={index}
            delay={index * 0.5}
            style={{
              left: `${10 + (index * 10)}%`,
              top: `${20 + (index * 8)}%`
            }}
            animate={{
              x: [0, 10, -10, 0],
              y: [0, -10, 10, 0],
            }}
            transition={{
              duration: 3 + index,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {symbol}
          </FloatingSymbol>
        ))}
      </FloatingElements>
      
      <HeroContent
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <GlitchTitle
          data-text="UPSIDE DOWN FAITH"
          animate={{
            textShadow: [
              "0.05em 0 0 #00ffff, -0.025em -0.05em 0 #ff1493, 0.025em 0.05em 0 #ffff00",
              "-0.05em -0.025em 0 #00ffff, 0.025em 0.025em 0 #ff1493, -0.05em -0.05em 0 #ffff00",
              "0.025em 0.05em 0 #00ffff, 0.05em 0 0 #ff1493, 0 -0.05em 0 #ffff00",
              "0 0.025em 0 #00ffff, 0.025em 0 0 #ff1493, -0.025em -0.025em 0 #ffff00",
              "0.05em 0 0 #00ffff, -0.025em -0.05em 0 #ff1493, 0.025em 0.05em 0 #ffff00"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        >
          UPSIDE DOWN FAITH
        </GlitchTitle>
        
        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          A welcoming space for seekers exploring faith in a complex world
        </Subtitle>
        
        <BibleVerse
          key={currentVerse}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <VerseText>{verses[currentVerse].text}</VerseText>
          <VerseReference>{verses[currentVerse].reference}</VerseReference>
        </BibleVerse>
        
        <CTAButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const element = document.getElementById('resources');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Begin Your Journey
        </CTAButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
