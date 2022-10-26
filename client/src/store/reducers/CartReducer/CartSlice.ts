import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { privateDecrypt } from 'crypto';
import { IProductResponse } from '../../../types/IProductResponse';

interface ICartSliceState {
  totalPrice: number;
  items: IProductResponse[];
};

const initialState: ICartSliceState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'CART',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<IProductResponse>) {
      const findItem = state.items.find((obj: IProductResponse) => obj._id === action.payload._id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        })
      }
      // state.items.push(action.payload);
      state.totalPrice += action.payload.price;
    },
    
    minusItem(state, action: PayloadAction<{id:string, price: number}>) {
      const findItem = state.items.find((obj: IProductResponse) => obj._id === action.payload.id);
      if (findItem) {
        findItem.count--;
        state.totalPrice -= action.payload.price;
      }
      
    },
    removeItem(state, action: PayloadAction<{id:string, price: number}>) {
      state.items = state.items.filter((obj: IProductResponse) => obj._id !== action.payload.id);
      state.totalPrice -= action.payload.price;
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItems, minusItem } =
  cartSlice.actions;

export default cartSlice.reducer;
