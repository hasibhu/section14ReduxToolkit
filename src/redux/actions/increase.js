
export const increase = (state, { payload }) => {
    const cartItem = state.cartItems.find((item) => item.id === payload.id);

    cartItem.amount += 1;

    // db 
};
