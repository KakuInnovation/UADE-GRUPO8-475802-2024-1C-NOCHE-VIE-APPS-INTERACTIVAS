// src/redux/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: '',
    password: '',
    userId: '',
    token: '',
    isLoading: null,
    isAuthenticated: false,
    role:'',
    userData: null
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
            state.email =  sessionStorage.getItem('email')||action.payload.email;
            state.password = sessionStorage.getItem('password')||action.payload.password;
            state.token =  sessionStorage.getItem('token')|| action.payload.token;
            state.userId =  sessionStorage.getItem('userId')|| action.payload.userId;
            state.isAuthenticated = true;
            state.role =  sessionStorage.getItem('role')|| action.payload.role;


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
            state.userId ='';
            state.isAuthenticated = false;
            state.role='';
            state.userData = null;
            sessionStorage.removeItem('email');
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('userId');
            sessionStorage.removeItem('role');
        },
        setUserData: (state, action) => {
            state.userData = action.payload;
        }



    },

});

export const {
    loadingLogin,
    fetchLogin,
    failedLogin,
    logOut,
    setUserData
}
    = authSlice.actions;
