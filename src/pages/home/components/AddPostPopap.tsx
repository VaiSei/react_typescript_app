/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import { AddPostForm } from "./AddPostForm";

interface Props {}

export const AddPostPopap = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      css={css`
        padding-left: 4.5%;
        display: flex;
        justify-content: flex-start;
        @media only screen and (max-width: 510px) {
          padding-left: 0%;
          justify-content: center;
        }
      `}
    >
      <Button
        css={css`
          margin-bottom: 15px;
        `}
        variant="outlined"
        onClick={handleClickOpen}
        startIcon={<AddIcon />}
      >
        add post
      </Button>

      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Add post</DialogTitle>
        <DialogContent>
          <AddPostForm handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
};
