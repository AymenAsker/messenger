import { createSlice } from "@reduxjs/toolkit";
import {
  createBrand,
  getAllBrand,
  getAllBrandPage,
  getBrand,
} from "../actions/brandAction";

const initialState = {
  brands: [],
  brand: [],
  loading: false,
  error: null,
};
const brandSlice = createSlice({
  name: "brand",
  initialState,
  extraReducers: {
    // get All Brand
    [getAllBrand.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [getAllBrand.fulfilled]: (state, action) => {
      state.loading = false;
      state.brands = action.payload;
    },
    [getAllBrand.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // get Brand
    [getBrand.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [getBrand.fulfilled]: (state, action) => {
      state.loading = false;
      state.brand = action.payload;
    },
    [getBrand.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // get All Brand Page
    [getAllBrandPage.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [getAllBrandPage.fulfilled]: (state, action) => {
      state.loading = false;
      state.brands = action.payload;
    },
    [getAllBrandPage.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // create Brand
    [createBrand.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [createBrand.fulfilled]: (state, action) => {
      state.loading = false;
      state.brands.push(action.payload);
    },
    [createBrand.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default brandSlice.reducer;
