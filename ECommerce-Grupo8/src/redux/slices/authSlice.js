// src/redux/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: '',
    password: '',
    token: '',
    isLoading: false,
    isAuthenticated: false,
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
            state.isAuthenticated = true;
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
            state.isAuthenticated = false;
        }
    },

});

export const { loadingLogin,fetchLogin,failedLogin,logOut } = authSlice.actions;
