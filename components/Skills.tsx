import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { SKILL_CATEGORIES } from '../constants';

interface SkillsProps {
  setActiveSection: (id: string) => void;
}

const Skills: React.FC<SkillsProps> = ({ setActiveSection }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <Section id="skills" title="Skills" setActiveSection={setActiveSection}>
      <div className="max-w-6xl mx-auto space-y-12">
        {Object.entries(SKILL_CATEGORIES).map(([category, skills]) => (
          <motion.div 
            key={category}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <h3 className="text-2xl font-semibold text-center mb-8 text-[#FF8533]">{category}</h3>
            <div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="relative bg-[#1A1A1A] p-4 rounded-lg flex flex-col items-center justify-center text-center space-y-3 border border-[#2A2A2A] transition-colors duration-300 hover:border-[#444]"
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: `0 0 20px 5px ${skill.color}30`
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  data-cursor-hoverable
                >
                  {skill.learning && (
                     <span className="absolute -top-2 -right-2 bg-[#FF6B00] text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10">
                      Learning
                    </span>
                  )}
                  <div className="h-12 w-12 flex items-center justify-center">
                    <img src={skill.icon} alt={`${skill.name} logo`} className="h-full w-full object-contain" />
                  </div>
                  <p className="font-medium text-white text-sm">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;