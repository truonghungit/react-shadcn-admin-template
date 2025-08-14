import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  MessageSquareText,
  CircleCheck,
  Users,
  CircleAlert,
  LockKeyhole,
  Contact,
  FolderCheck,
  ChartPie,
} from 'lucide-react';
import type { SidebarData } from './types';

export const sidebarData: SidebarData = {
  user: {
    name: 'satnaing',
    email: 'satnaingdev@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Shadcn Admin',
      logo: Command,
      plan: 'Vite + ShadcnUI',
    },
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
  ],
  navGroups: [
    {
      title: 'Dashboard',
      items: [
        {
          title: 'Analytics',
          url: '/',
          icon: ChartPie,
        },
      ],
    },
    {
      title: 'Applications',
      items: [
        {
          title: 'Chat',
          url: '/under-construction',
          icon: MessageSquareText,
        },
        {
          title: 'Contacts',
          url: '/under-construction',
          icon: Contact,
        },
        {
          title: 'File Manager',
          url: '/under-construction',
          icon: FolderCheck,
        },
        {
          title: 'Users',
          url: '/under-construction',
          icon: Users,
        },
        {
          title: 'Tasks',
          url: '/under-construction',
          icon: CircleCheck,
        },
      ],
    },
    {
      title: 'Pages',
      items: [
        {
          title: 'Authentication',
          icon: LockKeyhole,
          items: [
            {
              title: 'Sign In',
              url: '/sign-in',
            },
            {
              title: 'Sign Up',
              url: '/sign-up',
            },
          ],
        },
        {
          title: 'Errors',
          icon: CircleAlert,
          items: [
            {
              title: 'Unauthorized',
              url: '/401',
            },
            {
              title: 'Forbidden',
              url: '/403',
            },
            {
              title: 'Not Found',
              url: '/404',
            },
            {
              title: 'Internal Server Error',
              url: '/500',
            },
            {
              title: 'Maintenance Error',
              url: '/503',
            },
          ],
        },
      ],
    },
  ],
};
