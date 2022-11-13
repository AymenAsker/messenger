import { createAsyncThunk } from "@reduxjs/toolkit";
import useGetData from "../../hooks/useGetData";
import {useCreateData} from "../../hooks/useCreateData";



// get All Message
export const getAllMessage = createAsyncThunk(
    "message/getAllMessage",
    async (id, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await useGetData(`/api/conversations/${id}/messages`);
            return res;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);


// create Message
export const createMessage = createAsyncThunk(
    "message/createMessage",
    async (formData, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await useCreateData("/api/messages", formData);
        return res;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
