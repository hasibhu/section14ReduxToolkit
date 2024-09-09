// // cartSlice.js
// import { createSlice} from "@reduxjs/toolkit";
// import cartItems from "../../component/cartItems";

// // Importing the actions with unique names
// import { clearCart as clearCartAction } from '../actions/clearCart';
// import { removeItem as removeItemAction } from '../actions/removeItem';
// import { increase as increaseAction } from '../actions/increase';
// import { decrease as decreaseAction } from '../actions/decrease';
// import { calculateTotal as calculateTotalAction } from '../actions/calculateTotal';
// import getCartItems from "./GetCartItems";



// const initialState = {
//     cartItems: [],
//     amount: 0,
//     total: 0,
//     isLoading: true
// };

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         clearCart: clearCartAction,
//         removeItem: removeItemAction,
//         increase: increaseAction,
//         decrease: decreaseAction,
//         calculateTotal: calculateTotalAction,
        
//         },
// extraReducers: {
//             [getCartItems.pending]: (state) => {
//                 state.isLoading = true;
//             },
//             [getCartItems.fulfilled]: (state, action) => {
//                 state.isLoading = false;
//                 state.cartItems = action.payload
//             },
//             [getCartItems.rejected]: (state) => {
//                 state.isLoading = false;
//             },
//     }
// });

// // Export the actions directly
// export const { clearCart, removeItem, increase, decrease, calculateTotal } = cartSlice.actions;
// export default cartSlice.reducer;




// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
import getCartItems from "./GetCartItems"; // Import the async thunk

const initialState = {
    cartItems: [],  // Initially empty until fetched
    amount: 0,
    total: 0,
    isLoading: true
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
            state.amount = 0;
            state.total = 0;
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },
        increase: (state, action) => {
            const cartItem = state.cartItems.find(item => item.id === action.payload);
            if (cartItem) cartItem.amount += 1;
        },
        decrease: (state, action) => {
            const cartItem = state.cartItems.find(item => item.id === action.payload);
            if (cartItem) cartItem.amount -= 1;
        },
        calculateTotal: (state) => {
            let total = 0;
            let amount = 0;
            state.cartItems.forEach(item => {
                total += item.price * item.amount;
                amount += item.amount;
            });
            state.total = total;
            state.amount = amount;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCartItems.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCartItems.fulfilled, (state, action) => {
                state.isLoading = false;
                state.cartItems = action.payload;
            })
            .addCase(getCartItems.rejected, (state) => {
                state.isLoading = false;
            });
    }
});

// Export the actions directly
export const { clearCart, removeItem, increase, decrease, calculateTotal } = cartSlice.actions;
export default cartSlice.reducer;
