import { createSlice } from "@reduxjs/toolkit";
import { createMessage, getAllMessage } from "../actions/messageAction";

const initialState = {
    messages: [],
    loading: false,
    error: null,
};
const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        // search word
        getMessage: (state, action) => {
            state.messages.messages.data.push(action.payload);
        },
    },
    extraReducers: {
        // get All Message
        [getAllMessage.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [getAllMessage.fulfilled]: (state, action) => {
            state.loading = false;
            state.messages = action.payload;
        },
        [getAllMessage.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // create Message
        [createMessage.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [createMessage.fulfilled]: (state, action) => {
            state.loading = false;
            state.messages.messages.data.push(action.payload);
        },
        [createMessage.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});
export const { getMessage } = messageSlice.actions;
export default messageSlice.reducer;
