
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  setActiveSection: (id: string) => void;
}

const Section = ({ id, title, children, setActiveSection }: SectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { amount: 0.15 });

  useEffect(() => {
    if (isInView) {
      setActiveSection(id);
    }
  }, [isInView, id, setActiveSection]);

  const titleTextVariants = {
    initial: {
      color: '#B3B3B3',
    },
    inView: {
      color: '#FFFFFF',
    }
  };

  return (
    <motion.section
      ref={ref}
      id={id}
      className="py-16 md:py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-12 md:mb-16">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center font-mono"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="text-[#FF6B00]/80">&lt;</span>
          <motion.span
            className="tracking-wider"
            variants={titleTextVariants}
            initial="initial"
            whileInView="inView"
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {title}
          </motion.span>
          <span className="text-[#FF6B00]/80"> /&gt;</span>
        </motion.h2>
      </div>
      {children}
    </motion.section>
  );
};

export default Section;