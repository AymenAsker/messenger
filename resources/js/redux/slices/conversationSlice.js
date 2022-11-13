import { createSlice } from "@reduxjs/toolkit";
import { getAllConversation } from "../actions/conversationsAction";

const initialState = {
    conversations: [],
    conversation: null,
    loading: false,
    error: null,
};
const conversationSlice = createSlice({
    name: "conversation",
    initialState,
    reducers: {
        // search word
        getConversation: (state, action) => {
            state.conversation = action.payload;
        },
    },
    extraReducers: {
        // get All Category
        [getAllConversation.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [getAllConversation.fulfilled]: (state, action) => {
            state.loading = false;
            state.conversations = action.payload;
        },
        [getAllConversation.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { getConversation } = conversationSlice.actions;
export default conversationSlice.reducer;
