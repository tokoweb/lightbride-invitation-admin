"use client";

import tags from "@/constant/tags";
import baseApi from "@/redux/base-api";

const authApi = baseApi
  .enhanceEndpoints({ addTagTypes: [tags.auth] })
  .injectEndpoints({
    overrideExisting: module.hot?.status() === "apply",
    endpoints: (builder) => ({
      whoIAm: builder.query({
        query: () => ({
          url: "/users/me",
          method: "GET",
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
      }),

      login: builder.mutation({
        query: (data) => ({
          url: "/users/login",
          method: "POST",
          body: new URLSearchParams(data),
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
      }),

      register: builder.mutation({
        query: (data) => ({
          url: "/users/register",
          method: "POST",
          body: new URLSearchParams(data),
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
      }),

      refresh: builder.mutation({
        query: (data) => ({
          url: "/users/refresh-token",
          method: "POST",
          body: new URLSearchParams(data),
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
      }),

      logout: builder.mutation({
        query: () => ({
          url: "/users/logout",
          method: "POST",
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
      }),
    }),
  });

export const {
  useWhoIAmQuery,
  useLoginMutation,
  useRegisterMutation,
  useRefreshMutation,
  useLogoutMutation,
} = authApi;
