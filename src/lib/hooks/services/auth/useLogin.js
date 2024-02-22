"use client";

import { useCallback, useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import Cookies from "js-cookie";
import { enqueueSnackbar } from "notistack";

import { useLoginMutation } from "@/redux/services/auth-api";

const useLogin = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [login, { isLoading, isSuccess }] = useLoginMutation();
  const [errMessage, setErrMessage] = useState("");

  const loginHandler = useCallback(
    async (payload, { snackbar = true, redirect = true } = {}) => {
      setErrMessage("");

      try {
        const result = await login(payload).unwrap();

        if (!result.role === "admin") throw new Error("You don't have access");

        Cookies.set("token", result.token, { sameSite: "Strict" });
        Cookies.set("refresh-token", result.refresh_token, {
          sameSite: "Strict",
        });

        if (snackbar)
          enqueueSnackbar("Login berhasil!", {
            variant: "success",
          });

        if (!redirect) return;

        if (searchParams.get("fallback")) {
          router.push(searchParams.get("fallback"));
        } else {
          router.push("/user/dashboard");
        }
      } catch (err) {
        setErrMessage(err.message);
      }
    },
    [],
  );

  return [loginHandler, { isLoading, errMessage, isSuccess }];
};

export default useLogin;
