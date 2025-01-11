import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity +=1;
      } else {
        state.items.push({...action.payload,quantity:1}); // payload: { id, name, price, quantity }
      }
    },

    minusToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
    if (existingItem !== -1) {
        if(existingItem.quantity < 2){
          state.items = state.items.filter(item => item.id !== action.payload.id);
      }else{
          existingItem.quantity -=1;
        }
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart ,minusToCart} = cartSlice.actions;

export default cartSlice.reducer;
