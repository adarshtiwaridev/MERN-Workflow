import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    add: (state, action) => {
      // Add logic here
    },
    remove: (state, action) => {
      // Remove logic here
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
