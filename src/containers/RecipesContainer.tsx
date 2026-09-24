import { FiltersContainer, RecipesDisplay } from "../components/index";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const RecipesContainer = () => {
  return (
    <>
      <section>
        <MaxWidthWrapper>
          <FiltersContainer />
          {/* <RecipesDisplay  /> */}
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default RecipesContainer;
