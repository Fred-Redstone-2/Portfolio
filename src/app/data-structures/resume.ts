import { TechSkillCategories, TechSkills } from './tech-skills';

export interface ResumeEducationItem {
  school: string;
  degree: string;
  date: string;
  details?: string;
}

export interface ResumeExperienceItem {
  role: string;
  company: string;
  date: string;
  tasks: string[];
}

export interface ResumeProjectItem {
  title: string;
  description: string;
  date: string;
  techs: TechSkills[];
  highlights: string[];
  preview: string;
  url: string;
}

export interface ResumeLanguageItem {
  name: string;
  level: string;
}

export interface ResumeData {
  profile: string;
  techSkills: Record<TechSkillCategories, TechSkills[][]>;
  education: ResumeEducationItem[];
  experience: ResumeExperienceItem[];
  projects: ResumeProjectItem[];
  languages: ResumeLanguageItem[];
}
