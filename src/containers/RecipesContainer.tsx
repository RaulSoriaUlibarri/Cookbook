import { FiltersContainer, RecipesDisplay } from "../components/index";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const RecipesContainer = () => {
  return (
    <>
      <section>
        <FiltersContainer />
        <MaxWidthWrapper>
          <RecipesDisplay category="Beef" />
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default RecipesContainer;
