"use client";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";

type PaginationProps = {
  totalPages: number;
  handleChange: (value: number) => void;
};

const RecipesPagination = ({ totalPages, handleChange }: PaginationProps) => {
  //   const { page, setPage } = useState(1);

  return (
    <div className="flex justify-center h-12 w-auto my-5">
      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          size="large"
          onChange={(_, value) => handleChange(value)}
        />
      </Stack>
    </div>
  );
};

export default RecipesPagination;
