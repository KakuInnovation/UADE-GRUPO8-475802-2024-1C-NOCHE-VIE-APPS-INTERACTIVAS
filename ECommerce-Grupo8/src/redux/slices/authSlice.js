// src/redux/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: '',
    password: '',
    token: '',
    isLoading: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loadingLogin: (state) => {
            state.isLoading = true;
        },
        fetchLogin : (state,action) => {
            state.isLoading = false;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.token = action.payload.token;
            alert(state.token)



        },
        failedLogin: (state, action) => {
            state.isLoading = false;
            state.error = action.payload.error;
        },
        logOut: (state) => {
            state.isLoading = true;
            state.email = '';
            state.password = '';
            state.token = '';
        }
    },

});

export const { loadingLogin,fetchLogin,failedLogin,logOut } = authSlice.actions;


