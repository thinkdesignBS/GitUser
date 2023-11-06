import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRepos = createAsyncThunk('fetchRepos', async (param) => {
    const responce = await fetch("https://api.github.com/users/"+param+"/repos");
    return responce.json();
})

const reposSlice = createSlice({
    name: 'Repos',
    initialState:{
        isLoading: false,
        data: null,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRepos.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchRepos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchRepos.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isError = true;
        })
    },
});

export default reposSlice.reducer;