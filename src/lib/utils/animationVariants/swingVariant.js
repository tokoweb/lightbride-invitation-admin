const swingVariant = (end, start) => ({
  open: {
    rotateZ: end + "deg",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      repeatDelay: 0,
      duration: 4,
      ease: "easeInOut",
    },
  },
  closed: {
    rotateZ: start + "deg",
  },
});

export default swingVariant;
