import CreatePostForm from '@/components/posts/createPostForm';
import React from 'react';

const page = () => {
  return (
    <main className="size-full p-5">
      <section className='flex flex-col gap-3'>
        <h2 className="bold text-2xl">Create your post!</h2>
        <CreatePostForm />
      </section>
    </main>
  );
};

export default page;
