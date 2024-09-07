import { createSlice } from '@reduxjs/toolkit';


export const singlePostSlice = createSlice({
    name: 'singlePostSlice',
    initialState: {
        post: {
            title: '',
            author: '',
            date: '',
            hour: '',
            bannerPost : '',
            comments: [],
            tag: '',
            postImages: [],
            sectionsPost: [],
        },
    },
    reducers: {
        setPost: (state, {payload}) =>{
            state.post = payload;
        },
    }
});


export const { setPost } = singlePostSlice.actions;