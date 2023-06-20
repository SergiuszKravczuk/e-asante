'use  client'

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers } from 'redux';
import { generalSettingsApi } from '@/api/general-settingsApi';
import thunkMiddleware from "redux-thunk";


import HumburgerReducer from './HumburgerSlice/HumburgerSlice';
import MobileMenuReducer from './MobileMenuSlice/MobileMenuSlice';
import CartReducer from './CartSlice/CartSlice';


const rootReducer = combineReducers({
  humburger: HumburgerReducer,
  mobileMenu: MobileMenuReducer,
  cart: CartReducer,
  [generalSettingsApi.reducerPath]: generalSettingsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware().concat(thunkMiddleware, generalSettingsApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

