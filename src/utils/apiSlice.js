import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath:"api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://corsproxy.io/?https://www.swiggy.com",
    
  }),
  endpoints: (builder) => ({
    getItems: builder.mutation({
      query: () => ({
        url: "/dapi/restaurants/list/v5?lat=11.2587531&lng=75.78041&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetItemsMutation } = apiSlice;
