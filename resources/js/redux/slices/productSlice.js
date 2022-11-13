import { createSlice } from "@reduxjs/toolkit";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getAllProductPage,
  getAllProductsSearch,
  getProduct,
  getProductLike,
  updateProduct,
} from "../actions/productAction";

const initialState = {
  searchPro: {
    word: "",
    sort: "",
    category: "",
    brand: "",
  },
  products: [],
  product: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // search word
    searchWordPro: (state, action) => {
      state.searchPro.word = action.payload;
    },
    // search sort
    searchSortPro: (state, action) => {
      state.searchPro.sort = action.payload;
    },
    // search category
    searchCategoryPro: (state, action) => {
      state.searchPro.category = action.payload;
    },
    // search brand
    searchBrandPro: (state, action) => {
      state.searchPro.brand = action.payload;
    },
  },
  extraReducers: {
    // get All Product
    [getAllProduct.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [getAllProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [getAllProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // get All Products with query
    [getAllProductsSearch.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [getAllProductsSearch.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [getAllProductsSearch.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // get Product
    [getProduct.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [getProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    [getProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // get product like
    [getProductLike.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [getProductLike.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [getProductLike.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // get All Product Page
    [getAllProductPage.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [getAllProductPage.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [getAllProductPage.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // create Product
    [createProduct.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [createProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.products.push(action.payload);
    },
    [createProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // update product
    [updateProduct.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [updateProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    [updateProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // delete Product
    [deleteProduct.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [deleteProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = state.products.filter((el) => el._id !== action.payload);
    },
    [deleteProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  searchWordPro,
  searchSortPro,
  searchCategoryPro,
  searchBrandPro,
} = productSlice.actions;
export default productSlice.reducer;
