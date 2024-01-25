"use client";

import objectToQueryString from "@/lib/utils/objectToQueryString";
import baseApi from "@/redux/base-api";

const dashboardApi = baseApi.injectEndpoints({
  overrideExisting: module.hot?.status() === "apply",
  endpoints: (builder) => ({
    getDashboard: builder.query({
      query: (quoery) => ({
        url: `/admins/dashboard?${objectToQueryString(quoery)}`,
        method: "GET",
      }),
      transformResponse: (result) => result.data,
      transformErrorResponse: (result) => result.data,
    }),
  }),
});

export const { useGetDashboardQuery } = dashboardApi;
