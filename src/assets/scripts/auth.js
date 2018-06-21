import flip from "./modules/flip";
import moveParallax from "./modules/moveParallax";
import isMobileDevice from "./modules/isMobileDevice";

if (!isMobileDevice()) moveParallax();

flip();
