import { useState } from "react";

import PaginationMUI from "@mui/material/Pagination";

interface Props {
  page: number;
  onChangePagination: (event: any, page: number) => void;
}

export const Pagination = ({ page, onChangePagination }: Props) => {
  return (
    <div>
      <PaginationMUI count={10} page={page} onChange={onChangePagination} />
    </div>
  );
};
