type IngredientDetailsProps = {
  name: string;
  description: string | null;
  image: string | null;
};

const IngredientDetails = ({
  name,
  description,
  image,
}: IngredientDetailsProps) => {
  return (
    <>
      <h1 className="font-roboto-slab text-emerald-950 text-xl md:text-2xl lg:text-4xl my-5 lg:my-10 mx-auto w-fit font-bold dark:text-white text-center">
        {name} Recipes
      </h1>
      {image && (
        <img
          src={image}
          alt={name}
          className="max-w-[250px] rounded-lg mx-auto lg:max-w-[450px] dark:bg-gray-100 "
        />
      )}
      {description && (
        <p className="text-justify mt-10 dark:text-white max-w-[550px] md:max-w-3/4 mx-auto lg:text-lg">
          {description}
        </p>
      )}
    </>
  );
};

export default IngredientDetails;
