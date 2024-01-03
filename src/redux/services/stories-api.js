"use client";

import tags from "@/constant/tags";
import baseApi from "@/redux/base-api";

const storiesApi = baseApi
  .enhanceEndpoints({
    addTagTypes: [tags.stories],
  })
  .injectEndpoints({
    overrideExisting: module.hot?.status() === "apply",
    endpoints: (builder) => ({
      getStories: builder.query({
        query: () => ({
          url: "/members/dashboard/stories",
          method: "GET",
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: [tags.stories],
      }),
      updateStories: builder.mutation({
        query: (data) => ({
          url: "/members/dashboard/stories",
          method: "PATCH",
          body: data,
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: [tags.stories],
      }),
    }),
  });

export const { useGetStoriesQuery, useUpdateStoriesMutation } = storiesApi;
