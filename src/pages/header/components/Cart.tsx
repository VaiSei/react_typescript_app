/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useAppSelector } from "../../../redux/hooks";
import { selectPosts } from "../../../redux/slices/cartSlice";

export const Cart = () => {
  const posts = useAppSelector(selectPosts);

  return (
    <div
      css={css`
        display: flex;
        justify-content: flex-end;
      `}
    >
      <div
        css={css`
          box-sizing: border-box;
          min-height: 100px;
          width: 300px;
          background: #ccc;
          border: 1px solid black;
          border-radius: 10px;
          padding: 5px;
        `}
      >
        {posts.map(({ id, title, count }) => (
          <p key={id}>
            {title} ({count})
          </p>
        ))}
      </div>
    </div>
  );
};
