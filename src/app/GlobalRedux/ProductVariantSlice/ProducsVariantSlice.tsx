"use client";

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { ProductInt } from "@/types/productType";

interface productsVatiantInt {
  isLoading: boolean;
  productsChanged: ProductInt[] | [];
}

const initialState: productsVatiantInt = {
  isLoading: false,
  productsChanged: [],
};

export const ProductsVariantSlice = createSlice({
  name: "productsVariant",
  initialState,
  reducers: {},
});

export default ProductsVariantSlice.reducer;
