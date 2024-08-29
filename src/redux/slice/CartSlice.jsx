



// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../component/cartItems";

// Importing the actions with unique names
import { clearCart as clearCartAction } from '../actions/clearCart';
import { removeItem as removeItemAction } from '../actions/removeItem';
import { increase as increaseAction } from '../actions/increase';
import { decrease as decreaseAction } from '../actions/decrease';
import { calculateTotal as calculateTotalAction } from '../actions/calculateTotal';

const initialState = {
    cartItems: cartItems,
    amount: 0,
    total: 0,
    isLoading: true
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: clearCartAction,
        removeItem: removeItemAction,
        increase: increaseAction,
        decrease: decreaseAction,
        calculateTotal: calculateTotalAction
    }
});

// Export the actions directly
export const { clearCart, removeItem, increase, decrease, calculateTotal } = cartSlice.actions;
export default cartSlice.reducer;