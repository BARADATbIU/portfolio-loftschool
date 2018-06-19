import "./modules/slider";
import anchorScroll from "./modules/anchorScroll";
import navMobile from "./modules/navMobile";
import setMargin from "./modules/setMargin";
import blur from "./modules/blur";

setMargin(".contact__content");
navMobile();
anchorScroll();

blur().set();

window.addEventListener("resize", () => {
  setMargin(".contact__content");
  blur().set();
});
