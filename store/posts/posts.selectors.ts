import { RootState } from '../store';
import { postsAdapter } from './posts.slice';

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors((state:RootState) => state.posts);
