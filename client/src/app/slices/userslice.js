import {createSlice , asyncThunkCreator} from "@reduxjs/toolkit";

const initialState = {
    users: [],
    loading: false,
    error: null,
}



const userSlice = createSlice({
    name : "user",
    initialState,
    extraReducers : (builder)=>{
        builder
        .addCase("user/fetchUsers/pending", (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase("user/fetchUsers/fulfilled", (state, action) => {
            state.loading = false;
            state.users = action.payload;
        })
        .addCase("user/fetchUsers/rejected", (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
})

