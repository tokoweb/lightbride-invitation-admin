"use client";

import objectToQueryString from "@/lib/utils/objectToQueryString";
import baseApi from "@/redux/base-api";

const usersApi = baseApi.injectEndpoints({
  overrideExisting: module.hot?.status() === "apply",
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (query) => ({
        url: `/admins/users?${objectToQueryString(query)}`,
        method: "GET",
      }),
      transformResponse: (result) => result.data,
      transformErrorResponse: (result) => result.data,
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
