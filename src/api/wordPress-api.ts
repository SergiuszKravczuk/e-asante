'use client'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const consumerKey = (process.env.CLIENT_WOOCOMERCE_KEY)?.toString();
const consumerSecret = (process.env.PRIVATE_WOOCOMERCE_KEY)?.toString();

export const wordpressApi = createApi({
  reducerPath: 'wordpressApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://e-asante.pl/wp-json/',
    prepareHeaders(headers) {
      headers.set(
        'Authorization',
        `Basic ${btoa(`${consumerKey}:${consumerSecret}`)}`
      );
      headers.set("Content-Type", "application/json");
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getProductsBySearch: builder.query<any, any>({
      query: (search: any) => `/wc/v3/products?per_page=5&search=${search}`,
    }),
    getProductById: builder.query<any, any>({
      query: (id: number) => `/wc/v3/products/${id}`
    })
  }),
});

export const { useGetProductsBySearchQuery } = wordpressApi;
export const {useLazyGetProductByIdQuery} = wordpressApi
