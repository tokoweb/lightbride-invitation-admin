"use client";

import SideNavbar from "@/components/side-navbar";
import { usePathname } from "next/navigation";
import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNavigation } from "@/redux/slices/navigation";
import Header from "@/components/header";
import Loading from "../loading";

const Layout = ({ children }) => {
  const pathName = usePathname();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!pathName || pathName == "") return;

    dispatch(setNavigation(pathName));
  }, [pathName]);

  return (
    <>
      <main className="flex w-full">
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
