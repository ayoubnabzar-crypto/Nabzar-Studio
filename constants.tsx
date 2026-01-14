
import React from 'react';
import { Layout, ShoppingCart, Layers, Code2, Globe, Server, Database, Zap, Search, ShieldCheck } from 'lucide-react';
import { Project, Service, Skill } from './types';

export const SERVICES: Service[] = [
  {
    id: 'vitrine',
    title: 'Site Vitrine',
    icon: <Globe className="w-8 h-8 text-indigo-600" />,
    description: 'Présentez votre entreprise avec élégance. Design moderne, responsive et optimisé pour le SEO.',
    features: ['Design Unique', 'Optimisation Mobile', 'SEO Technique', 'Vitesse de chargement']
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    icon: <ShoppingCart className="w-8 h-8 text-indigo-600" />,
    description: 'Boutique en ligne complète avec gestion de catalogue, paiements sécurisés et tunnel d\'achat optimisé.',
    features: ['Paiement Stripe/PayPal', 'Gestion de stock', 'Dashboard Vendeur', 'Analytics']
  },
  {
    id: 'multipage',
    title: 'Site Multi-pages',
    icon: <Layers className="w-8 h-8 text-indigo-600" />,
    description: 'Architecture complexe pour les besoins d\'informations denses. Navigation fluide et structure hiérarchique.',
    features: ['Navigation avancée', 'Blog intégré', 'Gestion de contenu', 'Interactivité']
  },
  {
    id: 'webapp',
    title: 'Application Web / CRM',
    icon: <Code2 className="w-8 h-8 text-indigo-600" />,
    description: 'Outils métier sur mesure : portails clients, SaaS, outils de gestion interne avec authentification.',
    features: ['Auth sécurisée', 'Base de données temps réel', 'Exports PDF/Excel', 'Rôles utilisateurs']
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'LuxeImmo - Site Vitrine',
    category: 'Vitrine',
    description: 'Un site élégant pour une agence immobilière de luxe avec visite virtuelle intégrée.',
    image: 'https://picsum.photos/seed/immo/800/600',
    stack: ['React', 'Tailwind CSS', 'Framer Motion']
  },
  {
    id: '2',
    title: 'ArtisanMarket - E-commerce',
    category: 'E-commerce',
    description: 'Marketplace pour artisans locaux avec système de paiement multi-vendeurs.',
    image: 'https://picsum.photos/seed/market/800/600',
    stack: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma']
  },
  {
    id: '3',
    title: 'NovaCRM - Dashboard',
    category: 'Application Web',
    description: 'Outil de gestion de relation client avec analyse prédictive des ventes.',
    image: 'https://picsum.photos/seed/crm/800/600',
    stack: ['React', 'Node.js', 'Chart.js', 'MongoDB']
  }
];

export const SKILLS: Skill[] = [
  { name: 'React / Next.js', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
  { name: 'Node.js / Express', level: 85, category: 'Backend' },
  { name: 'PostgreSQL / MongoDB', level: 80, category: 'Backend' },
  { name: 'Docker / CI/CD', level: 75, category: 'Tools' },
  { name: 'Gestion de projet', level: 90, category: 'Soft Skills' },
  { name: 'Communication', level: 95, category: 'Soft Skills' }
];
