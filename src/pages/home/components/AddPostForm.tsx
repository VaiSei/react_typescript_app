/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, TextField } from "@mui/material";
import { useAddPost } from "../hooks/useAddPost";

interface Props {
  handleClose: () => void;
}

export const AddPostForm = ({ handleClose }: Props) => {
  const { onSubmitAddPost, errors } = useAddPost(handleClose);

  return (
    <form
      onSubmit={onSubmitAddPost}
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 70%;
      `}
    >
      <TextField
        error={errors.title}
        css={css`
          width: 200px;
          margin-bottom: 15px;
        `}
        name="title"
        label="Title"
        variant="outlined"
      />
      <TextField
        error={errors.body}
        css={css`
          width: 200px;
          margin-bottom: 15px;
        `}
        name="body"
        label="Body"
        variant="outlined"
      />
      <Button type="submit" variant="contained">
        add
      </Button>
    </form>
  );
};
