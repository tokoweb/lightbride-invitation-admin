"use client";

import tags from "@/constant/tags";
import baseApi from "@/redux/base-api";

const settingApi = baseApi
  .enhanceEndpoints({
    addTagTypes: [tags.setting],
  })
  .injectEndpoints({
    overrideExisting: module.hot?.status() === "apply",
    endpoints: (builder) => ({
      getSetting: builder.query({
        query: () => ({
          url: "/admins/settings",
          method: "GET",
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: [tags.setting],
      }),
      updateSetting: builder.mutation({
        query: (data) => ({
          url: "/admins/settings",
          method: "POST",
          body: data,
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: [tags.setting],
      }),
    }),
  });

export const { useGetSettingQuery, useUpdateSettingMutation } = settingApi;
