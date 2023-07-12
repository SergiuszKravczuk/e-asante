"use client";

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { ProductInt } from "@/types/productType";

interface CartInt {
  isClicked: boolean;
  cartProducts: ProductInt[];
  cartCount: number;
}

const initialState: CartInt = {
  isClicked: false,
  cartProducts: [],
  cartCount: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setIsCliked: (state, action: PayloadAction<boolean>) => {
      state.isClicked = action.payload;
    },
    setCartCount: (state, action: PayloadAction<boolean>) => {
      state.isClicked = action.payload;
    },
    addProductToCart: (state, action: PayloadAction<ProductInt>) => {
      const existingProduct = state.cartProducts.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartProducts.push({ ...action.payload, quantity: 1 });
      }

      state.cartCount = state.cartProducts.reduce(
        (count, product) => count + product.quantity,
        0
      );
    },
    removeProductFromCart: (state, action: PayloadAction<number>) => {
      const index = state.cartProducts.findIndex(
        (product) => product.id === action.payload
      );

      if (index !== -1) {
        const product = state.cartProducts[index];

        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          state.cartProducts.splice(index, 1);
        }

        state.cartCount = state.cartProducts.reduce(
          (count, product) => count + product.quantity,
          0
        );
      }
    },
  },
});

export const selectIsCartDropDownClicked = (state: RootState) =>
  state.cart.isClicked;

export const selectCartProducts = (state: RootState) => state.cart.cartProducts;
export const selectCartQuantity = (state: RootState) => state.cart.cartCount;

export const { setIsCliked, addProductToCart, removeProductFromCart } =
  CartSlice.actions;

export default CartSlice.reducer;
