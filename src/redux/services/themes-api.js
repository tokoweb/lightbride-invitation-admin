"use client";

import tags from "@/constant/tags";
import objectToQueryString from "@/lib/utils/objectToQueryString";
import baseApi from "@/redux/base-api";

const themesApi = baseApi
  .enhanceEndpoints({
    addTagTypes: [tags.themes],
  })
  .injectEndpoints({
    overrideExisting: module.hot?.status() === "apply",
    endpoints: (builder) => ({
      getThemes: builder.query({
        query: (query) => ({
          url: `/admins/themes?${objectToQueryString(query)}`,
          method: "GET",
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: (result, error, page) =>
          result?.data
            ? [
                ...result.data.results.map(({ id }) => ({
                  type: tags.themes,
                  id,
                })),
                { type: tags.themes, id: "PARTIAL-LIST" },
              ]
            : [{ type: tags.themes, id: "PARTIAL-LIST" }],
      }),

      getTheme: builder.query({
        query: (id) => ({
          url: `/admins/themes/${id}`,
          method: "GET",
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: [tags.themes],
      }),

      deleteTheme: builder.mutation({
        query: (id) => ({
          url: `/admins/themes/${id}`,
          method: "DELETE",
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        invalidatesTags: (result, error, id) => [
          { type: tags.themes, id },
          { type: tags.themes, id: "PARTIAL-LIST" },
        ],
      }),

      updateTheme: builder.mutation({
        query: ({ id, data }) => ({
          url: `/admins/themes/${id}`,
          method: "PATCH",
          body: data,
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        invalidatesTags: (result, error, id) => [
          { type: tags.themes, id },
          { type: tags.themes, id: "PARTIAL-LIST" },
        ],
      }),

      createTheme: builder.mutation({
        query: (data) => ({
          url: `/admins/themes`,
          method: "POST",
          body: data,
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        invalidatesTags: (result, error, id) => [
          { type: tags.themes, id },
          { type: tags.themes, id: "PARTIAL-LIST" },
        ],
      }),
    }),
  });

export const {
  useGetThemeQuery,
  useGetThemesQuery,
  useCreateThemeMutation,
  useDeleteThemeMutation,
  useUpdateThemeMutation,
} = themesApi;
