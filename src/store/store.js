import { configureStore } from "@reduxjs/toolkit";
import { categorySlice, searchValueSlice, singlePostSlice, singleProduct } from "./slices";

export const store = configureStore({
    reducer: {
        singleProduct: singleProduct.reducer,
        category: categorySlice.reducer,
        singlePost: singlePostSlice.reducer,
        searchValue: searchValueSlice.reducer,
    }
})