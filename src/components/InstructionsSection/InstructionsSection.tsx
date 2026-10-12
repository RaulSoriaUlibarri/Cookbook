type InstructionsProps = {
  strInstructions: string;
};

const InstructionsSection = ({ strInstructions }: InstructionsProps) => {
  return (
    <div className="text-yellow-800 p-2 mt-10 ">
      <h3 className="text-2xl font-bold border-b pb-5 mb-4 dark:text-orange-500">
        Instructions
      </h3>
      <p className="whitespace-pre-line leading-relaxed text-gray-800 text-lg  dark:text-white">
        {strInstructions}
      </p>
    </div>
  );
};

export default InstructionsSection;
