import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },

    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      return []; // Return an empty array to clear the cart
    },
  },
});

export const { add, remove, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
