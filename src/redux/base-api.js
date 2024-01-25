import { redirect } from "next/navigation";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Mutex } from "async-mutex";
import Cookies from "js-cookie";

import { baseUrl } from "@/constant";

const mutex = new Mutex();
const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    const token = Cookies.get("token");
    headers.set("Accept", "application/json");
    if (token) headers.set("Authorization", `Bearer ${token}`);
    return headers;
  },
});

const getRefreshedToken = async () => {
  const refreshToken = Cookies.get("refresh-token");

  if (!refreshToken) throw "Cannot find refresh-token";

  const result = await fetch(`${baseUrl}/users/refresh-token`, {
    method: "POST",
    body: new URLSearchParams({ refreshToken }),
  }).then((res) => res.json());

  if (result.code === 200) {
    Cookies.set("token", result.data.token);
  } else {
    Cookies.remove("token");
    Cookies.remove("refresh-token");

    const pathname = window?.location?.pathname;

    redirect(`/login${pathname ? `?fallback=${pathname}` : ""}`);
  }
};

const baseApi = createApi({
  reducerPath: "base-api",
  baseQuery: async (args, api, extraOptions) => {
    await mutex.waitForUnlock();
    let result = await baseQuery(args, api, extraOptions);

    // refresh token and refetch if respon code 401
    if (result.error && result.error.status === 401) {
      if (!mutex.isLocked()) {
        const release = await mutex.acquire();
        try {
          await getRefreshedToken();

          result = await baseQuery(args, api, extraOptions);
        } finally {
          release();
        }
      } else {
        await mutex.waitForUnlock();

        result = await baseQuery(args, api, extraOptions);
      }
    }

    return result;
  },
  endpoints: () => ({}),
});

export default baseApi;
