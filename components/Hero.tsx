
import React, { useEffect, useRef, useMemo, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';
import { Download, Mouse, ArrowRight } from 'lucide-react';

interface HeroProps {
  setActiveSection: (id: string) => void;
}

const keySkills = [
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB', color: '#61DAFB' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933', color: '#339933' },
  { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', color: '#06B6D4' },
  { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248', color: '#47A248' },
];

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
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center justify-center md:justify-start text-center md:text-left pt-28">
      {/* Background Effects Container */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {/* Pulsing Orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(circle_at_center,_rgba(255,107,0,0.25)_0%,_rgba(255,165,0,0.1)_30%,_transparent_60%)]"
          animate={{
            transform: ['translate(-50%, -50%) scale(1)', 'translate(-50%, -50%) scale(1.2)', 'translate(-50%, -50%) scale(1)'],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

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
        <div className="absolute top-0 right-0 h-full w-2/f bg-gradient-to-l from-[#0D0D0D] to-transparent" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4 md:space-y-6 max-w-3xl"
      >
        <motion.h1
          variants={nameVariants}
          onAnimationComplete={() => setIsNameAnimationComplete(true)}
          className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight"
        >
          {name.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants} className="inline-block">
              {char === " " ? "\u00A0" : char}
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
        <motion.h2 
          variants={itemVariants} 
          className="text-lg sm:text-2xl md:text-3xl font-light text-[#B3B3B3]"
        >
          Full Stack Developer crafting modern web apps
        </motion.h2>

        <motion.div variants={itemVariants} className="flex justify-center md:justify-start items-center space-x-6 pt-2">
          {keySkills.map(skill => (
            <motion.div
              key={skill.name}
              title={skill.name}
              whileHover={{
                scale: 1.2,
                filter: `drop-shadow(0 0 10px ${skill.color})`
              }}
              transition={{ type: 'spring', stiffness: 300 }}
              data-cursor-hoverable
            >
              <img src={skill.icon} alt={skill.name} className="h-8 w-8 md:h-9 md:w-9" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-4 pt-4">
          <a
            href="/resume.pdf"
            download
            className="group inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-[#FF6B00] rounded-full transition-all duration-300 hover:bg-[#FF8533] w-full sm:w-auto"
            data-cursor-hoverable
          >
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </a>
          <a
            href="#projects"
            className="group inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white border border-white/40 rounded-full transition-all duration-300 hover:border-[#FF6B00] hover:text-[#FF6B00] w-full sm:w-auto"
            data-cursor-hoverable
          >
            View My Work
            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
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

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <a href="#about" aria-label="Scroll to next section" data-cursor-hoverable>
            <motion.div
                className="text-[#B3B3B3] hover:text-white transition-colors"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
            >
                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <Mouse className="w-7 h-7" />
                </motion.div>
            </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
