import { FileDownloadSharp } from "@mui/icons-material";
import { useEffect, useState } from "react";

interface fields {
  title: string;
  body: string;
}
export const initialErrors = {
  title: false,
  body: false,
};

export const useAddPost = (handleClose: () => void) => {
  const [errors, setErrors] = useState(initialErrors);

  const resetErrors = () => setErrors(initialErrors);

  const validate = (fields: fields) => {
    let isValid = true;

    resetErrors();

    const newErrors = { ...initialErrors };

    if (fields.title.length < 5 || fields.title.length > 20) {
      newErrors.title = true;
      isValid = false;
      alert("length of title must be more than 5 symbols and less than 20 ");
    }
    if (fields.body.length < 5 || fields.body.length > 20) {
      newErrors.body = true;
      isValid = false;
      alert("length of body must be more than 5 symbols and less than 20 ");
    }

    if (!/^[a-zA-Z1-9]+$/.test(fields.body)) {
      newErrors.body = true;
      isValid = false;
      alert("The body field must contain only latin characters ");
    }
    if (!/^[a-zA-Z1-9]+$/.test(fields.body)) {
      newErrors.title = true;
      isValid = false;
      alert("The title field must contain only latin characters ");
    }

    setErrors(newErrors);
    return isValid;
  };

  const onSubmitAddPost = (event: any) => {
    event.preventDefault();

    console.log(event);

    const dataSend = {
      title: event.target.title.value,
      body: event.target.body.value,
    };

    if (!validate(dataSend)) return;

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: event.target.title.value,
        body: event.target.body.value,
        userId: 5,
        /* other post data */
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        handleClose();
      });
  };
  return {
    onSubmitAddPost,
    errors,
  };
};
