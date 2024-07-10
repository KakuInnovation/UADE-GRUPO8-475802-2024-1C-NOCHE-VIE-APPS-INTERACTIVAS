import {createSlice} from "@reduxjs/toolkit";


export const productSlice = createSlice(
    {
        name: "products",
        initialState: {
            products : [],
            isLoading: false,
        },
        reducers:{
            loadingProductFetch:(state,action) => {
                state.isLoading = true;


            },
            fetchProducts:(state, action) => {
                state.products = action.payload;
                console.log(state.products);
                state.isLoading = false;
            },
            updateProductInList:(state, action) => {
                state.isLoading = false;
                const updatedProduct = action.payload;
                state.products = state.products.map(product =>
                    product.productId === updatedProduct.productId ? { ...product, ...updatedProduct } : product
                );

            },
            addProductToList:(state,action) => {
                state.products = state.products.push(action.payload);
            },
            deleteProductFromList:(state,action) => {
                state.products = state.products.filter(item => item.productId !== action.payload);
            },
            errorProductFetch:(state, action) => {
                state.isLoading = false;
            }
        }

    },

);

export const {
    loadingProductFetch,
    fetchProducts,
    errorProductFetch,
    updateProductInList,
    addProductToList,
    deleteProductFromList
} = productSlice.actions;