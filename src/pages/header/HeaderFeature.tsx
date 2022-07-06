/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Cart } from "./components";

export const HeaderFeature = () => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 0 40px;
      margin: 20px 0;

      h1 {
        display: flex;
        justify-content: center;
        margin: 0;
      }
    `}
  >
    <h1>Posts</h1>
    <Cart />
  </div>
);
