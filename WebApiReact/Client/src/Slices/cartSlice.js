import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";

const selectCartItems = (state) => state.cart.items;

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
       const existingIndex = state.items.findIndex(
         (item) => item.id === action.payload.id
       );

       if (existingIndex >= 0) {
         // If the item exists, increase the quantity
         state.items[existingIndex].quantity += action.payload.quantity || 1;
       } else {
         // If the item doesn't exist, add it with a default quantity of 1
         const newItem = {
           ...action.payload,
           quantity: action.payload.quantity || 1,
         };
         state.items.push(newItem);
       }
    },
    removeFromCart: (state, action) => {
      // Ürünü sepetten çıkarın.
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },

    clearCart: (state) => {
      // Sepeti temizleyin.
      state.items = [];
    },
    // Diğer reducerlar buraya eklenebilir.
  },
});
export const selectCartTotal = createSelector([selectCartItems], (items) => {
  return items.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );
});
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
export const { clearCart } = cartSlice.actions;
