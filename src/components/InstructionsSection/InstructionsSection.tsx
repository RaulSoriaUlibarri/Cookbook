type InstructionsSectionProps = {
  strInstructions: string;
};

const parseSteps = (text: string): string[] =>
  text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => !/^(step\s*\d+|\d+)\s*[:.)-]?$/i.test(line))
    .map((line) =>
      line.replace(/^(step\s*\d+\s*[:.)-]?|\d+[.)](?!\d))\s*/i, ""),
    )
    .filter(Boolean);

const InstructionsSection = ({ strInstructions }: InstructionsSectionProps) => {
  const steps = parseSteps(strInstructions);
  const hasSteps = steps.length > 1;

  return (
    <section className="mt-10">
      <h3 className="mb-10 border-b border-yellow-800/30 pb-5 text-2xl font-bold text-yellow-800 dark:border-slate-700 dark:text-orange-500">
        Instructions
      </h3>

      {hasSteps ? (
        <ol className="space-y-4">
          {steps.map((step, i) => (
            <li
              key={i}
              className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-800 dark:bg-slate-700 dark:text-orange-400">
                {i + 1}
              </span>
              <p className="text-lg leading-relaxed text-gray-800 dark:text-white">
                {step}
              </p>
            </li>
          ))}
        </ol>
      ) : (
        <p className="whitespace-pre-line text-lg leading-relaxed text-gray-800 dark:text-white">
          {strInstructions}
        </p>
      )}
    </section>
  );
};

export default InstructionsSection;
