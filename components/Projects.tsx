import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../constants';

interface ProjectsProps {
  setActiveSection: (id: string) => void;
}

const Projects = ({ setActiveSection }: ProjectsProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <Section id="projects" title="Projects" setActiveSection={setActiveSection}>
      <motion.div 
        className="grid md:grid-cols-2 gap-8 lg:gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </motion.div>
    </Section>
  );
};

export default Projects;
