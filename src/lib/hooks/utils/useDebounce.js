import { useEffect, useState } from "react";

const useDebounce = (initialValue, delay) => {
  const [value, setValue] = useState(initialValue);
  const [debouncedValue, setDebouncedValue] = useState(initialValue);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  const handleSetValue = (newValue) => {
    setValue(newValue);
  };

  return [debouncedValue, handleSetValue];
};

export default useDebounce;
