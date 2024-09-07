import { createSlice } from '@reduxjs/toolkit';


export const searchValueSlice = createSlice({
    name: 'searchValueSlice',
    initialState: {
        searchValue: '',
        inputSearchValue: '',
    },
    reducers: {
        setSearchValue: (state, {payload}) =>{
            state.searchValue = payload;
        },
        setInputSearchValue: (state, {payload}) => {
            state.inputSearchValue = payload
        }
    }
});


export const { setSearchValue, setInputSearchValue } = searchValueSlice.actions;