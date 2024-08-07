import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { questionActions } from "../features/questionSlice";

const Options = ({ alphabet, option, userAnswer }) => {
  const dispatch = useDispatch();
  const currentQuiz = useSelector((state) => state.questions.currentQuiz);
  const questionNumber = useSelector((state) => state.questions.questionNumber);
  const currrentQuestion = currentQuiz.questions.find(
    (question) => question.id === questionNumber
  );
  const handleUserAnswer = () => {
    dispatch(
      questionActions.checkForCorrectAnswer({
        activeAnswer: userAnswer,
        activeOption: option,
      })
    );
  };

  return (
    <div
      className="subject subject-question"
      onClick={handleUserAnswer}
      style={{
        backgroundColor: currrentQuestion.userOption === option && "#9635e1",
      }}
    >
      <span className="option">{alphabet}</span>
      <span className="question-p">{option}</span>
    </div>
  );
};

export default Options;
