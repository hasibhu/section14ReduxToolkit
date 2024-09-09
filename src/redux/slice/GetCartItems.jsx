// import { createAsyncThunk } from "@reduxjs/toolkit";

// const url = 'https://www.course-api.com/react-useReducer-cart-project';

// const getCartItems = createAsyncThunk('cart/getCartItems', () => {
//     return fetch(url).then(res=> res.json()).catch((err)=> console.log(err))
// })

// export default getCartItems;

import { createAsyncThunk } from "@reduxjs/toolkit";

const url = 'https://www.course-api.com/react-useReducer-cart-project';

const getCartItems = createAsyncThunk('cart/getCartItems', async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching cart items:', error);
    throw error; // This will cause the thunk to be rejected
  }
});

export default getCartItems;
