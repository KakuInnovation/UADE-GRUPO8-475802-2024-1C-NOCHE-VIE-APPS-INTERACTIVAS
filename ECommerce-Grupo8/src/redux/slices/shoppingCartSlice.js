import {createSlice} from '@reduxjs/toolkit';

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: {
        shoppingCart: [],
        listings: [],
        productQuantity: 0,
        subtotal:0,
        coupon:"",
        discount: 0,
    },
    reducers: {
        setListings: (state, action) => {
            state.listings = action.payload;

        },
        addToCart: (state, action) => {
            const { id, quantity } = action.payload;
            const listingToAdd = state.listings.find(item => item.listingId === id);

            if (listingToAdd && listingToAdd.stock >= quantity) {
                const existingItemIndex = state.shoppingCart.findIndex(item => item.listingId === id);

                if (existingItemIndex === -1) {
                    state.shoppingCart = [
                        ...state.shoppingCart,
                        { ...listingToAdd, quantity }
                    ];
                    state.productQuantity += 1;
                } else {
                    state.shoppingCart = state.shoppingCart.map(item =>
                        item.listingId === id ? { ...item, quantity: item.quantity + quantity } : item
                    );
                }
                state.subtotal += listingToAdd.price;

                listingToAdd.stock -= quantity;
            }
            else{alert("stock maximo")}
        },
        decrementToCart: (state, action) => {
            const { id, quantity } = action.payload;
            const listingToDecrease = state.shoppingCart.find(item => item.listingId === id);

            if (listingToDecrease) {
                listingToDecrease.quantity -= quantity;
                if (listingToDecrease.quantity <= 0) {
                    state.shoppingCart = state.shoppingCart.filter(item => item.listingId !== id);
                    state.productQuantity -= 1;
                } else {
                    state.shoppingCart = state.shoppingCart.map(item =>
                        item.listingId === id ? { ...item, quantity: item.quantity } : item
                    );
                }

                const listing = state.listings.find(item => item.listingId === id);
                if (listing) {
                    listing.stock += quantity;
                }
                state.subtotal -= listing.price;
            }
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            const listingToDelete = state.shoppingCart.find(item => item.listingId === id);

            if (listingToDelete) {
                const listing = state.listings.find(item => item.listingId === id);
                if (listing) {
                    listing.stock += listingToDelete.quantity;
                }
                state.productQuantity -= 1;
                state.shoppingCart = state.shoppingCart.filter(item => item.listingId !== id);
                state.subtotal -= (listingToDelete.price) * listingToDelete.quantity;
                state.coupon = null;

                state.discount = 0;
                if(state.shoppingCart.length === 0){
                    state.subtotal = 0;
                }

            }
        },
        sellProducts: (state) => {
            console.log(state.shoppingCart);
        },
        applyDiscount: (state,action) => {
            const {coupon,discount} = action.payload;
            state.coupon = coupon;
            state.discount = discount;
            state.subtotal = state.subtotal - (discount * state.subtotal / 100);


        },
        emptyCart: (state) => {
            state.shoppingCart = [];
            state.coupon = "";
            state.subtotal = 0;
            state.productQuantity = 0;


        }
    },
});

export const { setListings,
    addToCart,
    decrementToCart,
    removeFromCart,
    sellProducts,
    applyDiscount,
    emptyCart
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
