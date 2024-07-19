'use client';

import { postsLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const PostsNavigation = () => {
  const pathname = usePathname();
  return (
    <nav className=" w-full flex gap-2 items-start box-border p-2 bg-red-300">
      {postsLinks.map((link) => (
        <Link
          href={link.route}
          className={cn(
            ' box-border p-4 rounded-md text-zinc-100 bg-slate-850 text-xl',
            `${pathname === link.route ? 'bg-slate-900' : ''}`
          )}
          key={link.route}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default PostsNavigation;
