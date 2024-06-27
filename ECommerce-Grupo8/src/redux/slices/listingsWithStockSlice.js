import {createSlice} from "@reduxjs/toolkit";


export const listingsWithStockSlice = createSlice(
    {
        name: 'listingsWithStock',
        initialState: {
            listingsWithStock: [],
            isLoading: false,
        },
        reducers: {
            loadingFetch:(state) => {
                state.isLoading = true;
            },
            fetchListingsWithStock:(state, action) => {
                state.listingsWithStock = action.payload;
                state.isLoading = false;
            },
            failedListingFetch:(state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
            }
        }
    }
);

export const {loadingFetch,fetchListingsWithStock, failedListingFetch} = listingsWithStockSlice.actions;