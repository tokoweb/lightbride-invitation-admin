"use client";

import tags from "@/constant/tags";
import baseApi from "@/redux/base-api";

const settingsApi = baseApi
  .enhanceEndpoints({
    addTagTypes: [tags.features, tags.music, tags.settings, tags.whatsapp],
  })
  .injectEndpoints({
    overrideExisting: module.hot?.status() === "apply",
    endpoints: (builder) => ({
      getSetting: builder.query({
        query: () => ({
          url: "/members/dashboard/invitation-settings",
          method: "GET",
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: [tags.settings],
      }),
      updateSetting: builder.mutation({
        query: (data) => ({
          url: "/members/dashboard/invitation-settings",
          method: "PATCH",
          body: data,
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: [tags.settings],
      }),

      getMusic: builder.query({
        query: () => ({
          url: "/members/dashboard/music",
          method: "GET",
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: [tags.music],
      }),
      updateMusic: builder.mutation({
        query: (data) => ({
          url: "/members/dashboard/music",
          method: "PATCH",
          body: data,
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: [tags.music],
      }),

      getGreeting: builder.query({
        query: () => ({
          url: "/members/dashboard/greeting-wa",
          method: "GET",
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: [tags.whatsapp],
      }),
      updateGreeting: builder.mutation({
        query: (data) => ({
          url: "/members/dashboard/greeting-wa",
          method: "PATCH",
          body: data,
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: [tags.whatsapp],
      }),

      getFeatures: builder.query({
        query: () => ({
          url: "/members/dashboard/rules",
          method: "GET",
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: [tags.features],
      }),
      updateFeatures: builder.mutation({
        query: (data) => ({
          url: "/members/dashboard/rules",
          method: "POST",
          body: data,
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: [tags.features],
      }),
    }),
  });

export const {
  useGetFeaturesQuery,
  useUpdateFeaturesMutation,
  useGetGreetingQuery,
  useUpdateGreetingMutation,
  useGetMusicQuery,
  useUpdateMusicMutation,
  useGetSettingQuery,
  useUpdateSettingMutation,
} = settingsApi;
