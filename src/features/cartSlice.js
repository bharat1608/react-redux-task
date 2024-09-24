import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }

      state.totalAmount = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      state.totalQuantity = state.items.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.quantity = quantity;
      }

      state.totalAmount = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      state.totalQuantity = state.items.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalAmount = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      state.totalQuantity = state.items.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
    },
  },
});

export const { addItemToCart, updateQuantity, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
