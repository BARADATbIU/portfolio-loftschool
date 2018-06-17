export default function flip() {
  const btnFlip = document.querySelector("#flip");
  const btnFlipBack = document.querySelector("#flip-back");
  const introBox = document.querySelector(".intro__box");

  btnFlip.addEventListener("click", toggleClass);
  btnFlipBack.addEventListener("click", toggleClass);

  function toggleClass(e) {
    e.preventDefault();

    introBox.classList.toggle("is-show");
    btnFlip.classList.toggle("visually-hidden");
  }
}
