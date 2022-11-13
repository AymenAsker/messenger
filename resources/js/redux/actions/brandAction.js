import useGetData from "../../hooks/useGetData";
import {useCreateDataWithImage} from "../../hooks/useCreateData";
import {createAsyncThunk} from "@reduxjs/toolkit";


export const getAllBrand = createAsyncThunk('brand/getAllBrand', async (limit, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await useGetData(`api/v1/brands?limit=${limit}`);
        return res;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})


// get brand
export const getBrand = createAsyncThunk('brand/getBrand', async (id, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await useGetData(`api/v1/brands/${id}`);
        return res;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})



export const getAllBrandPage = createAsyncThunk('brand/getAllBrandPage', async (page, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await useGetData(`api/v1/brands?limit=6&page=${page}`);
        return res;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const createBrand = createAsyncThunk('brand/createBrand', async (formData, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await useCreateDataWithImage(`/api/v1/brands`,formData);
        return res;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})
