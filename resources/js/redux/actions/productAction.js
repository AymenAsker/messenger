import { createAsyncThunk } from "@reduxjs/toolkit";
import { useCreateDataWithImage } from "../../hooks/useCreateData";
import useGetData from "../../hooks/useGetData";
import useDeleteData from "../../hooks/useDeleteData";
import { useUpdateDataWithImage } from "../../hooks/useUpdateData";

// get all product
export const getAllProduct = createAsyncThunk(
  "product/getAllProduct",
  async (limit, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useGetData(`/api/v1/products?limit=${limit}`);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// get product
export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useGetData(`/api/v1/products/${id}`);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// get product like
export const getProductLike = createAsyncThunk(
  "product/getProductLike",
  async ({ id, limit }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useGetData(
        `/api/v1/products?limit=${limit}&category=${id}`
      );
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// get product page
export const getAllProductPage = createAsyncThunk(
  "product/getAllProductPage",
  async (page, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useGetData(`/api/v1/products?limit=100&page=${page}`);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


// get all products with query string
export const getAllProductsSearch = createAsyncThunk(
  "product/getAllProductsSearch",
  async (queryString, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useGetData(`/api/v1/products?${queryString}`);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// create product
export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (formData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useCreateDataWithImage("/api/v1/products", formData);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Update product
export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async ({ id, formData }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useUpdateDataWithImage(
        `/api/v1/products/${id}`,
        formData
      );
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Delete product
export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await useDeleteData(`/api/v1/products/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
