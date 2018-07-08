import flip from "./modules/flip";
import moveParallax from "./modules/moveParallax";
import isMobileDevice from "./modules/isMobileDevice";
import preloader from "./modules/preloader";
import { login } from "./modules/login";

login("#formAuth");
preloader();
flip();

if (!isMobileDevice()) moveParallax();
