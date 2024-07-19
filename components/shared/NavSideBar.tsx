'use client';

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavSideBar = () => {
  const pathname = usePathname();

  return (
    <nav className="min-w-[260px] min-h-full shadow-lg flex flex-col box-border p-5 ">
      <section className="flex flex-col gap-3">
        {sidebarLinks.map((link) => (
          <Link
            href={link.route}
            className={cn(
              'rounded-md text-xl p-2',
             `${pathname === link.route ? 'bg-slate-200': ''}`
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
