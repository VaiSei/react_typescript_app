/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface Props {
  tags: string[];
}

export const PostTags = ({ tags }: Props) => (
  <div
    css={css`
      padding-bottom: 20px;
    `}
  >
    {tags.map((tag) => (
      <b
        css={css`
          text-decoration: underline;
          margin-left: 2px;
        `}
        key={tag}
      >
        {tag}
      </b>
    ))}
  </div>
);
