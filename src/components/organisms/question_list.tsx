import React from "react";
import Item from "@/components/molecules/item";
import Question from "../molecules/question";

interface QuestionProps {
    question: string;
    answers: string[];
}

interface QuestionListProps {
    questions: QuestionProps[];
}

const QuestionList: React.FC<QuestionListProps> = ({ questions }) => {
  return (
    <ul className={`grid gap-4 p-2 bg-white grid-cols-1 md:grid-cols-2 lg:grid-cols-2`}>
        {questions.map((question, index) => (
            <Question key={index} question={question.question} answers={question.answers} />
        ))}
    </ul>
  );
};

export default QuestionList;