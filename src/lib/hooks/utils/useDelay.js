import { useEffect,useState } from "react";

const useDelay = (delay, callback) => {
  const [isDelayed, setIsDelayed] = useState(false);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setIsDelayed(true);
      if (callback && typeof callback === "function") {
        callback();
      }
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, [delay, callback]);

  return isDelayed;
};

export default useDelay;
