import { useCallback } from "react";

import { useRouter } from "next/navigation";

import Cookies from "js-cookie";

import { useLogoutMutation } from "@/redux/services/auth-api";

const useLogout = () => {
  const router = useRouter();
  const [logout, { isLoading }] = useLogoutMutation();

  const logoutHandlder = useCallback(async () => {
    try {
      await logout().unwrap();

      Cookies.remove("token");
      Cookies.remove("refresh-token");

      router.push("/login");
    } catch (err) {
      console.log(err);
    }
  }, []);

  return [logoutHandlder, { isLoading }];
};
export default useLogout;
