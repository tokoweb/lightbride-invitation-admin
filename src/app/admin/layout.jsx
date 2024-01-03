"use client";

import React, { Suspense, useEffect } from "react";

import { usePathname } from "next/navigation";

import { useDispatch } from "react-redux";

import Header from "@/components/header";
import SideNavbar from "@/components/side-navbar";
import useRefreshToken from "@/lib/hooks/services/auth/useRefreshToken";
import { setNavigation } from "@/redux/slices/navigation";

import Loading from "../loading";

const Layout = ({ children }) => {
  const pathName = usePathname();
  const dispatch = useDispatch();

  useRefreshToken();

  useEffect(() => {
    if (!pathName || pathName == "") return;

    dispatch(setNavigation(pathName));
  }, [pathName]);

  return (
    <>
      <main className="flex w-full bg-slate-200">
        <SideNavbar />
        <div className="flex max-h-screen max-w-full flex-1 flex-col">
          <Header />
          <Suspense fallback={<Loading />}>
            <div className="h-full w-full p-6 md:overflow-y-scroll">
              {children}
            </div>
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default Layout;
