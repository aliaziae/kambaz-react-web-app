import { createSlice } from "@reduxjs/toolkit";
import { questions } from "../../../Database";


const initialState = {
  questions: questions || [],
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {

    setQuestions: (state, action) => {
      state.questions = action.payload;
    },

    addQuestion: (state, { payload: question }) => {
      const newQuestion: any = {
        _id: question._id,
        title: question.title,
        type: question.type,
        question: question.question,
        quizId: question.quizId,
        course: question.course,
        answerOptions: question.answerOptions,
        correctAnswer: question.correctAnswer,
        points: question.points,
        editing: question.editing,
      };
      state.questions = [...state.questions, newQuestion] as any;
    },


    updateQuestion: (state, { payload: question }) => {
      state.questions = state.questions.map((q: any) =>
        q._id === question._id ? question : q
              ) as any;
    },

    deleteQuestion: (state, { payload: questionId }) => {
        state.questions = state.questions.filter(
          (q: any) => q._id !== questionId);
      },


  },
});
export const { addQuestion, updateQuestion, setQuestions, deleteQuestion} =
questionsSlice.actions;
export default questionsSlice.reducer;

