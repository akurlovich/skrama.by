import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/UserReducer/UserSlice';
import authReducer from './reducers/AuthReducer/AuthSlice';
import bookReducer from './reducers/BookReducer/BookSlice';
import bookedReducer from './reducers/BookedReducer/BookedSlice';
import issuedReducer from './reducers/IssuedReducer/IssuedSlice';
import commentReducer from './reducers/CommentReducer/CommentSlice';
import productReducer from './reducers/ProductReducer/ProductSlice';

import filterReducer from "./reducers/FilterReducer/FilterSlice";
import brandReducer from "./reducers/BrandReducer/BrandSlice";

const rootReducer = combineReducers({
  userReducer,
  authReducer,
  bookReducer,
  bookedReducer,
  issuedReducer,
  commentReducer,

  productReducer,
  filterReducer,
  brandReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']