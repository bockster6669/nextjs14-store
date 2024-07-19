import { useAppSelector } from '@/hooks/redux-store';
import { selectPostById } from '@/store/posts/posts.selectors';
import { type Post } from '@/store/posts/posts.slice';
import React from 'react';
import Reactions from './reactions';
import { format, formatDistanceToNow, parseISO } from 'date-fns';
import TimeAgo from './timeAgo';

type PostProps = {
  id: string;
};

type ReactionProps = {
  post: Post;
};

const Post = ({ id }: PostProps) => {
  const post = useAppSelector((state) => selectPostById(state, id));
  const formattedDate = format(post.date, 'yyyy-MM-dd');
  return (
    <div className="flex flex-col gap-3 bg-slate-900 rounded-lg text-zinc-100 box-border p-3">
      <span className=" self-start">{post.id}</span>
      <div className="flex flex-col gap-2 items-center justify-center">
        <h2 className="text-xl">{post.title}</h2>
        <p>{post.description}</p>
      </div>
      <TimeAgo timestamp={post.date} />
      <Reactions post={post} />
    </div>
  );
};

export default Post;
