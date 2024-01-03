/**
 *
 * @param element string HTML querySelector or HTML element
 */
const scrollToElement = (element) => {
  if (typeof element === "string") element = document.querySelector(element);

  if (!element) return;

  const y = element.getBoundingClientRect().top + window.scrollY;
  window.scroll({
    top: y,
    behavior: "smooth",
  });
};

export default scrollToElement;
