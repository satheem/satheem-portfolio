import React from 'react';
import type { Project, OtherProject, Skill, SocialLink } from './types';
import { 
  Github, 
  Instagram, 
  Linkedin, 
  Mail, 
  Film,
  StickyNote,
  CheckSquare,
  Bot,
  School,
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

export const FEATURED_PROJECTS: Project[] = [
  {
    name: 'Movie Search App',
    icon: React.createElement(Film, { className: 'w-8 h-8 text-[#FF8533]' }),
    description: 'A movie search app powered by The Movie Database (TMDB) API, allowing users to discover and browse movies.',
    techStack: ['React', 'Vite', 'TMDB API'],
    githubLink: 'https://github.com/satheem/movie-app',
  },
  {
    name: 'Note App',
    icon: React.createElement(StickyNote, { className: 'w-8 h-8 text-[#FF8533]' }),
    description: 'A modern and intuitive note-taking application with a clean, user-friendly interface for organizing thoughts and ideas.',
    techStack: ['React', 'Vite', 'Tailwind CSS'],
    liveLink: 'https://note-app-seven-chi.vercel.app/',
    githubLink: 'https://github.com/satheem/Note-App',
  },
  {
    name: 'Task Manager',
    icon: React.createElement(CheckSquare, { className: 'w-8 h-8 text-[#FF8533]' }),
    description: 'A task manager application to efficiently create, edit, and organize tasks, helping users stay productive and focused.',
    techStack: ['React', 'Vite'],
    liveLink: 'https://task-manager-react-brown.vercel.app/',
    githubLink: 'https://github.com/satheem/taskManager-React',
  },
  {
    name: 'Video Script Writer (AI Tool)',
    icon: React.createElement(Bot, { className: 'w-8 h-8 text-[#FF8533]' }),
    description: 'An AI-powered video script generator utilizing the Google Gemini API to help creators produce engaging content faster.',
    techStack: ['React', 'Node.js', 'Express.js', 'Gemini AI', 'MUI'],
    liveLink: 'https://video-script-writer-two.vercel.app/',
    githubLink: 'https://github.com/satheem/video-script-writer',
  },
  {
    name: 'Al-Aqsa National School Website',
    icon: React.createElement(School, { className: 'w-8 h-8 text-[#FF8533]' }),
    description: 'The official school website featuring a content management system (CMS), a student management system to publish term results online, and a comprehensive information hub.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS'],
    liveLink: 'http://www.alaqsans.com',
  },
];

export const OTHER_PROJECTS: OtherProject[] = [
    { name: 'E-Commerce Landing Page', liveLink: 'https://satheem.github.io/e-commerce-site/', githubLink: 'https://github.com/satheem/e-commerce-site' },
    { name: 'Counter App', liveLink: 'https://satheem.github.io/counter-app-js/', githubLink: 'https://github.com/satheem/counter-app-js?tab=readme-ov-file' },
    { name: 'Writings.dev Clone', liveLink: 'https://satheem.github.io/writings.dev/', githubLink: 'https://github.com/satheem/writings.dev' },
    { name: 'Landing Page Template', liveLink: 'https://satheem.github.io/landing-page/', githubLink: 'https://github.com/satheem/landing-page' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Email', icon: React.createElement(Mail, { className: 'w-6 h-6' }), url: 'mailto:satheem511@gmail.com' },
  { name: 'GitHub', icon: React.createElement(Github, { className: 'w-6 h-6' }), url: 'https://github.com/satheem' },
  { name: 'LinkedIn', icon: React.createElement(Linkedin, { className: 'w-6 h-6' }), url: 'https://linkedin.com/in/satheem' },
  { name: 'Instagram', icon: React.createElement(Instagram, { className: 'w-6 h-6' }), url: 'https://instagram.com/satheem.co' },
];