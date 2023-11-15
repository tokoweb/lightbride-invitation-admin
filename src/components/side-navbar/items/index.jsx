import { memo } from "react";
import { Button } from "@mui/material";

import Link from "next/link";

import { cn } from "@/lib/utils";
import PropTypes from "prop-types";

import { useSelector } from "react-redux";
import {
  getNavigationOpen,
  getCurrentNavigation,
} from "@/redux/slices/navigation";

const Item = ({ label, href, icon, className }) => {
  const navigation = useSelector(getCurrentNavigation);
  const open = useSelector(getNavigationOpen);

  return (
    <Link href={href} className="group relative w-full">
      <Button
        className={cn(
          `z-10 flex w-full items-center gap-2 rounded p-3 px-4 text-base font-normal capitalize text-gray-900 transition-all ${
            open ? "justify-start pl-5" : "justify-center"
          }`,
          className,
        )}
      >
        {icon && <div className="text-2xl">{icon}</div>} {open && label}
      </Button>
      {!open && (
        <div
          className={`absolute top-0 hidden w-64 rounded p-3 pl-20 transition-all duration-200 group-hover:block group-hover:text-primary ${
            navigation == href ? " bg-primary !text-white" : "bg-slate-100"
          }`}
        >
          {label}
        </div>
      )}
    </Link>
  );
};

Item.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  className: PropTypes.string,
};

const MemoizeItem = memo(Item);

export default MemoizeItem;
