export default function anchorActive() {
  const links = document.querySelectorAll(".nav-blog__link");

  for (const iter of links) {
    iter.addEventListener("click", e => {
      e.preventDefault();
      for (const iter of links) {
        iter.classList.remove("is-active");
      }
      e.target.classList.add("is-active");
    });
  }
}
