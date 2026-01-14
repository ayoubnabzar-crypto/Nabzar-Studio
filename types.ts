
export interface Project {
  id: string;
  title: string;
  category: 'Vitrine' | 'E-commerce' | 'Application Web' | 'Multi-page';
  description: string;
  image: string;
  stack: string[];
  link?: string;
}

export interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Soft Skills';
}
