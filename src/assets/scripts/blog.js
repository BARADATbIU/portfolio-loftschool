import "./modules/posts";
import "./modules/menu";
import asideOpen from "./modules/asideOpen";
import anchorScroll from "./modules/anchorScroll";
import navMobile from "./modules/navMobile";
import setMargin from "./modules/setMargin";
import scrollParallax from "./modules/scrollParallax";
import anchorActive from "./modules/anchorActive";
import preloader from "./modules/preloader";

preloader();
setMargin(".blog");
navMobile();
asideOpen();
anchorActive();

window.addEventListener("load", anchorScroll);

window.addEventListener("resize", () => {
  setMargin(".blog");
});

window.addEventListener("scroll", () => {
  const wScroll = window.pageYOffset;

  scrollParallax().init(wScroll);
});
