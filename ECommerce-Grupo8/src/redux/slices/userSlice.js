// src/redux/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userListings : undefined,
    userData: null,
    isEditing: false,
    user: "",
    users: null,
};

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setLoading: (state) => {
            state.isLoading = true;
        },

        setUserListings : (state,action) => {
            state.userListings = action.payload;
            state.isEditing = true;
        },
        deleteUserListings : (state) => {
            state.userListings = undefined;
            state.isEditing = false;
        },
        setEditing: (state) => {
            state.isEditing = false;
        },
        setUser:(state,action) => {
            state.user = action.payload;
            state.isEditing = false;
        },
        setAllUsers:(state,action) => {
            state.users = action.payload;

            state.isEditing = false;
        }

    },

});

export const {setUserListings,deleteUserListings,setEditing,setUser,setAllUsers,setLoading} = userSlice.actions;



