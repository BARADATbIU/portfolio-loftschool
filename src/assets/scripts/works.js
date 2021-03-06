import "./modules/slider";
import anchorScroll from "./modules/anchorScroll";
import navMobile from "./modules/navMobile";
import setMargin from "./modules/setMargin";
import blur from "./modules/blur";
import scrollParallax from "./modules/scrollParallax";
import sendForm from "./modules/sendForm";
import preloader from "./modules/preloader";

sendForm("#formContact");
preloader();
setMargin(".contact__content");
navMobile();
anchorScroll();

blur().set();

window.addEventListener("resize", () => {
  setMargin(".contact__content");
  blur().set();
});

window.addEventListener("scroll", () => {
  const wScroll = window.pageYOffset;

  scrollParallax().init(wScroll);
});
