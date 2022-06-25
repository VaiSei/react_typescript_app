/** @jsxImportSource @emotion/react */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PostInterface } from "../interfaces";
import { PostItem } from "./PostItem";

interface Props {
  posts: PostInterface[];
}

export const PostList = ({ posts }: Props) => (
  <div
    css={css`
      flex-wrap: wrap;
      display: flex;
      gap: 15px;
    `}
  >
    {posts.map((post) => (
      <PostItem key={post.id} post={post} />
    ))}
  </div>
);
