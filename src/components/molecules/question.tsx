import React from "react";
import Typography from "@/components/atoms/typography";

interface QuestionProps {
    question: string;
    answers: string[];
}

const Question: React.FC<QuestionProps> = ({ question, answers }) => {

  return (
    <div className="bg-white rounded-lg p-4 flex flex-col cursor-pointer hover:bg-gray-200">
        <div className="px-4 py-2">
            <Typography type="p" color="blue" >{question}</Typography>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 bg-white">
            {answers.map((answer, index) => (
                <li key={index} className="bg-gray-100 rounded-lg p-4 flex flex-col cursor-pointer hover:bg-gray-200">
                    <Typography type="subtext" color="gray">{answer}</Typography>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default Question;