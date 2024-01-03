"use client";

import tags from "@/constant/tags";
import baseApi from "@/redux/base-api";

const brideGroomApi = baseApi
  .enhanceEndpoints({
    addTagTypes: [tags.brideGroom],
  })
  .injectEndpoints({
    overrideExisting: module.hot?.status() === "apply",
    endpoints: (builder) => ({
      getBrideGroom: builder.query({
        query: () => ({
          url: "/members/dashboard/brides-grooms-data",
          method: "GET",
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: [tags.brideGroom],
      }),
      updateBrideGroom: builder.mutation({
        query: (data) => ({
          url: "/members/dashboard/brides-grooms-data",
          method: "PATCH",
          body: data,
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: [tags.brideGroom],
      }),
    }),
  });

export const { useGetBrideGroomQuery, useUpdateBrideGroomMutation } =
  brideGroomApi;
