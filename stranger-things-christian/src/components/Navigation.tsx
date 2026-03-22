import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 2px solid #ff0000;
  padding: 1rem 2rem;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-family: 'Press Start 2P', cursive;
  font-size: 1.2rem;
  color: #ff0000;
  text-shadow: 0 0 10px #ff0000;
  cursor: pointer;
  
  &:hover {
    color: #00ffff;
    text-shadow: 0 0 15px #00ffff;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  color: #ffffff;
  text-decoration: none;
  font-family: 'Kalam', cursive;
  font-size: 1.1rem;
  font-weight: 600;
  position: relative;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #ff0000;
    transition: width 0.3s ease;
  }
  
  &:hover::before {
    width: 100%;
  }
  
  &:hover {
    color: #00ffff;
    text-shadow: 0 0 5px #00ffff;
  }
`;

const HamburgerButton = styled(motion.button)`
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const HamburgerLine = styled(motion.div)<{ isOpen: boolean }>`
  width: 25px;
  height: 3px;
  background: #ff0000;
  margin: 3px 0;
  transition: all 0.3s ease;
  
  ${props => props.isOpen && `
    &:first-child {
      transform: rotate(45deg) translate(5px, 5px);
    }
    
    &:nth-child(2) {
      opacity: 0;
    }
    
    &:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px);
    }
  `}
`;

const MobileMenu = styled(motion.div)<{ isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 2px solid #ff0000;
  padding: 1rem;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
  }
`;

const MobileNavLink = styled(motion.a)`
  display: block;
  color: #ffffff;
  text-decoration: none;
  font-family: 'Kalam', cursive;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 0, 0, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    color: #00ffff;
    background: rgba(255, 0, 0, 0.1);
    padding-left: 1.5rem;
  }
`;

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <NavContainer
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <NavContent>
          <Logo
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('hero')}
          >
            UPSIDE DOWN FAITH
          </Logo>
          
          <NavLinks>
            <NavLink
              whileHover={{ y: -2 }}
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero');
              }}
            >
              Home
            </NavLink>
            <NavLink
              whileHover={{ y: -2 }}
              href="#resources"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('resources');
              }}
            >
              Resources
            </NavLink>
            <NavLink
              whileHover={{ y: -2 }}
              href="#videos"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('videos');
              }}
            >
              Videos
            </NavLink>
            <NavLink
              whileHover={{ y: -2 }}
              href="#blog"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('blog');
              }}
            >
              Blog
            </NavLink>
            <NavLink
              whileHover={{ y: -2 }}
              href="#subscribe"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('subscribe');
              }}
            >
              Subscribe
            </NavLink>
          </NavLinks>
          
          <HamburgerButton
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.9 }}
          >
            <HamburgerLine isOpen={isMobileMenuOpen} />
            <HamburgerLine isOpen={isMobileMenuOpen} />
            <HamburgerLine isOpen={isMobileMenuOpen} />
          </HamburgerButton>
        </NavContent>
      </NavContainer>
      
      <MobileMenu
        isOpen={isMobileMenuOpen}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <MobileNavLink
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
          whileHover={{ x: 10 }}
        >
          Home
        </MobileNavLink>
        <MobileNavLink
          href="#resources"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('resources');
          }}
          whileHover={{ x: 10 }}
        >
          Resources
        </MobileNavLink>
        <MobileNavLink
          href="#videos"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('videos');
          }}
          whileHover={{ x: 10 }}
        >
          Videos
        </MobileNavLink>
        <MobileNavLink
          href="#blog"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('blog');
          }}
          whileHover={{ x: 10 }}
        >
          Blog
        </MobileNavLink>
        <MobileNavLink
          href="#subscribe"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('subscribe');
          }}
          whileHover={{ x: 10 }}
        >
          Subscribe
        </MobileNavLink>
      </MobileMenu>
    </>
  );
};

export default Navigation;
