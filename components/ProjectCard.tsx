
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
      className="bg-[#1A1A1A] rounded-2xl p-6 flex flex-col h-full border border-[#2A2A2A] hover:border-[#FF6B00]/60 transition-all duration-300"
      variants={cardVariants}
      whileHover={{ y: -8, boxShadow: '0 10px 20px rgba(255,107,0,0.15)' }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      data-cursor-hoverable
    >
      <div className="flex-grow">
        <div className="mb-4">
          {project.icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
      
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map(tech => (
            <span key={tech} className="bg-white/10 backdrop-blur-sm text-[#FFDDBB] text-xs font-semibold px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mt-auto flex items-center space-x-4 pt-4">
        {project.githubLink && (
          <a 
            href={project.githubLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white border border-white/30 rounded-lg transition-all duration-300 hover:border-[#FF8533] hover:text-[#FF8533]"
            data-cursor-hoverable
            aria-label={`GitHub for ${project.name}`}
            title="GitHub Repository"
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </a>
        )}
        {project.liveLink && (
          <a 
            href={project.liveLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8533] rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,107,0,0.5)]"
            data-cursor-hoverable
            aria-label={`Live demo for ${project.name}`}
            title="Live Demo"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
