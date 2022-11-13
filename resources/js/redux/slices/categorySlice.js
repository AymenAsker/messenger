import {createSlice} from "@reduxjs/toolkit";
import {createCategory, getAllCategory, getAllCategoryPage, getCategory} from "../actions/categoryAction";

const initialState = {
    categories: [],
    category: [],
    loading: false,
    error: null,
};
const categorySlice = createSlice({
    name:"category",
    initialState,
    extraReducers: {
        // get All Category
        [getAllCategory.pending]: (state,action) => {
            state.loading = true;
            state.error = null;
        },
        [getAllCategory.fulfilled]: (state,action) => {
            state.loading = false;
            state.categories = action.payload;
        },
        [getAllCategory.rejected]: (state,action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // get category
        [getCategory.pending]: (state,action) => {
            state.loading = true;
            state.error = null;
        },
        [getCategory.fulfilled]: (state,action) => {
            state.loading = false;
            state.category = action.payload;
        },
        [getCategory.rejected]: (state,action) => {
            state.loading = false;
            state.error = action.payload;
        },


        // get All Category Page
        [getAllCategoryPage.pending]: (state,action) => {
            state.loading = true;
            state.error = null;
        },
        [getAllCategoryPage.fulfilled]: (state,action) => {
            state.loading = false;
            state.categories = action.payload;
        },
        [getAllCategoryPage.rejected]: (state,action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // create Category
        [createCategory.pending]: (state,action) => {
            state.loading = true;
            state.error = null;
        },
        [createCategory.fulfilled]: (state,action) => {
            state.loading = false;
            state.categories.push(action.payload);
        },
        [createCategory.rejected]: (state,action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});


export default categorySlice.reducer;