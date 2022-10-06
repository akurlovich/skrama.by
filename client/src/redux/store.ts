import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import filter from './filter/slice';
// import cart from './cart/slice';
// import pizza from './pizza/slice';
import { useDispatch } from 'react-redux';
import filterReducer from './slices/filterSlice';
import cartReducer from './slices/cartSlice';
import pizzasReducer from './slices/PizzasReducer/pizzasSlice';


const rootReducer = combineReducers({
  filterReducer,
  cartReducer,
  pizzasReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];