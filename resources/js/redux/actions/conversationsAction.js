import { createAsyncThunk } from "@reduxjs/toolkit";
import useGetData from "../../hooks/useGetData";

export const getAllConversation = createAsyncThunk(
    "conversation/getAllConversation",
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await useGetData(`/api/conversations`);
            return res;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
