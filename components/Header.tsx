import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const menuVariants: Variants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    exit: { opacity: 0, x: '100%', transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#0D0D0D]/80 backdrop-blur-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center h-20">
          <a href="#hero" className="text-2xl font-bold tracking-wider" data-cursor-hoverable>
            <span className="text-[#FF6B00]">S</span><span className="text-white">M</span>
          </a>
          <nav className="hidden md:block">
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
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(true)} 
              className="text-white p-2"
              aria-label="Open menu"
              data-cursor-hoverable
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-[#0D0D0D]/95 backdrop-blur-sm z-[100] md:hidden"
          >
            <div className="flex justify-end p-6">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-white p-2"
                aria-label="Close menu"
                data-cursor-hoverable
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center h-full -mt-20">
              <ul className="flex flex-col items-center space-y-10 text-center">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <li key={link.href}>
                      <a 
                        href={link.href} 
                        onClick={() => setIsMenuOpen(false)}
                        className={`text-3xl font-semibold transition-colors duration-300 ${isActive ? 'text-[#FF6B00]' : 'text-white'}`} 
                        data-cursor-hoverable
                      >
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;