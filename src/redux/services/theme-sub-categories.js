"use client";

import tags from "@/constant/tags";
import objectToQueryString from "@/lib/utils/objectToQueryString";
import baseApi from "@/redux/base-api";

const themeSubCategoriesApi = baseApi
  .enhanceEndpoints({
    addTagTypes: [tags.subCategories],
  })
  .injectEndpoints({
    overrideExisting: module.hot?.status() === "apply",
    endpoints: (builder) => ({
      getSubCategories: builder.query({
        query: (query) => ({
          url: `/admins/theme-sub-categories?${objectToQueryString(query)}`,
          method: "GET",
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: (result, error, page) =>
          result?.data
            ? [
                ...result.data.results.map(({ id }) => ({
                  type: tags.subCategories,
                  id,
                })),
                { type: tags.subCategories, id: "PARTIAL-LIST" },
              ]
            : [{ type: tags.subCategories, id: "PARTIAL-LIST" }],
      }),

      getSubCategory: builder.query({
        query: (id) => ({
          url: `/admins/theme-sub-categories/${id}`,
          method: "GET",
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: [tags.subCategories],
      }),

      deleteSubCategory: builder.mutation({
        query: (id) => ({
          url: `/admins/theme-sub-categories/${id}`,
          method: "DELETE",
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        invalidatesTags: (result, error, id) => [
          { type: tags.subCategories, id },
          { type: tags.subCategories, id: "PARTIAL-LIST" },
        ],
      }),

      updateSubCategory: builder.mutation({
        query: ({ id, data }) => ({
          url: `/admins/theme-sub-categories/${id}`,
          method: "PATCH",
          body: data,
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        invalidatesTags: (result, error, id) => [
          { type: tags.subCategories, id },
          { type: tags.subCategories, id: "PARTIAL-LIST" },
        ],
      }),

      createSubCategory: builder.mutation({
        query: (data) => ({
          url: `/admins/theme-sub-categories`,
          method: "POST",
          body: data,
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        invalidatesTags: (result, error, id) => [
          { type: tags.subCategories, id },
          { type: tags.subCategories, id: "PARTIAL-LIST" },
        ],
      }),
    }),
  });

export const {
  useGetSubCategoriesQuery,
  useGetSubCategoryQuery,
  useCreateSubCategoryMutation,
  useDeleteSubCategoryMutation,
  useUpdateSubCategoryMutation,
} = themeSubCategoriesApi;
