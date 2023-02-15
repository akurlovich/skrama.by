import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICartSliceState {
  totalNavBarLinks: string[];
  
};

const initialState: ICartSliceState = {
  totalNavBarLinks: ['Главная страница'],
};

const navigationBarSlice = createSlice({
  name: 'NAVIGATIONBAR',
  initialState,
  reducers: {
    addNavItem(state, action: PayloadAction<string>) {
      state.totalNavBarLinks.push(action.payload);
    },
    removeNavItem(state, action) {
      
    },
    clearNavItems(state) {
      state.totalNavBarLinks = ['Главная страница'];
    },
  },
});

export const { addNavItem, removeNavItem, clearNavItems } =
navigationBarSlice.actions;

export default navigationBarSlice.reducer;