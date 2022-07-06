/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { PostInterface } from "../interfaces";
import { PostItem } from "./PostItem";
import { useAppDispatch } from "../../../redux/hooks";
import { addPosts } from "../../../redux/slices/cartSlice";

interface Props {
  posts: PostInterface[];
}

export const PostList = ({ posts }: Props) => {
  const dispatch = useAppDispatch();

  const onAddPost = (post: PostInterface) => {
    dispatch(addPosts(post));
  };

  return (
    <div
      css={css`
        flex-wrap: wrap;
        display: flex;
        gap: 15px;
      `}
    >
      {posts.map((post) => (
        <PostItem key={post.id} post={post} onAddPost={onAddPost} />
      ))}
    </div>
  );
};
