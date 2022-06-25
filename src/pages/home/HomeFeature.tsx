/** @jsxImportSource @emotion/react */
import { PostList } from "./components/PostList";
import { Pagination } from "./components/Pagination";
import { useDataPost } from "./hooks/useDataPost";

export const HomeFeature = () => {
  const { posts, page, onChangePagination } = useDataPost();

  return (
    <div>
      <PostList posts={posts} />
      <Pagination page={page} onChangePagination={onChangePagination} />
    </div>
  );
};
