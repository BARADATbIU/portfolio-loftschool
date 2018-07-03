import ajaxForm from "./ajaxForm";
import validateForm from "./validateForm";

export default function sendForm(formSelector) {
  const form = document.querySelector(formSelector);
  form.setAttribute("novalidate", true);

  form.addEventListener("submit", submitListener);

  function submitListener(e) {
    e.preventDefault();

    if (!validateForm(form)) return;

    ajaxForm(form);
  }
}
