import { useEffect, useState } from "react";
import { PostInterface } from "../interfaces";

export const useDataPost = () => {
  const [posts, setPosts] = useState([] as PostInterface[]);
  const [page, setPage] = useState(1);

  const LIMIT_POST = 10;

  const onChangePagination = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    console.log("page " + value);
  };

  useEffect(() => {
    const skip = page === 1 ? 0 : (page - 1) * LIMIT_POST;
    console.log("skip " + skip);
    console.log("link " + `https://dummyjson.com/posts?limit=10&skip=${skip}`);
    fetch(`https://dummyjson.com/posts?limit=10&skip=${skip}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Data " + data);
        setPosts(data.posts);
      });
  }, [page]);
  return {
    posts,
    page,
    onChangePagination,
  };
};
