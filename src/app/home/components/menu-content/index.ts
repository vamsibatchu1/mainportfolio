import { HomeContent } from './HomeContent';
import { WorkContent } from './WorkContent';
import { BlogContent } from './BlogContent';
import { ExperimentsContent } from './ExperimentsContent';
import { AboutContent } from './AboutContent';
import { AskContent } from './AskContent';
import { MenuContentProps } from './types';

export type MenuContentComponent = React.ComponentType<MenuContentProps>;

export const MENU_CONTENT_MAP: Record<string, MenuContentComponent> = {
  '': HomeContent,      // empty string for home route
  'work': WorkContent,
  'blog': BlogContent,
  'experiments': ExperimentsContent,
  'about': AboutContent,
  'ask': AskContent,
};

export type { MenuContentProps } from './types';
export { HomeContent, WorkContent, BlogContent, ExperimentsContent, AboutContent, AskContent }; 