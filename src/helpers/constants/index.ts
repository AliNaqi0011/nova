import { IThemeColor, ITemplate } from './index.interface';
import dynamic from 'next/dynamic';

export const SYSTEM_COLORS: IThemeColor[] = [
  {
    backgroundColor: 'white',
    fontColor: 'black',
    titleColor: '#1890ff',
    highlighterColor: 'yellowgreen',
    id: 1,
  },
  {
    backgroundColor: 'white',
    fontColor: '#780650',
    titleColor: '#254000',
    highlighterColor: 'burlywood',
    id: 2,
  },
  {
    backgroundColor: '#FFFFFF',
    fontColor: '#000000',
    titleColor: '#217503',
    highlighterColor: '#F556E5',
    id: 3,
  },
];

export const AVAILABLE_TEMPLATES: ITemplate = {
  modern: {
    id: 'modern',
    name: 'Modern Resume',
    thumbnail: '/templates/modern.png',
    component: dynamic(() => import('@/templates/modern/MordernTemplate')),
    atsCompliant: true,
    features: ['Clean Layout', 'ATS-Friendly', 'Professional Fonts'],
  },
  professional: {
    id: 'professional',
    name: 'Professional Resume',
    thumbnail: '/templates/professional.png',
    component: dynamic(() => import('@/templates/professional/ProfessionalTemplate')),
    atsCompliant: true,
    features: ['Corporate Style', 'ATS-Optimized', 'Standard Sections'],
  },
  simple: {
    id: 'simple',
    name: 'Simple Resume',
    thumbnail:
      'https://user-images.githubusercontent.com/12962887/201484876-75290af9-ccd6-4f6d-be96-6a8fb4f20c4b.png',
    component: dynamic(() => import('@/templates/simple/SimpleTemplate')),
    atsCompliant: true,
    features: ['Minimalist Design', 'ATS-Friendly', 'Easy to Read'],
  },
  simple2: {
    id: 'simple2',
    name: 'Simple 2',
    thumbnail: 'https://placehold.co/400x560.png',
    component: dynamic(() => import('@/templates/simple2/Simple2Template')),
  },
  simple3: {
    id: 'simple3',
    name: 'Simple 3',
    thumbnail: 'https://placehold.co/400x560.png',
    component: dynamic(() => import('@/templates/simple3/Simple3Template')),
  },
  simple4: {
    id: 'simple4',
    name: 'Simple 4',
    thumbnail: 'https://placehold.co/400x560.png',
    component: dynamic(() => import('@/templates/simple4/Simple4Template')),
  },
  simple5: {
    id: 'simple5',
    name: 'Simple 5',
    thumbnail: 'https://placehold.co/400x560.png',
    component: dynamic(() => import('@/templates/simple5/Simple5Template')),
  },
  simple6: {
    id: 'simple6',
    name: 'Simple 6',
    thumbnail: 'https://placehold.co/400x560.png',
    component: dynamic(() => import('@/templates/simple6/Simple6Template')),
  },
  creative1: {
    id: 'creative1',
    name: 'Creative 1',
    thumbnail: 'https://placehold.co/400x560.png',
    component: dynamic(() => import('@/templates/creative1/Creative1Template')),
  },
  iconic1: {
    id: 'iconic1',
    name: 'Iconic 1',
    thumbnail: 'https://placehold.co/400x560.png',
    component: dynamic(() => import('@/templates/iconic1/Iconic1Template')),
  },
  iconic2: {
    id: 'iconic2',
    name: 'Iconic 2',
    thumbnail: 'https://placehold.co/400x560.png',
    component: dynamic(() => import('@/templates/iconic2/Iconic2Template')),
  },
  iconic3: {
    id: 'iconic3',
    name: 'Iconic 3',
    thumbnail: 'https://placehold.co/400x560.png',
    component: dynamic(() => import('@/templates/iconic3/Iconic3Template')),
  },
  iconic4: {
    id: 'iconic4',
    name: 'Iconic 4',
    thumbnail: 'https://placehold.co/400x560.png',
    component: dynamic(() => import('@/templates/iconic4/Iconic4Template')),
  },
  iconic5: {
    id: 'iconic5',
    name: 'Iconic 5',
    thumbnail: 'https://placehold.co/400x560.png',
    component: dynamic(() => import('@/templates/iconic5/Iconic5Template')),
  },
  iconic6: {
    id: 'iconic6',
    name: 'Iconic 6',
    thumbnail: 'https://placehold.co/400x560.png',
    component: dynamic(() => import('@/templates/iconic6/Iconic6Template')),
  },
  impact: {
    id: 'impact',
    name: 'Impact',
    thumbnail: 'https://placehold.co/400x560.png',
    component: dynamic(() => import('@/templates/impact/ImpactTemplate')),
  },
  impact2: {
    id: 'impact2',
    name: 'Impact 2',
    thumbnail: 'https://placehold.co/400x560.png',
    component: dynamic(() => import('@/templates/impact2/Impact2Template')),
  },
  impact3: {
    id: 'impact3',
    name: 'Impact 3',
    thumbnail: 'https://placehold.co/400x560.png',
    component: dynamic(() => import('@/templates/impact3/Impact3Template')),
  },
  impact4: {
    id: 'impact4',
    name: 'Impact 4',
    thumbnail: 'https://placehold.co/400x560.png',
    component: dynamic(() => import('@/templates/impact4/Impact4Template')),
  },
  impact5: {
    id: 'impact5',
    name: 'Impact 5',
    thumbnail: 'https://placehold.co/400x560.png',
    component: dynamic(() => import('@/templates/impact5/Impact5Template')),
  },
  impact6: {
    id: 'impact6',
    name: 'Impact 6',
    thumbnail: 'https://placehold.co/400x560.png',
    component: dynamic(() => import('@/templates/impact6/Impact6Template')),
  },
  marketing: {
    id: 'marketing',
    name: 'Marketing',
    thumbnail: 'https://placehold.co/400x560.png',
    component: dynamic(() => import('@/templates/marketing/MarketingTemplate')),
  },
  modern2: {
    id: 'modern2',
    name: 'Modern 2',
    thumbnail: 'https://placehold.co/400x560.png',
    component: dynamic(() => import('@/templates/modern2/Modern2Template')),
  },
  modern3: {
    id: 'modern3',
    name: 'Modern 3',
    thumbnail: 'https://placehold.co/400x560.png',
    component: dynamic(() => import('@/templates/modern3/Modern3Template')),
  },
  modern4: {
    id: 'modern4',
    name: 'Modern 4',
    thumbnail: 'https://placehold.co/400x560.png',
    component: dynamic(() => import('@/templates/modern4/Modern4Template')),
  },
  modern5: {
    id: 'modern5',
    name: 'Modern 5',
    thumbnail: 'https://placehold.co/400x560.png',
    component: dynamic(() => import('@/templates/modern5/Modern5Template')),
  },
  professional2: {
    id: 'professional2',
    name: 'Professional 2',
    thumbnail: '/templates/professional.png',
    component: dynamic(() => import('@/templates/professional2/Professional2Template')),
  },
  professional3: {
    id: 'professional3',
    name: 'Professional 3',
    thumbnail: '/templates/professional.png',
    component: dynamic(() => import('@/templates/professional3/Professional3Template')),
  },
  professional4: {
    id: 'professional4',
    name: 'Professional 4',
    thumbnail: '/templates/professional.png',
    component: dynamic(() => import('@/templates/professional4/Professional4Template')),
  },
  professional5: {
    id: 'professional5',
    name: 'Professional 5',
    thumbnail: '/templates/professional.png',
    component: dynamic(() => import('@/templates/professional5/Professional5Template')),
  },
  professional6: {
    id: 'professional6',
    name: 'Professional 6',
    thumbnail: '/templates/professional.png',
    component: dynamic(() => import('@/templates/professional6/Professional6Template')),
  },
  architecture: {
    id: 'architecture',
    name: 'Architecture',
    thumbnail: 'https://placehold.co/400x560.png',
    component: dynamic(() => import('@/templates/arcitecture/ArcitectureTemplate')),
  },
};

export const CUSTOM_THEME_COLOR: IThemeColor = {
  backgroundColor: 'white',
  fontColor: 'black',
  titleColor: 'green',
  highlighterColor: '#ff7875',
  id: 4,
};

export const DATE_PICKER_FORMAT = 'DD/MM/YYYY';
