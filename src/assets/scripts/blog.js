import asideOpen from "./modules/asideOpen";
import anchorScroll from "./modules/anchorScroll";
import navMobile from "./modules/navMobile";
import setMargin from "./modules/setMargin";

setMargin(".blog");
navMobile();
asideOpen();
anchorScroll();

window.addEventListener("resize", () => {
  setMargin(".blog");
});
