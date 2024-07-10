// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';

import {authSlice} from "./slices/authSlice.js";
import {drawerSlice} from "./slices/drawerSlice.js";
import {shoppingCartSlice} from "./slices/shoppingCartSlice.js";
import {listings} from "./slices/listingsSlice.js";
import {userSlice} from "./slices/userSlice.js";
import {productSlice} from "./slices/product_slice.js";


const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        navbar_drawer: drawerSlice.reducer,
        shopping_cart: shoppingCartSlice.reducer,
        listing_stock: listings.reducer,
        user_slice: userSlice.reducer,
        product_slice: productSlice.reducer,
    },
});

export default store;
