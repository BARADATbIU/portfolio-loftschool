export default function scrollParallax() {
  const bg = document.querySelector(".header__bg");
  const title = document.querySelector(".header__title-svg");
  const user = document.querySelector(".user--header");

  return {
    move: function(block, windowScroll, strafeAmount) {
      let strafe = windowScroll / -strafeAmount + "%";
      let transformString = `translate3d(0, ${strafe}, 0)`;

      let style = block.style;

      style.transform = transformString;
      style.webkitTransform = transformString;
    },
    init: function(wScroll) {
      this.move(bg, wScroll, 45);
      this.move(title, wScroll, -20);
      this.move(user, wScroll, 3);
    }
  };
}
