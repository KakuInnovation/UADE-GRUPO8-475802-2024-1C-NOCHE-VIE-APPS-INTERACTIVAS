import {createSlice} from "@reduxjs/toolkit";


export const listings = createSlice(
    {
        name: 'listings',
        initialState: {
            listingsWithStock: [],
            listings: [],
            isLoading: false,
            brands: [],
            categories: [],
            difficulties:[],
            players:[],
            durations:[],
            searchedText:"",
        },
        reducers: {
            loadingFetch:(state) => {
                state.isLoading = true;
            },
            fetchListingWithStock:(state, action) => {
                state.listingsWithStock = action.payload;
                console.log("listings",state.listingsWithStock);
                state.isLoading = false;
            },
            fetchAlListings:(state, action) => {
                state.listings = action.payload;
            },
            fetchBrand:(state, action) => {
                state.brands = action.payload;
            },
            fetchCategory:(state, action) => {
              state.categories = action.payload;
            },
            fetchDifficulties:(state, action) => {
                state.difficulties = action.payload;
                state.isLoading = false;
            },
            fetchPlayer:(state, action) => {
                state.players = action.payload;
                state.isLoading = false;
            },
            fetchDurations:(state, action) => {
                state.durations = action.payload;
            },
            fetchSearchedText:(state, action) => {
                state.searchedText = action.payload;
            },
            resetSearchedText:(state, ) => {
                state.searchedText = "";
            },
            failedListingFetch:(state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
            }
        }
    }
);

export const {
    loadingFetch,
    fetchListingWithStock,
    failedListingFetch,
    fetchBrand,
    fetchPlayer,
    fetchDurations,
    fetchDifficulties,
    fetchCategory,
fetchSearchedText,
resetSearchedText,
    fetchAlListings
} = listings.actions;