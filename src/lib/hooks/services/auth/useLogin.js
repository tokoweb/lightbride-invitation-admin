"use client";

import { useCallback, useState } from "react";

import { useRouter } from "next/navigation";

import Cookies from "js-cookie";
import { enqueueSnackbar } from "notistack";

import { useLoginMutation } from "@/redux/services/auth-api";

const useLogin = () => {
  const router = useRouter();
  const [login, { isLoading, isSuccess }] = useLoginMutation();
  const [errMessage, setErrMessage] = useState("");

  const loginHandler = useCallback(
    async (payload, { snackbar = true, redirect = true } = {}) => {
      setErrMessage("");

      try {
        const result = await login(payload).unwrap();

        if (result.role === "member") {
          enqueueSnackbar("Akun anda tidak punya akses", {
            variant: "error",
          });

          return;
        }

        Cookies.set("token", result.token, { sameSite: "Strict" });
        Cookies.set("refresh-token", result.refresh_token, {
          sameSite: "Strict",
        });

        if (snackbar)
          enqueueSnackbar("Login berhasil!", {
            variant: "success",
          });

        if (redirect) router.push("/admin/dashboard");
      } catch (err) {
        console.log(err);
        setErrMessage(err.message);
      }
    },
    [],
  );

  return [loginHandler, { isLoading, errMessage, isSuccess }];
};

export default useLogin;
