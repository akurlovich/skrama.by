import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { privateDecrypt } from 'crypto';
import { ICartItem } from '../../../types/ICartItem';
// import { IProductResponse } from '../../../types/IProductResponse';

interface ICartSliceState {
  totalPrice: number;
  items: ICartItem[];
};

const initialState: ICartSliceState = {
  totalPrice: 0,
  items: [] as ICartItem[],
};

const cartSlice = createSlice({
  name: 'CART',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<ICartItem>) {
      const findItem = state.items.find((obj: ICartItem) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          // count: 1,
        })
      }
      // state.items.push(action.payload);
      // state.totalPrice += action.payload.price;
      state.totalPrice += action.payload.price * action.payload.count;
    },
    
    minusItem(state, action: PayloadAction<{id:string, price: number}>) {
      const findItem = state.items.find((obj: ICartItem) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count--;
        state.totalPrice -= action.payload.price;
      }
      
    },
    removeItem(state, action: PayloadAction<{id:string, price: number}>) {
      state.items = state.items.filter((obj: ICartItem) => obj.id !== action.payload.id);
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
