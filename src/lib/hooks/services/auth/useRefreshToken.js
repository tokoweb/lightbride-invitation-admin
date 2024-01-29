"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import Cookies from "js-cookie";

import isValidToken from "@lib/utils/isValidToken";
import { useRefreshMutation } from "@/redux/services/auth-api";

const useRefreshToken = () => {
  const router = useRouter();
  const [refresh] = useRefreshMutation();

  const fetchData = async () => {
    const token = Cookies.get("token");
    const refreshToken = Cookies.get("refresh-token");

    if (!isValidToken(token) && refreshToken) {
      try {
        const response = await refresh({ refreshToken }).unwrap();

        Cookies.set("token", response.token, { sameSite: "Strict" });
      } catch (err) {
        console.error(err);

        Cookies.remove("token");
        Cookies.remove("refresh-token");

        router.push("/login");
      }
    }
  };

  return fetchData;
};

export default useRefreshToken;
