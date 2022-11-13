import {useCreateData} from "../../hooks/useCreateData";
import useGetData from "../../hooks/useGetData";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const getSubCategory = createAsyncThunk('subCategory/getSubCategory', async (id, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await useGetData(`/api/v1/categories/${id}/subcategories`);
        return res;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})


export const createSubCategory = createAsyncThunk('subCategory/createSubCategory', async (data, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await useCreateData(`/api/v1/subcategories`,data);
        return res;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})
