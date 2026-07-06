export interface Education {
  institution: string;
  degree: string;
  field: string;
  location: string;
  period: string;
}

export interface WorkExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface CoreSkill {
  name: string;
  category: string;
  description: string;
  proficiency: number; // 1-5 level
}

export interface ToolCategory {
  category: string;
  tools: {
    name: string;
    level: 'Advanced' | 'Intermediate' | 'Basic';
    iconName: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  category: 'Poster Design' | 'Reel Concept' | 'Digital Strategy';
  outcome: string;
  tags: string[];
  mockImageUrl?: string;
}

export interface CampaignConcept {
  id: string;
  niche: string;
  audience: string;
  objective: string;
  hook: string;
  copy: string;
  visualConcept: string;
  hashtags: string[];
  posterDesignPrompt: string;
  suggestedTools: string[];
}
