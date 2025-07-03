import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      // Prevent duplicate items if already in cart
      const itemExists = state.find(item => item.id === action.payload.id);
      if (!itemExists) {
        state.push(action.payload);
      }
    },
    remove: (state, action) => {
      // Always use === for strict comparison
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
