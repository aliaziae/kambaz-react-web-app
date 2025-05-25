import { createSlice } from "@reduxjs/toolkit";
import { quizzes } from "../../Database"


const initialState = {
  quizzes: quizzes || [],
};
const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    setQuizzes: (state, action) => {
      state.quizzes = action.payload;
    },

    addQuiz: (state, { payload: quiz }) => {
      const newQuiz: any = {
        _id: quiz._id,
        title: quiz.title,
        description: quiz.description,
        type: quiz.type,
        points: quiz.points,
        group: quiz.group,
        course: quiz.course,
        shuffleAnswers: quiz.shuffleAnswers,
        timeLimit: quiz.timeLimit,
        multipleAttempts: quiz.multipleAttempts,
        accessCode: quiz.accessCode,
        oneQuestionAtTime: quiz.oneQuestionAtTime,
        webcam: quiz.webcam,
        lockQuestions: quiz.lockQuestions,
        dueDat: quiz.dueDate,
        availableDate: quiz.availableDate,
        untilDate: quiz.untilDate,
      };
      state.quizzes = [...state.quizzes, newQuiz] as any;
    },

    deleteQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.filter(
        (q: any) => q._id !== quizId);
    },

    updateQuiz: (state, { payload: quiz }) => {
      state.quizzes = state.quizzes.map((q: any) =>
        q._id === quiz._id ? quiz : q
              ) as any;
    },
    
    editQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.map((q: any) =>
        q._id === quizId ? { ...q, editing: true } : q
      ) as any;
    },
  },
});
export const { addQuiz, deleteQuiz, updateQuiz, editQuiz, setQuizzes} =
quizzesSlice.actions;
export default quizzesSlice.reducer;

