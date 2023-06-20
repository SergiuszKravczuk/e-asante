"use client";

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface CartInt {
  isCliked: boolean;
}

const initialState = {
  isClicked: false,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setIsCliked: (state, action: PayloadAction<boolean>) => {
      state.isClicked = action.payload;
    },
  },
});

export const selectIsCartDropDownClicked = (state: RootState) =>
  state.cart.isClicked;

export const { setIsCliked } = CartSlice.actions;

export default CartSlice.reducer;
