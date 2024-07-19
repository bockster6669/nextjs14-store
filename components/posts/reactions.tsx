import { addReaction, Post, Reaction } from '@/store/posts/posts.slice';
import { useAppDispatch } from '@/hooks/redux-store';

const reactionEmoji: Record<Reaction, string> = {
  like: '👍',
  wow: '😮',
};

type ReactionsProps = {
  post: Post;
};

const Reactions = ({ post }: ReactionsProps) => {
  const dispatch = useAppDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    const reactionName = name as Reaction;
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() =>
          dispatch(addReaction({ postId: post.id, reaction: reactionName }))
        }
      >
        {emoji} {post.reactions[reactionName]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};
export default Reactions;
