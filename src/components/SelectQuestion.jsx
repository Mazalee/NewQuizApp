import React from "react";
import { useSelector } from "react-redux";

const SelectQuestion = ({ number }) => {
  const currentQuiz = useSelector((state) => state.questions.currentQuiz);
  const questionNumber = useSelector((state) => state.questions.questionNumber);
  const { questions } = currentQuiz;
  const currrentQuestion = questions.find(
    (question) => question.id === questionNumber
  );
  return (
    <p
      className="select-question"
      style={{
        border: currrentQuestion.userOption !== "" && "solid 3px #bb95da",
      }}
    >
      <span>{number}</span>
    </p>
  );
};

export default SelectQuestion;
