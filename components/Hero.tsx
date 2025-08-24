
import React, { useEffect, useRef, useMemo, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';
import { Download } from 'lucide-react';

interface HeroProps {
  setActiveSection: (id: string) => void;
}

// Helper function to generate a stream of binary code
const generateBinaryStream = (length = 200) =>
  Array.from({ length }, () => Math.round(Math.random())).join('');

const Hero = ({ setActiveSection }: HeroProps) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const [isNameAnimationComplete, setIsNameAnimationComplete] = useState(false);

  useEffect(() => {
    if (isInView) {
      setActiveSection('hero');
    }
  }, [isInView, setActiveSection]);

  const streams = useMemo(() => {
    const streamCount = 25;
    return Array.from({ length: streamCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${Math.random() * 8 + 12}s`, // Duration between 12s and 20s
      delay: `-${Math.random() * 20}s`, // Negative delay to start immediately
      content: generateBinaryStream(Math.floor(Math.random() * 50 + 50)),
    }));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };
  
  const name = "Satheem Muwaffaq";
  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center justify-start text-left overflow-hidden">
      {/* Background Effects Container */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {/* Binary Rain Effect */}
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
          {streams.map((stream) => (
            <div
              key={stream.id}
              className="absolute text-[#FF6B00]/20 font-mono text-xs select-none binary-stream"
              style={{
                left: stream.left,
                animationDuration: stream.duration,
                animationDelay: stream.delay,
                writingMode: 'vertical-rl',
                textOrientation: 'upright',
              }}
            >
              {stream.content}
            </div>
          ))}
        </div>

        {/* Left & Right Shadow Vignette */}
        <div className="absolute top-0 left-0 h-full w-2/5 bg-gradient-to-r from-[#0D0D0D] to-transparent" />
        <div className="absolute top-0 right-0 h-full w-2/5 bg-gradient-to-l from-[#0D0D0D] to-transparent" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6 max-w-3xl"
      >
        <motion.h1
          variants={nameVariants}
          onAnimationComplete={() => setIsNameAnimationComplete(true)}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight"
        >
          {name.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants} className="inline-block">
              {char === " " ? " " : char}
            </motion.span>
          ))}
          <motion.span
            variants={letterVariants}
            className="inline-block text-[#FF6B00]"
            animate={isNameAnimationComplete ? { opacity: [1, 0] } : {}}
            transition={isNameAnimationComplete ? { duration: 0.6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' } : {}}
          >
            |
          </motion.span>
        </motion.h1>
        <motion.h2 variants={itemVariants} className="text-xl sm:text-2xl md:text-3xl font-light text-[#B3B3B3]">
          Full Stack Developer crafting modern web apps
        </motion.h2>
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
          <a
            href="/resume.pdf"
            download
            className="group relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-[#FF6B00] rounded-full overflow-hidden transition-all duration-300 hover:bg-[#FF8533] w-full sm:w-auto"
            data-cursor-hoverable
          >
            <span className="relative flex items-center">
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </span>
          </a>
          <div className="flex items-center space-x-4">
            {SOCIAL_LINKS.map(link => (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#B3B3B3] hover:text-[#FF6B00] transition-transform duration-300 hover:scale-125"
                aria-label={link.name}
                data-cursor-hoverable
              >
                {link.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;