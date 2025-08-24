
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
      className="relative rounded-lg overflow-hidden border border-[#2A2A2A] group min-h-[20rem] flex flex-col justify-end hover:border-[#FF6B00] hover:shadow-2xl hover:shadow-[#FF6B00]/10"
      variants={cardVariants}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      data-cursor-hoverable
    >
      <img src={project.image} alt={project.name} className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      
      <div className="relative p-6 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
        <p className="text-[#B3B3B3] mb-4 text-sm line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map(tech => (
            <span key={tech} className="bg-[#2A2A2A]/80 backdrop-blur-sm text-[#FF8533] text-xs font-semibold px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links that appear on hover */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center space-x-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-white hover:text-[#FF6B00] transition-colors duration-300">
              <ExternalLink className="w-8 h-8 mb-1" />
              <span className="text-sm font-medium">Live Demo</span>
            </a>
          )}
          {project.githubLink ? (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-white hover:text-[#FF6B00] transition-colors duration-300">
              <Github className="w-8 h-8 mb-1" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
          ) : (
             <div className="flex flex-col items-center text-gray-400 cursor-not-allowed">
              <Github className="w-8 h-8 mb-1" />
              <span className="text-sm font-medium">Coming Soon</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;