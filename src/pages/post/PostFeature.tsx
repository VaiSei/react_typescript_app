/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CurrentPostInterface } from "./interfaces";
import { Link } from "react-router-dom";
import { PostTags } from "../../common/components";

export const PostFeature = () => {
  const postId = useParams();
  const [post, setPost] = useState({} as CurrentPostInterface);

  useEffect(() => {
    fetch(
      "https://dummyjson.com/posts/" +
        JSON.stringify(postId).replace(/[^0-9]/g, "")
    )
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, []);

  if (!post.id) return <></>;

  const { id, title, body, reactions, tags } = post;

  return (
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
      <h2>{title}</h2>
      <p>{body} </p>
      <h4>
        reactions:<span>{reactions}</span>
      </h4>
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
          back to posts
        </Link>
      </button>
    </div>
  );
};
