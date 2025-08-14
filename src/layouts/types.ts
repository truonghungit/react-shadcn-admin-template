import type { LinkProps } from '@tanstack/react-router';

interface User {
  name: string;
  email: string;
  avatar: string;
}

interface Team {
  name: string;
  logo: React.ElementType;
  plan: string;
}

interface BaseNavItem {
  title: string;
  badge?: string;
  icon?: React.ElementType;
}

export type NavLink = BaseNavItem & {
  url: LinkProps['to'];
  items?: never;
};

export type NavCollapsible = BaseNavItem & {
  items: (BaseNavItem & { url: LinkProps['to'] })[];
  url?: never;
};

export type NavItem = NavCollapsible | NavLink;

export type NavGroup = {
  title: string;
  items: NavItem[];
};

export type SidebarData = {
  user: User;
  teams: Team[];
  navGroups: NavGroup[];
};
