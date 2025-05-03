import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: { data: [] },
  reducers: {
    fetchProduct(state, action) {
      state.data = action.payload;
    },
  },
});

export const { fetchProduct } = productSlice.actions;
export default productSlice.reducer;

export function getProduct() {
  return async function getProductThunk(dispatch, getState) {
    const data = await fetch("https://fakestoreapi.com/products");
    const result = await data.json();
    dispatch(fetchProduct(result));
  };
}
