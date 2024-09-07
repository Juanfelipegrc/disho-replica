


import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    category: '',
    categoriesLenght: {
        Uncategorized: 0,
        Spices: 0,
        Sauces: 0,
        Potables: 0,
        Greens: 0,
        Farm: 0,
        CannedGoods: 0,
        Bakery: 0,
    }
};

export const categorySlice = createSlice({
    name: 'categorySlice',
    initialState,
    reducers: {
        setCategory: (state, {payload}) =>{
            state.category = payload;
        },
        setCategoriesLenght: (state, {payload}) => {
            state.categoriesLenght = payload;
        },
        resetStateCategoriesLength: (state) => {
            state.categoriesLenght = initialState.categoriesLenght;
        }
    }
});


export const { setCategory, setCategoriesLenght, resetStateCategoriesLength } = categorySlice.actions;