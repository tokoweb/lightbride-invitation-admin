"use client";
import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Button,
} from "@mui/material";
import Item from "./items";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentNavigation,
  getExpanded,
  getNavigationOpen,
  setExpanded,
} from "@/redux/slices/navigation";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const Accordion = ({ item }) => {
  const open = useSelector(getNavigationOpen);
  const navigation = useSelector(getCurrentNavigation);
  const expanded = useSelector(getExpanded);

  const isActive = item.children.some((e) => e.href === navigation);

  const dispatch = useDispatch();

  return (
    <MuiAccordion
      expanded={expanded === item.label && open}
      onChange={() => {
        expanded === item.label
          ? dispatch(setExpanded(""))
          : dispatch(setExpanded(item.label));
      }}
      className={`!m-0 w-full rounded p-0.5 shadow-none before:hidden hover:text-primary ${
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
            <div className="absolute -top-0.5 hidden h-[52px] w-64 rounded rounded-br-none bg-slate-100 p-3 pl-16   group-hover:block">
              {item.label}
            </div>
            <div className="absolute left-[70px] top-[50px] z-10 hidden w-[202px] rounded rounded-t-none bg-white drop-shadow-xl group-hover:block">
              {item.children.map((e, i) => {
                if (e.href) {
                  return (
                    <Link href={e.href} key={`hover_${i}`}>
                      <Button className="w-full justify-start rounded-none p-3 capitalize text-gray-500 hover:text-primary">
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
                    ? "bg-indigo-500 text-white hover:bg-indigo-500"
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
