const { useEffect } = require("react");

const useFormDefaultValue = (data, setter) => {
  useEffect(() => {
    if (!data) return;

    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        setter(key, data[key] ?? "");
      }
    }
  }, [data]);
};

export default useFormDefaultValue;
