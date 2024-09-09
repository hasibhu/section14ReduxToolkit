
export const calculateTotal = (state) => {
    let amount = 0;
    let total = 0;
    state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
    });
    state.amount = amount;
    state.total = total;
};
