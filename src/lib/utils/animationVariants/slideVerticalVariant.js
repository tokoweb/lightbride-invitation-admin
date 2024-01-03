export const slideVerticalVariants = (offset = 75, opacity = 0) => {
  return {
    closed: {
      opacity: opacity,
      y: offset,
    },
    open: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: opacity,
      y: offset * -1,
    },
  };
};
