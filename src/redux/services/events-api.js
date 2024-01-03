"use client";

import tags from "@/constant/tags";
import baseApi from "@/redux/base-api";

const eventsApi = baseApi
  .enhanceEndpoints({
    addTagTypes: [tags.events],
  })
  .injectEndpoints({
    overrideExisting: module.hot?.status() === "apply",
    endpoints: (builder) => ({
      getEvents: builder.query({
        query: () => ({
          url: "/members/dashboard/events",
          method: "GET",
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: [tags.events],
      }),
      updateEvents: builder.mutation({
        query: (data) => ({
          url: "/members/dashboard/events",
          method: "PATCH",
          body: data,
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: [tags.events],
      }),

      getMap: builder.query({
        query: () => ({
          url: "/members/dashboard/map",
          method: "GET",
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: [tags.map],
      }),
      updateMap: builder.mutation({
        query: (data) => ({
          url: "/members/dashboard/map",
          method: "PATCH",
          body: data,
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: [tags.map],
      }),
    }),
  });

export const {
  useGetEventsQuery,
  useUpdateEventsMutation,
  useGetMapQuery,
  useUpdateMapMutation,
} = eventsApi;
