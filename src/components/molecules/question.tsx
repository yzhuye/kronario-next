import React from "react";
import Typography from "@/components/atoms/typography";

interface QuestionProps {
    question: string;
    answers: string[];
}

const Question: React.FC<QuestionProps> = ({ question, answers }) => {
    let className = "";
    if (answers.length == 0) {
        return null;
    }
    if(answers.length == 1) {
        return null;
    }
    if(answers.length == 2) {
        className = "grid-cols-1 md:grid-cols-2";
        console.log("2");
    }
    if(answers.length == 3) {
        className = "grid-cols-1 md:grid-cols-3";
    }
    if(answers.length == 4) {
        className = "grid-cols-1 md:grid-cols-3 lg:grid-cols-4";
    }
    if(answers.length == 5) {
        className = "grid-cols-1 md:grid-cols-3 lg:grid-cols-5";
    }

  return (
    <div className="bg-white rounded-lg p-4 flex flex-col cursor-pointer hover:bg-gray-200">
        <div className="px-4 pb-2 ">
            <Typography type="p" color="blue" >{question}</Typography>
        </div>
        <ul className={`grid ${className} gap-4 p-2 bg-white rounded-lg`}>	
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