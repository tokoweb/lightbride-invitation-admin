"use client";
import Link from "next/link";

import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowDown } from "react-icons/io";

import {
  getCurrentNavigation,
  getExpanded,
  getNavigationOpen,
  setExpanded,
} from "@/redux/slices/navigation";

import Item from "./items";

const Accordion = ({ item }) => {
  const open = useSelector(getNavigationOpen);
  const navigation = useSelector(getCurrentNavigation);
  const expanded = useSelector(getExpanded);

  const isActive = item.children.some((e) => e.href === navigation);

  const dispatch = useDispatch();

  return (
    <MuiAccordion
      elevation={1}
      expanded={expanded === item.label && open}
      onChange={() => {
        expanded === item.label
          ? dispatch(setExpanded(""))
          : dispatch(setExpanded(item.label));
      }}
      className={`!m-0 w-full rounded-md border-0 p-0.5 shadow-none before:hidden hover:text-primary ${
        (expanded === item.label && open) || isActive
          ? "bg-slate-100 text-primary"
          : "hover:bg-slate-100"
      }`}
    >
      <AccordionSummary
        expandIcon={
          open && (
            <div className="text-xl hover:!text-primary">
              <IoIosArrowDown />
            </div>
          )
        }
        className="group relative"
      >
        <div className={`z-10 flex items-center gap-3`}>
          <div className={`text-2xl ${open ? "" : "justify-center"}`}>
            {item.icon}
          </div>
          {open && item.label}
        </div>

        {!open && (
          <>
            <div className="absolute -top-0.5 hidden h-[52px] w-64 rounded-md rounded-br-none bg-slate-100 p-3 pl-[4.5rem] group-hover:block">
              {item.label}
            </div>
            <div className="absolute left-[70px] top-[50px] z-10 hidden w-[202px] flex-col gap-1 rounded-b-md bg-white p-2 drop-shadow-xl group-hover:flex">
              {item.children.map((e, i) => {
                if (e.href) {
                  return (
                    <Link href={e.href} key={`hover_${i}`}>
                      <Button className="w-full justify-start rounded-md p-3 capitalize text-gray-500 hover:text-primary">
                        {e.label}
                      </Button>
                    </Link>
                  );
                }
              })}
            </div>
          </>
        )}
      </AccordionSummary>
      <AccordionDetails className="flex w-full flex-col gap-1">
        {item.children.map((e, i) => {
          if (e.href) {
            return (
              <Item
                key={`${item.label}_${i + 1}`}
                href={e.href}
                label={e.label}
                className={
                  navigation == e.href
                    ? "bg-primary text-white hover:bg-primary-dark"
                    : "hover:bg-slate-600/10 hover:text-primary"
                }
              />
            );
          } else {
            return (
              <Divider
                key={`${item.label}_${i + 1}`}
                className="w-full text-sm text-slate-400 before:bg-slate-400 after:bg-slate-400"
                textAlign="left"
              >
                {e.label}
              </Divider>
            );
          }
        })}
      </AccordionDetails>
    </MuiAccordion>
  );
};

export default Accordion;
