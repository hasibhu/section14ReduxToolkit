export const decrease = (state, { payload }) => {
    const cartItem = state.cartItems.find((item) => item.id === payload.id);
    cartItem.amount -= 1;
};
