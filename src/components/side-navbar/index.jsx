"use client";
import logo from "@public/img/logo.svg";
import logoFull from "@public/img/logo-full.svg";

import Image from "next/image";

import { Divider } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";

import {
  getCurrentNavigation,
  getNavigationOpen,
  setNavigationOpen,
} from "@/redux/slices/navigation";

import Accordion from "./accordion";
import Item from "./items";
import itemsList from "./items/itemsList";

const GetItem = ({ item }) => {
  const navigation = useSelector(getCurrentNavigation);
  const open = useSelector(getNavigationOpen);

  if (item.children) {
    return <Accordion item={item} />;
  } else if (item.icon) {
    return (
      <Item
        icon={item.icon}
        href={item.href}
        label={item.label}
        className={
          navigation == item.href
            ? "bg-primary text-white hover:bg-primary"
            : "group-hover:bg-slate-100 group-hover:text-primary"
        }
      />
    );
  } else {
    return (
      <Divider
        className="mt-4 w-full overflow-hidden text-slate-400 before:bg-slate-400 after:bg-slate-400"
        textAlign={open ? "left" : "center"}
      >
        {item.label}
      </Divider>
    );
  }
};

const SideNavbar = () => {
  const open = useSelector(getNavigationOpen);
  const dispatch = useDispatch();

  return (
    <nav
      className={`fixed top-0 z-10 flex h-screen flex-col items-center bg-white transition-all duration-300 ease-in-out lg:relative lg:left-0 ${
        open ? "left-0 w-72" : "-left-20 w-20"
      }`}
    >
      <div className="flex w-full justify-between p-4">
        <Image
          className="m-auto"
          src={logo}
          alt="Logo"
          width={40}
          height={40}
        />
        <button
          className="relative h-10 w-10 bg-white text-gray-500 focus:outline-none lg:hidden"
          onClick={() => {
            dispatch(setNavigationOpen(!open));
          }}
        >
          <div className="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2 -translate-y-1/2 transform">
            <span
              className={`absolute block h-0.5 w-5 transform bg-current transition duration-300 ease-in-out ${
                open ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-5 transform bg-current transition duration-300 ease-in-out ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute block h-0.5 w-5 transform bg-current transition duration-300 ease-in-out ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </div>
        </button>
      </div>
      <div
        className={`flex h-full w-full flex-col items-start justify-start gap-1 overflow-y-scroll p-2 md:overflow-visible ${
          open ? "px-4" : "px-2"
        }`}
      >
        {itemsList.map((item, i) => (
          <GetItem key={`item-${i}`} item={item} />
        ))}
      </div>
    </nav>
  );
};

export default SideNavbar;
