  // clearCart: (state) => {
        //     state.cartItems = [];
        // },

        // removeItem: (state, action) => {
        //     const itemId = action.payload;
        //     state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
        // },

        // increase: (state, { payload }) => {
        //     const cartItem = state.cartItems.find((item) => item.id === payload.id);
        //     cartItem.amount = cartItem.amount + 1;
        // },
        // decrease: (state, { payload }) => {
        //     const cartItem = state.cartItems.find((item) => item.id === payload.id);
        //     cartItem.amount = cartItem.amount - 1;
        // },

        // calculateTotal: (state) => {
        //     let amount = 0;
        //     let total = 0;
        //     state.cartItems.forEach((item) => {
        //         amount += item.amount;
        //         total += (item.amount * item.price);
        //     });
        //     state.amount = amount;
        //     state.total = total;

        // }