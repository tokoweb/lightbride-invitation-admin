"use client";

import tags from "@/constant/tags";
import objectToQueryString from "@/lib/utils/objectToQueryString";
import baseApi from "@/redux/base-api";

const faqApi = baseApi
  .enhanceEndpoints({
    addTagTypes: [tags.faq],
  })
  .injectEndpoints({
    overrideExisting: module.hot?.status() === "apply",
    endpoints: (builder) => ({
      getFaqs: builder.query({
        query: (query) => ({
          url: `/admins/faqs?${objectToQueryString(query)}`,
          method: "GET",
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: (result, error, page) =>
          result?.data
            ? [
                ...result.data.results.map(({ id }) => ({
                  type: tags.faq,
                  id,
                })),
                { type: tags.faq, id: "PARTIAL-LIST" },
              ]
            : [{ type: tags.faq, id: "PARTIAL-LIST" }],
      }),

      getFaq: builder.query({
        query: (id) => ({
          url: `/admins/faqs/${id}`,
          method: "GET",
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: [tags.faq],
      }),

      deleteFaq: builder.mutation({
        query: (id) => ({
          url: `/admins/faqs/${id}`,
          method: "DELETE",
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        invalidatesTags: (result, error, id) => [
          { type: tags.faq, id },
          { type: tags.faq, id: "PARTIAL-LIST" },
        ],
      }),

      updateFaq: builder.mutation({
        query: ({ id, data }) => ({
          url: `/admins/faqs/${id}`,
          method: "PATCH",
          body: data,
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        invalidatesTags: (result, error, id) => [
          { type: tags.faq, id },
          { type: tags.faq, id: "PARTIAL-LIST" },
        ],
      }),

      createFaq: builder.mutation({
        query: (data) => ({
          url: `/admins/faqs`,
          method: "POST",
          body: data,
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        invalidatesTags: (result, error, id) => [
          { type: tags.faq, id },
          { type: tags.faq, id: "PARTIAL-LIST" },
        ],
      }),
    }),
  });

export const {
  useGetFaqsQuery,
  useGetFaqQuery,
  useCreateFaqMutation,
  useDeleteFaqMutation,
  useUpdateFaqMutation,
} = faqApi;
