import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "./features/modalSlice";
import { resultActions } from "./features/resultSlice";

const Modal = () => {
  const modalOpen = useSelector((state) => state.modal.modalOpen);
  const currentQuiz = useSelector((state) => state.questions.currentQuiz);
  const { questions } = currentQuiz;
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(modalActions.closeModal());
  };
  const openResultModal = () => {
    dispatch(resultActions.resultModalOpen());
  };

  const unansweredQuestions = questions
    ?.map((question) => question.userAnswer === -1)
    ?.reduce((a, b) => a + b, 0);

  return (
    modalOpen && (
      <div className="modal-overlay">
        <div className="modal-content">
          <p>Are you sure you want to end quiz?</p>
          <p>
            You have {unansweredQuestions} out of {questions?.length} to be
            answered
          </p>
          <div className="modal-button">
            <button onClick={openResultModal}>Yes, and quit</button>
            <button onClick={closeModal}>No, go back</button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
