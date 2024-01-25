"use client";

import tags from "@/constant/tags";
import objectToQueryString from "@/lib/utils/objectToQueryString";
import baseApi from "@/redux/base-api";

const themesApi = baseApi
  .enhanceEndpoints({
    addTagTypes: [tags.payments],
  })
  .injectEndpoints({
    overrideExisting: module.hot?.status() === "apply",
    endpoints: (builder) => ({
      getPayments: builder.query({
        query: (query) => ({
          url: `/admins/payments?${objectToQueryString(query)}`,
          method: "GET",
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: (result, error, page) =>
          result?.data
            ? [
                ...result.data.map(({ id }) => ({
                  type: tags.payments,
                  id,
                })),
                { type: tags.payments, id: "PARTIAL-LIST" },
              ]
            : [{ type: tags.payments, id: "PARTIAL-LIST" }],
      }),

      deletPayment: builder.mutation({
        query: (id) => ({
          url: `/admins/payments/${id}`,
          method: "DELETE",
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        invalidatesTags: (result, error, id) => [
          { type: tags.payments, id },
          { type: tags.payments, id: "PARTIAL-LIST" },
        ],
      }),
    }),
  });

export const { useGetPaymentsQuery, useDeletPaymentMutation } = themesApi;
