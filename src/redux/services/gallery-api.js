"use client";

import tags from "@/constant/tags";
import baseApi from "@/redux/base-api";

const galleryApi = baseApi
  .enhanceEndpoints({
    addTagTypes: [tags.gallery, tags.video],
  })
  .injectEndpoints({
    overrideExisting: module.hot?.status() === "apply",
    endpoints: (builder) => ({
      getVideo: builder.query({
        query: () => ({
          url: "/members/dashboard/videos",
          method: "GET",
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: [tags.video],
      }),
      updateVideo: builder.mutation({
        query: (data) => ({
          url: "/members/dashboard/videos",
          method: "PATCH",
          body: data,
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: [tags.video],
      }),
    }),
  });

export const { useGetVideoQuery, useUpdateVideoMutation } = galleryApi;
