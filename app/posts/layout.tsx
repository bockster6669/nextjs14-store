'use server'
import PostsNavigation from '@/components/posts/posts-navigation';
import React from 'react';

type PostsLayoutProps = {
  children: React.ReactNode;
};

const layout = ({ children }: PostsLayoutProps) => {
  return (
    <div className='w-full'>
      <PostsNavigation />
      {children}
    </div>
  );
};

export default layout;
