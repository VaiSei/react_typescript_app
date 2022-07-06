import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { PostCartInterface } from "../../pages/home/interfaces";

interface CartStateInterface {
  posts: PostCartInterface[];
}

const initialState: CartStateInterface = {
  posts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<PostCartInterface[]>) => {
      return { ...state, posts: action.payload };
    },
    addPosts: (state, action: PayloadAction<PostCartInterface>) => {
      const postIndex = state.posts.findIndex(
        ({ id }) => id === action.payload.id
      );

      const post = state.posts[postIndex];

      if (postIndex > -1) {
        state.posts[postIndex] = {
          ...post,
          count: post.count ? post.count + 1 : 0,
        };
        return state;
      }
      action.payload.count = 1;
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    },
  },
});

export const { setPosts, addPosts } = cartSlice.actions;

export const selectPosts = (state: RootState) => state.cart.posts;

export default cartSlice.reducer;
