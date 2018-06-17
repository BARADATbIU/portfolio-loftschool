export default function asideOpen() {
  const blogAside = document.querySelector(".blog__aside");
  const blogTrigger = document.querySelector(".nav-blog__trigger");

  blogTrigger.addEventListener("click", navOpen);

  function navOpen(e) {
    e.preventDefault();
    blogAside.classList.toggle("is-open");
  }
}
