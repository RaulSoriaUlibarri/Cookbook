import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

type PaginationProps = {
  numberOfPages: string;
};

const RecipesPagination = ({ numberOfPages }: PaginationProps) => {
  return (
    <div className="flex justify-center h-12 w-auto my-5">
      <Stack spacing={2}>
        <Pagination count={5} size="large" />
      </Stack>
    </div>
  );
};

export default RecipesPagination;
