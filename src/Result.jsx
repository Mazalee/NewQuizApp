import React from "react";
import { useSelector } from "react-redux";

const Result = ({ onPlayAgain }) => {
  const currentQuiz = useSelector((state) => state.questions.currentQuiz);
  const quizEnd = useSelector((state) => state.result.quizEnd);
  const { subject, icon, questions } = currentQuiz;

  const calculateScore = () => {
    return questions.reduce((score, question) => {
      if (question.userAnswer === question.correctOption) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  const score = calculateScore();

  return (
    quizEnd && (
      <div className="result-overlay">
        <div className="result-content">
          <div className="result-icon">
            <span>{icon}</span>
            <span>{subject}</span>
          </div>
          <div className="result-header">
            <p>Quiz completed</p>
            <p>You scored...</p>
          </div>
          <div className="result-inner">
            <div className="result-innerIcon">
              <span>{icon}</span>
              <span>{subject}</span>
            </div>
            <span className="result-score">{score}</span>
            <p>out of {questions?.length}</p>
          </div>
          <button className="btn result-btn" onClick={onPlayAgain}>
            Play Again
          </button>
        </div>
      </div>
    )
  );
};

export default Result;
