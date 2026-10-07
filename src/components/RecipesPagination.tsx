"use client";

import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";

type PaginationProps = {
  totalPages: number;
  handleChange: (value: number) => void;
};

const RecipesPagination = ({ totalPages, handleChange }: PaginationProps) => {
  return (
    <div className="flex justify-center h-12 w-auto my-5">
      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          size="large"
          onChange={(_, value) => handleChange(value)}
          renderItem={(item) => (
            <PaginationItem
              {...item}
              className="
                !bg-emerald-600
                !text-gray-200
                hover:!bg-emerald-700
                [&.Mui-selected]:!bg-emerald-700
                dark:!bg-orange-500
                dark:hover:!bg-orange-400
                dark:[&.Mui-selected]:!bg-orange-400"
            />
          )}
        />
      </Stack>
    </div>
  );
};

export default RecipesPagination;
