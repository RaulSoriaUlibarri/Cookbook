"use client";

import { CircleHelp } from "lucide-react";

type messageProps = {
  message: string;
};

const SuggestionModal = ({ message }: messageProps) => {
  return (
    <div className="max-w-max flex items-center border-2 border-b-0 border-customRed ml-2 rounded-t-xl text-gray-400 ">
      <CircleHelp className="m-2" />
      <p className="text-sm mr-2">{message}</p>
    </div>
  );
};

export default SuggestionModal;
