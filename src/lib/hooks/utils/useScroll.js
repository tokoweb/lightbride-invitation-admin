"use client";

import { useEffect, useState } from "react";

const useScroll = () => {
  const [scrollY, setYscroll] = useState();

  useEffect(() => {
    const scrollHandler = (e) => {
      setYscroll(window.scrollY);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return { scrollY };
};
export default useScroll;
