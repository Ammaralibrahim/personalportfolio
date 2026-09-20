export interface ProjectScreenshot {
  id: string;
  title: string;
  caption: string;
  category: string;
  url: string;
  alt: string;
  technicalDetails?: string[];
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  role: string;
  period: string;
  company?: string;
  featured: boolean;
  status: 'In Production' | 'Completed' | 'Internal System';
  summary: string;
  architecture: string[];
  engineeringChallenges: string[];
  technologies: string[];
  heroImage?: string;
  screenshots?: ProjectScreenshot[];
  problemStatement?: string;
  operationalContext?: string;
  systemScale?: {
    capacity?: string;
    units?: string;
    records?: string;
    frequency?: string;
  };
  links: {
    live?: string;
    github?: string;
    note?: string;
  };
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Education {
  level: string;
  focus: string;
  status: string;
  note: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}