import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchQuestionsFromAPI = createAsyncThunk(
    'test/fetchQuestions',
    async () => {
        const response = await axios.get('http://localhost:5000/get-questions');
        return response.data;
    }
);

export const counterSlice = createSlice({
    name: "test",
    initialState: {
        score: 0,
        loading: false,
        error: null,
        selectedAnswers: [],
        questionList: [],
    },
    reducers: {
        selectedAnswer: (state, action) => {
            let filteredSelectedAnswer = state.selectedAnswers.filter(
                (ans) => ans.id !== action.payload.id
            );
            state.selectedAnswers = [...filteredSelectedAnswer, action.payload];
        },
        scoreQuiz: (state) => {
            let studentAnswers = state.selectedAnswers.map(ans => { return ans.selectedOption });
            let actualAnswers = state.questionList.map(ans => { return ans.answer });
            console.log(studentAnswers, actualAnswers);
            for (let i = 0; i < studentAnswers.length; i++) {
                if (studentAnswers[i] === actualAnswers[i]) {
                    ++state.score;
                }
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuestionsFromAPI.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchQuestionsFromAPI.fulfilled, (state, action) => {
                state.loading = false;
                state.questionList = action.payload;
            })
            .addCase(fetchQuestionsFromAPI.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const getQuestions = (state) => state.counter.questionList;
export const getScore = (state) => state.counter.score;
export const isLoading = (state) => state.counter.loading;
export const getError = (state) => state.counter.error;

// Action creators are generated for each case reducer function
export const { selectedAnswer, scoreQuiz } = counterSlice.actions;

export default counterSlice.reducer;
