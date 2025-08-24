import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { SKILL_CATEGORIES } from '../constants';

interface TechSphereProps {
  setActiveSection: (id: string) => void;
}

const TechSphere = ({ setActiveSection }: TechSphereProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const iconVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.5 },
      filter: 'drop-shadow(0 0 0px transparent)',
    },
  };

  return (
    <Section id="skills" title="Skills" setActiveSection={setActiveSection}>
      <div className="max-w-6xl mx-auto space-y-20">
        {Object.entries(SKILL_CATEGORIES).map(([category, skills]) => (
          <motion.div 
            key={category}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <h3 className="text-2xl font-semibold text-center mb-12 text-[#FF8533]">{category}</h3>
            <div
              className="flex flex-wrap justify-center items-center gap-10 md:gap-16"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="relative"
                  variants={iconVariants}
                  whileHover={{
                    scale: 1.1,
                    filter: `drop-shadow(0 0 12px ${skill.color})`
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                  data-cursor-hoverable
                  title={skill.name}
                >
                  {skill.learning && (
                     <span className="absolute -top-1 -right-1 bg-[#FF6B00] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full z-10 select-none">
                      Learning
                    </span>
                  )}
                  <div className="h-20 w-20 flex items-center justify-center p-2">
                    <img src={skill.icon} alt={`${skill.name} logo`} className="h-full w-full object-contain" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default TechSphere;
