import React from 'react';
import Section from './Section';
import { SOCIAL_LINKS } from '../constants';
import { motion } from 'framer-motion';

interface ContactProps {
  setActiveSection: (id: string) => void;
}

const Contact = ({ setActiveSection }: ContactProps) => {
  return (
    <Section id="contact" title="Contact" setActiveSection={setActiveSection}>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-[#B3B3B3] mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out to me.
        </p>
        <motion.a
          href="mailto:satheem511@gmail.com"
          className="inline-block bg-gradient-to-r from-[#FF6B00] to-[#FF8533] text-white font-bold text-lg px-8 py-4 rounded-full"
          whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(255, 107, 0, 0.6)' }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          data-cursor-hoverable
        >
          Say Hello
        </motion.a>
        <div className="flex justify-center items-center space-x-6 mt-12">
            {SOCIAL_LINKS.map(link => (
              <motion.a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#B3B3B3] hover:text-[#FF6B00]"
                whileHover={{ scale: 1.25, y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                aria-label={link.name}
                data-cursor-hoverable
              >
                {React.cloneElement(link.icon, { className: 'w-8 h-8' })}
              </motion.a>
            ))}
          </div>
      </div>
    </Section>
  );
};

export default Contact;