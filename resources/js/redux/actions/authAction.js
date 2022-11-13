import { createAsyncThunk } from "@reduxjs/toolkit";
import { useCreateData } from "../../hooks/useCreateData";
import useGetData from "../../hooks/useGetData";

// create user
export const createUser = createAsyncThunk(
  "auth/createUser",
  async (formData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useCreateData("/api/v1/auth/signup", formData);
      return res;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// login user
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useCreateData("/api/v1/auth/login", formData);
      return res;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getLoggedUser = createAsyncThunk(
  "auth/getLoggedUser",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useGetData("/api/user");
      return res;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
