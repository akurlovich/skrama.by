import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/UserReducer/UserSlice';
import authReducer from './reducers/AuthReducer/AuthSlice';
import bookReducer from './reducers/BookReducer/BookSlice';
import bookedReducer from './reducers/BookedReducer/BookedSlice';
import issuedReducer from './reducers/IssuedReducer/IssuedSlice';
import commentReducer from './reducers/CommentReducer/CommentSlice';

const rootReducer = combineReducers({
  userReducer,
  authReducer,
  bookReducer,
  bookedReducer,
  issuedReducer,
  commentReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']