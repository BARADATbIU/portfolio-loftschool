export default function blur() {
  const wrapper = document.querySelector(".contact__form-wrapper");
  const form = document.querySelector(".contact__form");

  return {
    set: function() {
      const posLeft = -wrapper.offsetLeft;
      const posTop = -wrapper.offsetTop;
      const blurCss = form.style;

      blurCss.backgroundPosition = `${posLeft}px ${posTop}px`;
    }
  };
}
