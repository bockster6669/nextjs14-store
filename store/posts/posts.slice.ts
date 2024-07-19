import {
  createEntityAdapter,
  createSlice,
  nanoid,
  PayloadAction,
} from '@reduxjs/toolkit';
import { sub } from 'date-fns';

export type Post = {
  id: string;
  date: string;
  title: string;
  description: string;
  reactions: Record<Reaction, number>;
};

export type Reaction = 'wow' | 'like';

export const postsAdapter = createEntityAdapter<Post>();

export type PostsState = ReturnType<typeof postsAdapter.getInitialState>;

const initialState: PostsState = postsAdapter.getInitialState();

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addNewPost: {
      reducer(state, action: PayloadAction<Post>) {
        postsAdapter.addOne(state, { ...action.payload });
      },

      prepare(title: string, description: string) {
        return {
          payload: {
            title,
            description,
            date: sub(new Date(), { minutes: 1 }).toISOString(),
            id: nanoid(),
            reactions: {
                'wow': 0,
                'like': 0
            }
          },
        };
      },
    },
    addReaction(state, action: PayloadAction<{postId:string, reaction:Reaction}>) {
        const { postId, reaction } = action.payload
        const existingPost = state.entities[postId]

        if (existingPost) {
            existingPost.reactions[reaction]++
        }
    }
  },
});

export const { addNewPost, addReaction } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
