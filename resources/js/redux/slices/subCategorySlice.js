import {createSlice} from "@reduxjs/toolkit";
import {createSubCategory, getSubCategory} from "../actions/subCategoryAction";

const initialState = {
    subCategories: [],
    loading: false,
    error: null,
};
const subCategorySlice = createSlice({
    name:"subCategory",
    initialState,
    extraReducers: {
        // get All subCategory
        [getSubCategory.pending]: (state,action) => {
            state.loading = true;
            state.error = null;
        },
        [getSubCategory.fulfilled]: (state,action) => {
            state.loading = false;
            state.subCategories = action.payload;
        },
        [getSubCategory.rejected]: (state,action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // create subCategory
        [createSubCategory.pending]: (state,action) => {
            state.loading = true;
            state.error = null;
        },
        [createSubCategory.fulfilled]: (state,action) => {
            state.loading = false;
            state.subCategories.push(action.payload);
        },
        [createSubCategory.rejected]: (state,action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});


export default subCategorySlice.reducer;