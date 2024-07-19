'use client'

import { useAppSelector } from '@/hooks/redux-store';
import { selectAllPosts, selectPostIds } from '@/store/posts/posts.selectors';
import React from 'react';
import Post from './post';

const PostsList = () => {
  const postsIds = useAppSelector(selectPostIds);
  return (
    <div className='flex flex-col gap-3 mt-5'>
      {postsIds.length > 0 ? (
        postsIds.map((postId) => <Post key={postId} id={postId} />)
      ) : (
        <span>There is no posts</span>
      )}
    </div>
  );
};

export default PostsList;
