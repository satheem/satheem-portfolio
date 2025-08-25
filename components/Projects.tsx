import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './Section';
import ProjectCard from './ProjectCard';
import { FEATURED_PROJECTS, OTHER_PROJECTS } from '../constants';
import { Github, ExternalLink, ChevronDown } from 'lucide-react';

interface ProjectsProps {
  setActiveSection: (id: string) => void;
}

const Projects = ({ setActiveSection }: ProjectsProps) => {
  const [showMore, setShowMore] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const otherProjectsContainerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, height: 0 },
  };

  const otherProjectItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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
        {FEATURED_PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </motion.div>

      <div className="mt-16 text-center">
        <motion.button
          onClick={() => setShowMore(!showMore)}
          className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white border border-white/40 rounded-full transition-all duration-300 hover:border-[#FF6B00] hover:text-[#FF6B00]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          data-cursor-hoverable
        >
          {showMore ? 'Show Less' : 'View More Projects'}
          <ChevronDown 
            className={`w-5 h-5 ml-2 transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`} 
          />
        </motion.button>
      </div>

      <AnimatePresence>
        {showMore && (
          <motion.div
            variants={otherProjectsContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden"
          >
            <h3 className="text-3xl font-semibold text-center mb-10 mt-16 text-[#FF8533]">Other Noteworthy Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {OTHER_PROJECTS.map((project) => (
                <motion.div
                  key={project.name}
                  className="bg-[#1A1A1A] p-5 rounded-lg border border-[#2A2A2A] transition-all duration-300 hover:border-[#FF6B00] hover:scale-105 flex justify-between items-center"
                  variants={otherProjectItemVariants}
                  data-cursor-hoverable
                >
                  <h4 className="font-semibold text-white mr-4">{project.name}</h4>
                  <div className="flex items-center space-x-4 flex-shrink-0">
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" className="text-gray-400 hover:text-[#FF6B00] transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveLink && (
                       <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" title="Live Demo" className="text-gray-400 hover:text-[#FF6B00] transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Projects;
