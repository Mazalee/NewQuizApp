import React from "react";
import { useDispatch } from "react-redux";
import { questionActions } from "../features/questionSlice";

const Subject = ({ icon, subject, backgroundColor }) => {
  const dispatch = useDispatch();
  const handleSubjectClick = () => {
    dispatch(questionActions.getSubjectQuestions(subject));
  };
  return (
    <div className="subject" onClick={handleSubjectClick}>
      <span
        className="subject-icon"
        style={{ backgroundColor: backgroundColor }}
      >
        {icon}
      </span>
      <p className="subject-p">{subject}</p>
    </div>
  );
};

export default Subject;
