import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk('fetchUsers', async (param) => {
    const responce = await fetch("https://api.github.com/users/"+param);
    return responce.json();
})

const usersSlice = createSlice({
    name: 'Users',
    initialState:{
        isLoading: false,
        data: null,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isError = true;
        })
    },
});

export default usersSlice.reducer;