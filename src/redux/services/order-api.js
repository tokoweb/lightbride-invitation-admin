"use client";

import tags from "@/constant/tags";
import baseApi from "@/redux/base-api";

const orderApi = baseApi
  .enhanceEndpoints({ addTagTypes: [tags.order] })
  .injectEndpoints({
    overrideExisting: module.hot?.status() === "apply",
    endpoints: (builder) => ({
      createOrder: builder.mutation({
        query: (data) => ({
          url: "/members/orders",
          method: "POST",
          body: new URLSearchParams(data),
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
      }),

      BrideGroomOrder: builder.mutation({
        query: (data) => ({
          url: "/members/brides-grooms-data-orders",
          method: "POST",
          body: data,
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
      }),

      EventOrder: builder.mutation({
        query: (data) => ({
          url: "/members/events",
          method: "POST",
          body: data,
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
      }),
    }),
  });

export const {
  useBrideGroomOrderMutation,
  useCreateOrderMutation,
  useEventOrderMutation,
} = orderApi;
