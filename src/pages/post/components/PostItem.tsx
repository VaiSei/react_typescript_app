/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CurrentPostInterface } from "../interfaces";
import { Link } from "react-router-dom";
import { PostTags } from "../../../common/components";

interface Props {
  post: CurrentPostInterface;
}

export const PostItem = ({
  post: { body, id, reactions, tags, title, userId },
}: Props) => (
  <div
    css={css`
      width: 80%;
      margin: auto;
      padding: 10px 20px;
      background-color: pink;
      border-radius: 20px;
      border: 1px solid red;
    `}
    key={id}
  >
    <h2>{body} </h2>
    <h2>
      reactions:<span>{reactions}</span>{" "}
    </h2>
    <PostTags tags={tags} />
    <button
      css={css`
        height: auto;
        margin-bottom: 20px;
        width: 45%;
        padding: 15px 15px;
        font-size: 17px;
        border-radius: 10px;
        background-color: #fadae0;
        border: 1px solid red;
      `}
    >
      <Link
        to={`/`}
        css={css`
          text-decoration: none;
          color: black;
        `}
      >
        {" "}
        back to posts
      </Link>{" "}
    </button>
  </div>
);
