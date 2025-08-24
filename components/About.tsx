import React from 'react';
import Section from './Section';
import { motion, type Variants } from 'framer-motion';

interface AboutProps {
  setActiveSection: (id: string) => void;
}

const About = ({ setActiveSection }: AboutProps) => {
    const imageVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  const textVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
  };

  return (
    <Section id="about" title="About" setActiveSection={setActiveSection}>
      <div className="grid md:grid-cols-3 gap-12 items-center max-w-5xl mx-auto">
        <motion.div 
          className="md:col-span-1 flex justify-center"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <img 
            src="/images/profile.png" 
            alt="Satheem Muwaffaq"
            className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-[#2A2A2A] shadow-lg hover:border-[#FF6B00] transition-colors duration-300"
          />
        </motion.div>
        <motion.div 
          className="md:col-span-2 text-lg md:text-xl text-center md:text-left text-[#B3B3B3] leading-relaxed"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <p>
            I’m Satheem Muwaffaq, a passionate full stack developer who enjoys building scalable web apps. 
            With experience in frontend and backend, I focus on creating seamless user experiences with 
            clean, efficient code.
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;