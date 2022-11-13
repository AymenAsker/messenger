import useGetData from "../../hooks/useGetData";
import {useCreateDataWithImage} from "../../hooks/useCreateData";
import {createAsyncThunk} from "@reduxjs/toolkit";


export const getAllCategory = createAsyncThunk('category/getAllCategory', async (limit, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await useGetData(`/api/v1/categories?limit=${limit}`);
        return res;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

// get category
export const getCategory = createAsyncThunk('category/getCategory', async (id, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await useGetData(`/api/v1/categories/${id}`);
        return res;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})


export const getAllCategoryPage = createAsyncThunk('category/getAllCategoryPage', async (page, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await useGetData(`/api/v1/categories?limit=6&page=${page}`);
        return res;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const createCategory = createAsyncThunk('category/createCategory', async (formData, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await useCreateDataWithImage(`/api/v1/categories`, formData);
        return res;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})
