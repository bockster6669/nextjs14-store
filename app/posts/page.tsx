import CreatePostForm from '@/components/posts/createPostForm';
import PostsList from '@/components/posts/postsList';
import React from 'react';

const page = () => {
  return (
    <main className="">
      <CreatePostForm />
      <PostsList />
    </main>
  );
};

export default page;
