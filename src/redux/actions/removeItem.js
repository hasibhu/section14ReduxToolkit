export const removeItem = (state, action) => {
    const itemId = action.payload;
    state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
};
