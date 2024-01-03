export const slideHorizontalVariants = (offset = -75, opacity = 0) => ({
  closed: {
    opacity: opacity,
    x: offset,
  },
  open: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: opacity,
    x: offset * -1,
  },
});
