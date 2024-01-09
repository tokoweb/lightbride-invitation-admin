import { useEffect } from "react";

const useClickAway = (ref, onClickAway) => {
  const handleClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      onClickAway();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, onClickAway]);
};

export default useClickAway;
