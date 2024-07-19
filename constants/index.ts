import { PostLink, SidebarLink } from '@/types';

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: '/assets/icons/home.svg',
    route: '/',
    label: 'Home',
  },
  {
    imgURL: '/assets/icons/home.svg',
    route: '/posts',
    label: 'Posts',
  },
];

export const postsLinks: PostLink[] = [
  {
    imgURL: '/assets/icons/home.svg',
    route: 'http://localhost:3000/posts/create',
    label: 'Create',
  },
  {
    imgURL: '/assets/icons/home.svg',
    route: 'http://localhost:3000/posts/myposts',
    label: 'See your posts',
  },
];
