import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectQuestion from "./SelectQuestion";
import Options from "./Options";
import { questionActions } from "../features/questionSlice";
import { modalActions } from "../features/modalSlice";

const QuizQuestion = () => {
  const dispatch = useDispatch();
  const currentQuiz = useSelector((state) => state.questions.currentQuiz);
  const questionNumber = useSelector((state) => state.questions.questionNumber);
  const { subject, icon, questions } = currentQuiz;
  const currrentQuestion = questions.find(
    (question) => question.id === questionNumber
  );
  const { question, options } = currrentQuestion;
  const handleNextQuestion = () => {
    dispatch(questionActions.nextQuestion());
  };
  const handlePreviousQuestion = () => {
    dispatch(questionActions.previousQuestion());
  };
  const openModal = () => {
    dispatch(modalActions.openModal());
  };

  return (
    <section>
      <div className="subject-info">
        <span>{icon}</span>
        <p className="subject-p">{subject}</p>
      </div>
      <div className="quiz-container">
        <div className="question-wrapper">
          <div className="question">
            <p className="num-questions">
              question {questionNumber} of {questions.length}
            </p>
            <h2>{question}</h2>
            <div className="progress-bar">
              <div
                className="inner-progress-bar"
                style={{ width: `${questionNumber * 10}%` }}
              ></div>
            </div>

            <div className="question-picker">
              {questions.map((question, index) => {
                return <SelectQuestion key={index} number={index + 1} />;
              })}
            </div>
          </div>
        </div>
        <div className="answer">
          {options.map((option, index) => {
            return (
              <Options
                key={index}
                option={option}
                userAnswer={index}
                alphabet={
                  index === 0
                    ? "A"
                    : index === 1
                    ? "B"
                    : index === 2
                    ? "C"
                    : index === 3
                    ? "D"
                    : ""
                }
              />
            );
          })}
          <div className="btn-container">
            <button
              onClick={handlePreviousQuestion}
              disabled={questionNumber === 1}
              className="btn btn prev"
            >
              Prev
            </button>
            <button
              onClick={handleNextQuestion}
              disabled={questionNumber > questions.length - 1}
              className="btn btn-next"
            >
              Next
            </button>
          </div>
          <button className="btn btn-end" onClick={openModal}>
            End Quiz
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuizQuestion;
