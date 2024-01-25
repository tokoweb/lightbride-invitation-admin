"use client";

import tags from "@/constant/tags";
import baseApi from "@/redux/base-api";

const socialMediaApi = baseApi
  .enhanceEndpoints({
    addTagTypes: [tags.socialMedia],
  })
  .injectEndpoints({
    overrideExisting: module.hot?.status() === "apply",
    endpoints: (builder) => ({
      getSocialMedia: builder.query({
        query: () => ({
          url: "/admins/media",
          method: "GET",
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: [tags.socialMedia],
      }),
      updateSocialMedia: builder.mutation({
        query: (data) => ({
          url: "admins/media",
          method: "POST",
          body: data,
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: [tags.socialMedia],
      }),
    }),
  });

export const { useGetSocialMediaQuery, useUpdateSocialMediaMutation } =
  socialMediaApi;
