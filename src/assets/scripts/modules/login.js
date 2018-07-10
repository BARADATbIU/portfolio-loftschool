import renderPopup from "./renderPopup";
import validateForm from "./validateForm";

export function login(formSelector) {
  const form = document.querySelector(formSelector);
  form.setAttribute("novalidate", true);

  form.addEventListener("submit", submitListener);

  function submitListener(e) {
    e.preventDefault();

    if (!validateForm(form)) return;

    ajaxLogin(form);
  }
}

function ajaxLogin(form) {
  const url = form.getAttribute("action");
  const type = form.getAttribute("method");
  const formData = new FormData(form);
  const sadSmile = "┌∩┐(◕_◕)┌∩┐";

  fetch(url, { method: type, body: formData })
    .then(checkStatus)
    .then(response => response.json())
    .then(data => {
      const ttl = Math.floor(Date.now() / 1000 + data.ttl);
      localStorage.setItem("token", data.token);
      localStorage.setItem("ttl", ttl);
    })
    .then(() => {
      window.location.href = "/admin";
    })
    .catch(error => {
      renderPopup(sadSmile, error);
    });

  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
}
