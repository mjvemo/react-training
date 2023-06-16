import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: undefined,
  items: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setActive: (state, action) => {
      state.active = action.payload;
    },
    setProducts: (state, action) => {
      state.items = action.payload;
    },
    addProduct: (state, action) => {
      state.items = state.items.concat([action.payload]);
    }
  },
});

export const { addProduct, setActive, setProducts } = productsSlice.actions;

export default productsSlice.reducer;
