import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPizza } from '../../../types/IPizza';
import { fetchPizzas } from './ActionCreators';

interface IPizzasSliceState {
  items: IPizza[];
  // isLoading: boolean;
  error: string;
  status: string;
};

const initialState: IPizzasSliceState = {
  items: [],
  // isLoading: true,
  error: '',
  status: 'loading',
};
// @ts-ignore
const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<IPizza[]>) {
      state.items = action.payload;
    }
  },
  extraReducers: {
    [fetchPizzas.pending.type]: (state) => {
      state.items = [];
      // state.isLoading = true;
      state.status = 'loading';
    },
    [fetchPizzas.fulfilled.type]: (state, action: PayloadAction<IPizza[]>) => {
      // state.isLoading = false;
      state.error = '';
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchPizzas.rejected.type]: (state, action: PayloadAction<string>) => {
      // state.isLoading = false;
      state.error = action.payload;
      state.items = [];
      state.status = 'error';
    },
  }
});

export const { setItems } =
  pizzasSlice.actions;

export default pizzasSlice.reducer;
