"use client";

import baseApi from "@/redux/base-api";

const masterDataApi = baseApi.injectEndpoints({
  overrideExisting: module.hot?.status() === "apply",
  endpoints: (builder) => ({
    getBankList: builder.query({
      query: () => ({
        url: "/banks",
        method: "GET",
      }),
      transformResponse: (result) => result.data,
      transformErrorResponse: (result) => result.data,
    }),
  }),
});

export const { useGetBankListQuery } = masterDataApi;
