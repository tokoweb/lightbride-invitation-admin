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
    } catch (err) {
      console.log(err);
    }

    Cookies.remove("token");
    Cookies.remove("refresh-token");

    router.push("/login");
  }, []);

  return [logoutHandlder, { isLoading }];
};
export default useLogout;
