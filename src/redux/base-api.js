import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

import { baseUrl } from "@/constant";

const baseApi = createApi({
  reducerPath: "base-api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const token = Cookies.get("token");
      headers.set("Accept", "application/json");
      headers.set("Content-Type", "application/x-www-form-urlencoded");
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: () => ({}),
});

export default baseApi;
