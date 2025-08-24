import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

interface HeaderProps {
  activeSection: string;
}

const Header = ({ activeSection }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0D0D0D]/80 backdrop-blur-lg border-b border-[#2A2A2A]' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center h-20">
        <a href="#hero" className="text-2xl font-bold tracking-wider" data-cursor-hoverable>
          <span className="text-[#FF6B00]">S</span><span className="text-white">M</span>
        </a>
        <nav>
          <ul className="flex items-center space-x-6 md:space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className={`text-[#B3B3B3] hover:text-white transition-colors duration-300 pb-1 border-b-2 ${isActive ? 'text-white border-[#FF6B00]' : 'border-transparent hover:border-[#FF6B00]'}`} 
                    data-cursor-hoverable
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
