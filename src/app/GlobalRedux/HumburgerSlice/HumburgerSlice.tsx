"use client";

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface HumburgerInt {
  isClicked: boolean;
}

const initialState: HumburgerInt = {
  isClicked: false,
};

export const HumburgerSlice = createSlice({
  name: "humburger",
  initialState,
  reducers: {
    setIsClicked: (state, action: PayloadAction<boolean>) => {
      state.isClicked = action.payload;
    },
  },
});

export const selectIsClicked = (state: RootState) => state.humburger.isClicked;
export const { setIsClicked } = HumburgerSlice.actions;

export default HumburgerSlice.reducer;
