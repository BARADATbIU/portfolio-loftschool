export default function validateForm(form) {
  form.addEventListener("blur", blurListener, true);

  const fields = form.elements;

  let hasErrors;

  for (const field of fields) {
    const error = hasError(field);
    if (error) {
      showError(field, error);
      if (!hasErrors) {
        hasErrors = field;
      }
    }
  }

  if (hasErrors) {
    hasErrors.focus();
  } else {
    return true;
  }

  function hasError(field) {
    if (
      field.type === "reset" ||
      field.type === "submit" ||
      field.type === "button"
    )
      return;

    const validity = field.validity;

    if (validity.valid) return;

    if (validity.valueMissing) return "Вы не заполнили поле";

    if (validity.tooShort)
      return `Минимум ${field.getAttribute("minLength")} символов.`;
  }

  function showError(field, error) {
    field.classList.add("error");

    if (field.type === "radio" && field.name) {
      let group = document.getElementsByName(field.name);

      if (group.length > 0) {
        for (let i = 0; i < group.length; i++) {
          group[i].classList.add("error");
        }
        field = group[group.length - 1];
      }
    }

    // Get field id or name
    const id = field.id || field.name;
    if (!id) return;

    // Check if error message field already exists
    // If not, create one
    let message = field.form.querySelector(".error-message#error-for-" + id);
    if (!message) {
      message = document.createElement("div");
      message.className = "error-message";
      message.id = "error-for-" + id;

      // If the field is a radio button or checkbox, insert error after the label
      let label;
      if (field.type === "radio" || field.type === "checkbox") {
        label =
          field.form.querySelector('label[for="' + id + '"]') ||
          field.parentNode;
        if (label) {
          label.parentNode.insertBefore(message, label.nextSibling);
        }
      }

      if (!label) {
        field.parentNode.insertBefore(message, field.nextSibling);
      }
    }

    message.innerHTML = error;

    message.style.display = "block";
    message.style.visibility = "visible";
  }

  function removeError(field) {
    field.classList.remove("error");

    // If the field is a radio button and part of a group, remove error from all and get the last item in the group
    if (field.type === "radio" && field.name) {
      let group = document.getElementsByName(field.name);

      if (group.length > 0) {
        for (let i = 0; i < group.length; i++) {
          group[i].classList.remove("error");
        }
        field = group[group.length - 1];
      }
    }

    const id = field.id || field.name;
    if (!id) return;

    let message = field.form.querySelector(
      ".error-message#error-for-" + id + ""
    );
    if (!message) return;

    message.innerHTML = "";
    message.style.display = "none";
    message.style.visibility = "hidden";
  }

  function blurListener(e) {
    const error = hasError(e.target);

    if (error) {
      showError(e.target, error);
      return;
    }

    removeError(e.target);
  }
}
