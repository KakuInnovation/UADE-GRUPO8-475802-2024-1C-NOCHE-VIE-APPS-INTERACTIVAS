// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';

import {authSlice} from "./slices/authSlice.js";
import {drawerSlice} from "./slices/drawerSlice.js";
import {shoppingCartSlice} from "./slices/shoppingCartSlice.js";
import {listingsWithStockSlice} from "./slices/listingsWithStockSlice.js";


const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        navbar_drawer: drawerSlice.reducer,
        shopping_cart: shoppingCartSlice.reducer,
        listing_stock: listingsWithStockSlice.reducer,
    },
});

export default store;
