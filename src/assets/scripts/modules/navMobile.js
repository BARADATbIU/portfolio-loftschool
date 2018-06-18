export default function navMobile() {
  const navTrigger = document.querySelector(".nav-trigger");
  const trigger = document.querySelector(".nav-trigger__link");
  const navHide = document.querySelector(".nav-hide");
  const navItems = navHide.querySelectorAll(".nav-mobile__item");

  trigger.addEventListener("click", toggleClass);

  for (const iterator of navItems) {
    iterator.addEventListener("click", toggleClass);
  }

  function toggleClass() {
    navTrigger.classList.toggle("is-active");
    navHide.classList.toggle("is-active");
  }
}
