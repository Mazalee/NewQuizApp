import { createSlice } from "@reduxjs/toolkit";
import questions from "../questions";

const initialState = {
  activeOption: "",
  questions: questions,
  quizStarted: false,
  currentQuiz: {},
  questionNumber: 1,
};

export const questionSlice = createSlice({
  name: "question",
  initialState: initialState,
  reducers: {
    getSubjectQuestions(state, action) {
      state.quizStarted = true;
      const activeSubject = state.questions.find(
        (question) => question.subject === action.payload
      );
      state.currentQuiz = { correctAnswers: 0, ...activeSubject };
    },
    nextQuestion(state) {
      state.questionNumber = state.questionNumber + 1;
    },
    previousQuestion(state) {
      state.questionNumber = state.questionNumber - 1;
    },
    checkForCorrectAnswer(state, action) {
      const { activeAnswer, activeOption } = action.payload;
      const currentQuestion = state.currentQuiz.questions.find(
        (question) => question.id === state.questionNumber
      );
      const previousAnswerIndex = currentQuestion.userAnswer;
      const isNewAnswerCorrect = activeAnswer === currentQuestion.correctOption;
      const isPreviousAnswerCorrect =
        previousAnswerIndex === currentQuestion.correctOption;

      currentQuestion.userAnswer = activeAnswer;
      currentQuestion.userOption = activeOption;

      if (isNewAnswerCorrect) {
        if (!isPreviousAnswerCorrect) {
          state.currentQuiz.correctAnswers += 1;
        } else {
          if (isPreviousAnswerCorrect) {
            state.currentQuiz.correctAnswers -= 1;
          }
        }
      }
    },
    resetQuiz(state) {
      state.activeOption = "";
      state.questions = questions;
      state.quizStarted = false;
      state.currentQuiz = {};
      state.questionNumber = 1;
    },
  },
});

export const questionActions = questionSlice.actions;
