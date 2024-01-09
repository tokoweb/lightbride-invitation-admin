"use client";

import tags from "@/constant/tags";
import objectToQueryString from "@/lib/utils/objectToQueryString";
import baseApi from "@/redux/base-api";

const themeCategoriesApi = baseApi
  .enhanceEndpoints({
    addTagTypes: [tags.categories],
  })
  .injectEndpoints({
    overrideExisting: module.hot?.status() === "apply",
    endpoints: (builder) => ({
      getCategories: builder.query({
        query: (query) => ({
          url: `/admins/theme-categories?${objectToQueryString(query)}`,
          method: "GET",
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: (result, error, page) =>
          result?.data
            ? [
                ...result.data.results.map(({ id }) => ({
                  type: tags.categories,
                  id,
                })),
                { type: tags.categories, id: "PARTIAL-LIST" },
              ]
            : [{ type: tags.categories, id: "PARTIAL-LIST" }],
      }),

      getCategory: builder.query({
        query: (id) => ({
          url: `/admins/theme-categories/${id}`,
          method: "GET",
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: [tags.categories],
      }),

      deleteCategory: builder.mutation({
        query: (id) => ({
          url: `/admins/theme-categories/${id}`,
          method: "DELETE",
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        invalidatesTags: (result, error, id) => [
          { type: tags.categories, id },
          { type: tags.categories, id: "PARTIAL-LIST" },
        ],
      }),

      updateCategory: builder.mutation({
        query: ({ id, data }) => ({
          url: `/admins/theme-categories/${id}`,
          method: "PATCH",
          body: data,
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        invalidatesTags: (result, error, id) => [
          { type: tags.categories, id },
          { type: tags.categories, id: "PARTIAL-LIST" },
        ],
      }),

      createCategory: builder.mutation({
        query: (data) => ({
          url: `/admins/theme-categories`,
          method: "POST",
          body: data,
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        invalidatesTags: (result, error, id) => [
          { type: tags.categories, id },
          { type: tags.categories, id: "PARTIAL-LIST" },
        ],
      }),
    }),
  });

export const {
  useGetCategoriesQuery,
  useGetCategoryQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
} = themeCategoriesApi;
