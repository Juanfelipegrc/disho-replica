import { createSlice } from '@reduxjs/toolkit';


export const singleProduct = createSlice({
    name: 'singleProduct',
    initialState: {
        singleProduct: {
            name: '',
            price: '',
            discountPrice: '',
            img: [],
            additionalInformation: {},
            reviews: [],
            categories:[],
    
        },

    },
    reducers: {
        setSingleProduct: (state, {payload}) =>{
            state.singleProduct = payload;
        },
    }
});


export const { setSingleProduct } = singleProduct.actions;