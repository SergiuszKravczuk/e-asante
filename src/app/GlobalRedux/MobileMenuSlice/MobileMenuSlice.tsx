"use client";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface mobileMenuInt {
  id: number;
  title: string;
  url: string;
  object_id: string;
  parent: number;
}

interface MobileMenuInt {
  isOpen: boolean;
  whatIdKliked: number;
  mobileMenuData: MobileMenuInt[];
  parrentWay: number[];
}

const initialState: MobileMenuInt = {
  isOpen: false,
  whatIdKliked: 0,
  mobileMenuData: [],
  parrentWay: [],
};

export const MobileMenuSlice = createSlice({
  name: "mobileMenu",
  initialState,
  reducers: {
    setIsMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    setWhatMobileMenuIdIsClicked: (state, action: PayloadAction<number>) => {
      state.whatIdKliked = action.payload;
    },
    addMobileMenuWay: (state, action: PayloadAction<number>) => {
      state.parrentWay.push(action.payload);
    },
    removeMobileMenuWay: (state) => {
      state.parrentWay.pop();
    },
    setMobileMenuData: (state, action: PayloadAction<any>) => {
      state.mobileMenuData = action.payload;
    },
  },
});

export const selectIsMobileMenuOpen = (state: RootState) =>
  state.mobileMenu.isOpen;
export const selectWhatMobileMenuIdIsClicked = (state: RootState) =>
  state.mobileMenu.whatIdKliked;
export const selectMobileMenuData = (state: RootState) =>
  state.mobileMenu.mobileMenuData;
export const selectMobileMenyWay = (state: RootState) =>
  state.mobileMenu.parrentWay;

export const {
  setIsMobileMenuOpen,
  setWhatMobileMenuIdIsClicked,
  addMobileMenuWay,
  removeMobileMenuWay,
  setMobileMenuData,
} = MobileMenuSlice.actions;

export default MobileMenuSlice.reducer;
