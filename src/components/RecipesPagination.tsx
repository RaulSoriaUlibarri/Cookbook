"use client";

import Pagination from "@mui/material/Pagination";
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
          sx={{
            "& .MuiPaginationItem-root": {
              backgroundColor: "#059669", // emerald-600
              color: "#fff",
              "&:hover": {
                backgroundColor: "#047857", // emerald-700
              },
              "&.Mui-selected": {
                backgroundColor: "#047857", // keep selected consistent
                color: "#fff",
              },
            },
          }}
        />
      </Stack>
    </div>
  );
};

export default RecipesPagination;
