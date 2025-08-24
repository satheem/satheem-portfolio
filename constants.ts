import React from 'react';
import type { Project, Skill, SocialLink } from './types';
import { 
  Github, 
  Instagram, 
  Linkedin, 
  Mail, 
} from 'lucide-react';

export const SKILL_CATEGORIES: { [key: string]: Skill[] } = {
  "Languages": [
    { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E', color: '#F7DF1E' },
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB', color: '#3776AB' },
    { name: 'PHP', icon: 'https://cdn.simpleicons.org/php/777BB4', color: '#777BB4' },
  ],
  "Frontend": [
    { name: 'HTML', icon: 'https://cdn.simpleicons.org/html5/E34F26', color: '#E34F26' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: '#1572B6' },
    { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB', color: '#61DAFB' },
    { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', color: '#06B6D4' },
  ],
  "Backend": [
    { name: 'PHP', icon: 'https://cdn.simpleicons.org/php/777BB4', color: '#777BB4' },
    { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933', color: '#339933', learning: true },
    { name: 'Express.js', icon: 'https://cdn.simpleicons.org/express/FFFFFF', color: '#FFFFFF', learning: true },
  ],
  "Databases": [
    { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248', color: '#47A248', learning: true },
    { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1', color: '#4479A1' },
  ],
  "Tools & Others": [
    { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032', color: '#F05032' },
    { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/FFFFFF', color: '#FFFFFF' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', color: '#007ACC' },
  ]
};

export const PROJECTS: Project[] = [
  {
    name: 'E-Shop Platform',
    description: 'A modern e-commerce platform with a focus on user experience, featuring product catalogs, a shopping cart, and a secure checkout process.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=1920',
    liveLink: '#',
    githubLink: 'https://github.com/satheem',
  },
  {
    name: 'ProTask Manager',
    description: 'A task management application designed for teams to collaborate, track progress, and manage projects efficiently with an intuitive interface.',
    techStack: ['React', 'PHP', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1920',
    liveLink: '#',
  },
  {
    name: 'Dev-Blog',
    description: 'A personal blog platform for developers to share articles, tutorials, and insights. Built with a minimalist design and optimized for readability.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1920',
    liveLink: '#',
    githubLink: 'https://github.com/satheem',
  },
    {
    name: 'Portfolio Website',
    description: 'My personal developer portfolio to showcase my skills and projects. Designed with a sleek, modern dark theme and smooth animations.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1920',
    liveLink: '#',
    githubLink: 'https://github.com/satheem',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Email', icon: React.createElement(Mail, { className: 'w-6 h-6' }), url: 'mailto:satheem511@gmail.com' },
  { name: 'GitHub', icon: React.createElement(Github, { className: 'w-6 h-6' }), url: 'https://github.com/satheem' },
  { name: 'LinkedIn', icon: React.createElement(Linkedin, { className: 'w-6 h-6' }), url: 'https://linkedin.com/in/satheem' },
  { name: 'Instagram', icon: React.createElement(Instagram, { className: 'w-6 h-6' }), url: 'https://instagram.com/satheem.co' },
];