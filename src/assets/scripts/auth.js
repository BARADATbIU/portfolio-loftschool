import flip from "./modules/flip";
import moveParallax from "./modules/moveParallax";
import isMobileDevice from "./modules/isMobileDevice";
import preloader from "./modules/preloader";

preloader();
flip();

if (!isMobileDevice()) moveParallax();
