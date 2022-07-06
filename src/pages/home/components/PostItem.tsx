/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PostInterface } from "../interfaces";
import { Link } from "react-router-dom";
import { PostTags } from "../../../common/components";

interface Props {
  post: PostInterface;
  onAddPost: (post: PostInterface) => void;
}

export const PostItem = ({ post, onAddPost }: Props) => {
  const { id, reactions, tags, title } = post;

  return (
    <div
      css={css`
        background: pink;
        width: 40%;
        margin: auto;
        margin-bottom: 40px;
        padding: 20px;
        border-radius: 20px;
        border: 1px solid red;
      `}
      key={id}
    >
      <h3>
        <Link
          to={`/currentPost/${id}`}
          css={css`
            text-decoration: none;
            color: black;
          `}
        >
          {title}
        </Link>
      </h3>
      <h4>
        reactions: <span>{reactions}</span>
      </h4>
      <PostTags tags={tags} />

      <button
        css={css`
          background: white;
          border: 1px solid black;
          border-radius: 5px;
          padding: 5px;
          cursor: pointer;
          transition: 1s;
          :hover {
            background: #ccc;
          }
        `}
        onClick={() => onAddPost(post)}
      >
        Add to cart
      </button>
    </div>
  );
};
