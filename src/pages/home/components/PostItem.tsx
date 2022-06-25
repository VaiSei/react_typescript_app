/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PostInterface } from "../interfaces";
import { Link } from "react-router-dom";
import { PostTags } from "../../../common/components";

interface Props {
  post: PostInterface;
}

export const PostItem = ({ post: { id, reactions, tags, title } }: Props) => (
  <div
    css={css`
      background: pink;
      height: 150px;
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
  </div>
);
