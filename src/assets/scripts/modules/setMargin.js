export default function setMargin(selector) {
  const footer = document.querySelector(".footer");
  const elem = document.querySelector(selector);

  const footerHeight = getComputedStyle(footer).height;

  elem.style.marginBottom = footerHeight;
}
