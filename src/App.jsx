import React from "react";
import Welcome from "./components/Welcome";
import { useSelector, useDispatch } from "react-redux";
import QuizQuestion from "./components/QuizQuestion";
import Modal from "./Modal";
import Result from "./Result";
import { questionActions } from "./features/questionSlice";
import { resultActions } from "./features/resultSlice";
import { modalActions } from "./features/modalSlice";

const App = () => {
  const quizStarted = useSelector((state) => state.questions.quizStarted);
  const quizEnd = useSelector((state) => state.result.quizEnd);
  const dispatch = useDispatch();

  const handlePlayAgain = () => {
    dispatch(questionActions.resetQuiz());
    dispatch(resultActions.resultModalClose());
    dispatch(modalActions.closeModal());
  };

  return (
    <main>
      {!quizStarted && <Welcome />}
      {quizStarted && <QuizQuestion />}
      <Modal />
      {quizEnd && <Result onPlayAgain={handlePlayAgain} />}
    </main>
  );
};

export default App;
