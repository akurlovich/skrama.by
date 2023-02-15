import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_TYPE_ID_POLIKARBONAT } from '../../../constants/user';
import { ISort } from '../../../types/ISort';

interface IFilterSliceState {
  categoryId: string;
  sort: ISort;
  pageCount: number;
  searchValue: string;
};

const initialState: IFilterSliceState = {
  categoryId: DEFAULT_TYPE_ID_POLIKARBONAT,
  pageCount: 1,
  searchValue: '',
  sort: { 
    name: 'rating',
    sortProperty: 'rating'
  },
};
// @ts-ignore
const filterSlice = createSlice({
  name: 'FILTERS',
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<string>) => {
      state.categoryId = action.payload;
    },
    setSortType: (state, action: PayloadAction<string>) => {
      state.sort.name = action.payload;
    },
    setPageCount: (state, action: PayloadAction<number>) => {
      state.pageCount = action.payload;
    },
    setFilters: (state, action: PayloadAction<{pageCount: number, categoryId: string, sortProperty: string}>) => {
      state.pageCount = action.payload.pageCount;
      state.categoryId = action.payload.categoryId;
      state.sort.name = action.payload.sortProperty;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setCategoryId, setSortType, setPageCount, setFilters, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;
