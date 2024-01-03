import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export const getIframeSrc = (src) => {
  const match = src.match(/src=["']([^"']+)["']/);

  if (match) {
    return match[1];
  }

  return null;
};
