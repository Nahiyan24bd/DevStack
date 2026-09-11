// Strict union types for categories and difficulty levels.
export type TechCategory = 
  | 'Frontend' 
  | 'Backend' 
  | 'Database' 
  | 'Language' 
  | 'Styling' 
  | 'DevOps' 
  | 'Tools';

export type TechDifficulty = 
  | 'Beginner-Friendly' 
  | 'Intermediate' 
  | 'Advanced';

// Technology object type interface
export interface TechnologyItem {
  id: string;
  name: string;
  category: TechCategory | string;
  description: string;
  icon: string;
  rating: number;
  difficulty: TechDifficulty | string;
  badge: string;
}

// Technology Component Props Type
export interface TechnologyProps {
  techData: TechnologyItem[];
}