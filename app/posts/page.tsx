import AddPostForm from '@/components/posts/addPostForm'
import PostsList from '@/components/posts/postsList'
import React from 'react'

const page = () => {
  return (
    <main>
        <AddPostForm/>
        <PostsList/>
    </main>
  )
}

export default page