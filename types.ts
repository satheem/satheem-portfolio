import type React from 'react';

export interface Skill {
  name: string;
  icon: string;
  color: string;
  learning?: boolean;
}

export interface Project {
  name: string;
  description: string;
  techStack: string[];
  image: string;
  liveLink?: string;
  githubLink?: string;
}

export interface SocialLink {
  name:string;
  icon: React.ReactElement<{ className?: string }>;
  url: string;
}