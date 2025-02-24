import dynamic from 'next/dynamic';
import type { MenuContentProps } from './types';

export type MenuContentComponent = React.ComponentType<MenuContentProps>;

export const MENU_CONTENT_MAP: Record<string, MenuContentComponent> = {
  '': dynamic(() => import('./HomeContent').then(mod => mod.HomeContent), { ssr: false }),
  'work': dynamic(() => import('./WorkContent').then(mod => mod.WorkContent), { ssr: false }),
  'blog': dynamic(() => import('./BlogContent').then(mod => mod.BlogContent), { ssr: false }),
  'experiments': dynamic(() => import('./ExperimentsContent').then(mod => mod.ExperimentsContent), { ssr: false }),
  'about': dynamic(() => import('./AboutContent').then(mod => mod.AboutContent), { ssr: false }),
  'ask': dynamic(() => import('./AskContent').then(mod => mod.AskContent), { ssr: false }),
};

export type { MenuContentProps } from './types'; 