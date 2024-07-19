'use client';

import { cn } from '@/lib/utils';
import { SidebarLink } from '@/types';
import Link from 'next/link';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';
import React from 'react';

const NavSideBar = () => {
  const segment = useSelectedLayoutSegment();
  const sidebarLinks: SidebarLink[] = [
    {
      imgURL: '/assets/icons/home.svg',
      route: '/',
      current: !segment,
      label: 'Home',
    },
    {
      imgURL: '/assets/icons/home.svg',
      route: '/posts',
      current: `/${segment}` === '/posts',
      label: 'Posts',
    },
  ];
  return (
    <nav className="min-w-[260px] min-h-full shadow-lg flex flex-col box-border p-5 ">
      <section className="flex flex-col gap-3">
        {sidebarLinks.map((link) => (
          <Link
            href={link.route}
            className={cn(
              'rounded-md text-xl p-2',
              `${link.current ? 'bg-slate-200' : ''}`
            )}
            key={link.route}
          >
            {link.label}
          </Link>
        ))}
      </section>
    </nav>
  );
};

export default NavSideBar;
