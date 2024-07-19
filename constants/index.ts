import { PostLink, SidebarLink } from '@/types';

// export const sidebarLinks: SidebarLink[] = [
//   {
//     imgURL: '/assets/icons/home.svg',
//     route: '/',
//     current: null,
//     label: 'Home',
//   },
//   {
//     imgURL: '/assets/icons/home.svg',
//     route: 'posts',
//     current: 'posts',
//     label: 'Posts',
//   },
// ];

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
