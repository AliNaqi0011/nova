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
  },
  professional: {
    id: 'professional',
    name: 'Professional Resume',
    thumbnail: '/templates/professional.png',
    component: dynamic(() => import('@/templates/professional/ProfessionalTemplate')),
  },
  simple: {
    id: 'simple',
    name: 'Simple Resume',
    thumbnail:
      'https://user-images.githubusercontent.com/12962887/201484876-75290af9-ccd6-4f6d-be96-6a8fb4f20c4b.png',
    component: dynamic(() => import('@/templates/simple/SimpleTemplate')),
  },
  creative1: {
    id: 'creative1',
    name: 'Creative 1',
    thumbnail: 'https://placehold.co/400x560.png',
    component: dynamic(() => import('@/templates/creative1/Creative1Template')),
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
};

export const CUSTOM_THEME_COLOR: IThemeColor = {
  backgroundColor: 'white',
  fontColor: 'black',
  titleColor: 'green',
  highlighterColor: '#ff7875',
  id: 4,
};

export const DATE_PICKER_FORMAT = 'DD/MM/YYYY';
