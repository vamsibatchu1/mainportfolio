import { ReactNode } from 'react';

export interface MenuContentProps {
  isActive: boolean;
  onClose: () => void;
}

export interface MenuItem {
  title: string;
  description?: string;
  icon?: ReactNode;
  link?: string;
  image?: string;
  tag?: string;
  date?: string;
}

export interface MenuSection {
  title?: string;
  items: MenuItem[];
} 