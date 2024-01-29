"use client";

import tags from "@/constant/tags";
import objectToQueryString from "@/lib/utils/objectToQueryString";
import baseApi from "@/redux/base-api";

const articlesApi = baseApi
  .enhanceEndpoints({
    addTagTypes: [tags.articles],
  })
  .injectEndpoints({
    overrideExisting: module.hot?.status() === "apply",
    endpoints: (builder) => ({
      getArticles: builder.query({
        query: (query) => ({
          url: `/admins/articles?${objectToQueryString(query)}`,
          method: "GET",
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: (result, error, page) =>
          result?.data
            ? [
                ...result.data.results.map(({ id }) => ({
                  type: tags.articles,
                  id,
                })),
                { type: tags.articles, id: "PARTIAL-LIST" },
              ]
            : [{ type: tags.articles, id: "PARTIAL-LIST" }],
      }),

      getArticle: builder.query({
        query: (id) => ({
          url: `/admins/articles/${id}`,
          method: "GET",
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: [tags.articles],
      }),

      deleteArticle: builder.mutation({
        query: (id) => ({
          url: `/admins/articles/${id}`,
          method: "DELETE",
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        invalidatesTags: (result, error, id) => [
          { type: tags.articles, id },
          { type: tags.articles, id: "PARTIAL-LIST" },
        ],
      }),

      updateArticle: builder.mutation({
        query: ({ id, data }) => ({
          url: `/admins/articles/${id}`,
          method: "PATCH",
          body: data,
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        invalidatesTags: (result, error, id) => [
          { type: tags.articles, id },
          { type: tags.articles, id: "PARTIAL-LIST" },
        ],
      }),

      createArticle: builder.mutation({
        query: (data) => ({
          url: `/admins/articles`,
          method: "POST",
          body: data,
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        invalidatesTags: (result, error, id) => [
          { type: tags.articles, id },
          { type: tags.articles, id: "PARTIAL-LIST" },
        ],
      }),
    }),
  });

export const {
  useGetArticlesQuery,
  useGetArticleQuery,
  useCreateArticleMutation,
  useDeleteArticleMutation,
  useUpdateArticleMutation,
} = articlesApi;
