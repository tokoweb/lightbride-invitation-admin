const spinVariant = (duration) => ({
  open: {
    rotateZ: 360 + "deg",
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
      duration: duration,
      ease: "linear",
    },
  },
  closed: {
    rotateZ: 0 + "deg",
  },
});

export default spinVariant;
