
import React from 'react';
import { motion, Variants } from 'framer-motion';
import type { Project } from '../types';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="group relative h-96 rounded-2xl overflow-hidden border border-[#2A2A2A] hover:border-[#FF6B00] hover:shadow-xl hover:shadow-[#FF6B00]/10"
      variants={cardVariants}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      data-cursor-hoverable
    >
      {/* Background Image */}
      <img 
        src={project.image} 
        alt={project.name} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" 
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent transition-all duration-300 group-hover:from-black/80 group-hover:via-black/50" />
      
      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col h-full justify-end">
        <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
        <p className="text-gray-300 mb-4 text-sm line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map(tech => (
            <span key={tech} className="bg-white/10 backdrop-blur-sm text-[#FFDDBB] text-xs font-semibold px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
          {project.liveLink && (
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-[#FF6B00] transition-colors duration-300"
              aria-label="Live Demo"
              title="Live Demo"
            >
              <ExternalLink className="w-6 h-6" />
            </a>
          )}
          {project.githubLink ? (
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-[#FF6B00] transition-colors duration-300"
              aria-label="GitHub Repository"
              title="GitHub Repository"
            >
              <Github className="w-6 h-6" />
            </a>
          ) : (
             <div className="text-gray-500 cursor-not-allowed" title="Coming Soon">
              <Github className="w-6 h-6" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
