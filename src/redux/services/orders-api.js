"use client";

import tags from "@/constant/tags";
import objectToQueryString from "@/lib/utils/objectToQueryString";
import baseApi from "@/redux/base-api";

const themesApi = baseApi
  .enhanceEndpoints({
    addTagTypes: [tags.orders],
  })
  .injectEndpoints({
    overrideExisting: module.hot?.status() === "apply",
    endpoints: (builder) => ({
      getOrders: builder.query({
        query: (query) => ({
          url: `/admins/orders?${objectToQueryString(query)}`,
          method: "GET",
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: (result, error, page) =>
          result?.data
            ? [
                ...result.data.results.map(({ id }) => ({
                  type: tags.orders,
                  id,
                })),
                { type: tags.orders, id: "PARTIAL-LIST" },
              ]
            : [{ type: tags.orders, id: "PARTIAL-LIST" }],
      }),

      getOrder: builder.query({
        query: (id) => ({
          url: `/admins/orders/${id}`,
          method: "Get",
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        providesTags: [tags.orders],
      }),

      deleteOrder: builder.mutation({
        query: (id) => ({
          url: `/admins/orders/${id}`,
          method: "DELETE",
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        invalidatesTags: (result, error, id) => [
          { type: tags.orders, id },
          { type: tags.orders, id: "PARTIAL-LIST" },
        ],
      }),

      updateOrder: builder.mutation({
        query: ({ id, data }) => ({
          url: `/admins/orders/${id}`,
          method: "PATCH",
          body: data,
        }),
        transformResponse: (result) => result.data,
        transformErrorResponse: (result) => result.data,
        invalidatesTags: (result, error, id) => [
          { type: tags.orders, id },
          { type: tags.orders, id: "PARTIAL-LIST" },
        ],
      }),
    }),
  });

export const {
  useGetOrdersQuery,
  useGetOrderQuery,
  useDeleteOrderMutation,
  useUpdateOrderMutation,
} = themesApi;
