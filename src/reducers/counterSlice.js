import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "test",
  initialState: {
    score:null,
    selectedAnswers: [],
    questionList: [
      {
        id: 1,
        question: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.`,
        options: [
          {
            id: 1,
            value: "Sed ut perspiciatis unde omnis iste natus error sit",
          },
          {
            id: 2,
            value: " quaerat voluptatem. Ut enim ad minima",
          },
          {
            id: 3,
            value:
              "ure and praising pain was born and I will give you a complete account of the system, and expound",
          },
          {
            id: 4,
            value:
              "hich of us ever undertakes laborious physical exercise, except to obtain some a find fault with a man wh",
          },
        ],
        answer: 1,
      },
      {
        id: 2,
        question: `fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.`,
        options: [
          {
            id: 1,
            value: "Sed ut perspiciatis unde omnis iste natus error sit",
          },
          {
            id: 2,
            value: " quaerat voluptatem. Ut enim ad minima",
          },
          {
            id: 3,
            value:
              "ure and praising pain was born and I will give you a complete account of the system, and expound",
          },
          {
            id: 4,
            value:
              "hich of us ever undertakes laborious physical exercise, except to obtain some a find fault with a man wh",
          },
        ],
        answer: 4,
      },
      {
        id: 1,
        question: `Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. `,
        options: [
          {
            id: 1,
            value: "Sed ut perspiciatis unde omnis iste natus error sit",
          },
          {
            id: 2,
            value: " quaerat voluptatem. Ut enim ad minima",
          },
          {
            id: 3,
            value:
              "ure and praising pain was born and I will give you a complete account of the system, and expound",
          },
          {
            id: 4,
            value:
              "hich of us ever undertakes laborious physical exercise, except to obtain some a find fault with a man wh",
          },
        ],
        answer: 3,
      },
    ],
  },
  reducers: {
    selectedAnswer: (state, action) => {
      let filteredSelectedAnswer = state.selectedAnswers.filter(
        (ans) => ans.id !== action.payload.id
      );

      state.value = {
        ...state,
        selectedAnswers: [...filteredSelectedAnswer, action.payload],
      };
    },
    scoreQuiz: (state) => {
        
        let studentAnswers = state.selectedAnswers.map(ans => ans)
        let actualAnswers = state.questionList.map(ans => ans.answer)
        let score = 0
        for(let i=0 ; i < studentAnswers.length ; i++){
            if(studentAnswers[i] === actualAnswers[i]){
                score.value++
            }
        }

    },
  },
});

export const selectCount = (state) => state.counter.value;
export const getQuestions = (state) => state.counter.questionList;
export const getScore = (state) => state.counter.score;


// Action creators are generated for each case reducer function
export const { selectedAnswer,scoreQuiz } =
  counterSlice.actions;

export default counterSlice.reducer;
