// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';

import {authSlice} from "./slices/authSlice.js";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
    },
});

export default store;
