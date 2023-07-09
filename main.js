import "core-js/stable";
import "regenerator-runtime/runtime";

// VARIABLES
const form = document.querySelector(".form");
const formErrorEmpty = document.querySelector(".form-error-empty");
const formErrorInvalid = document.querySelector(".form-error-invalid");
const formSubmitSuccess = document.querySelector(".form-submit-success");
const emailInput = document.querySelector(".form__input");

// EVENT LISTENER
// IF EMAIL IS EQUAL TO AN EMPTY STRING
form.addEventListener("submit", function (e) {
  const emailValue = emailInput.value.trim();
  e.preventDefault();
  if (!emailValue) {
    formErrorEmpty.classList.remove("hidden");
  } else if (!isEmailValid(emailValue)) {
    formErrorInvalid.classList.remove("hidden");
  } else {
    formErrorInvalid.classList.add("hidden");
    formSubmitSuccess.classList.remove("hidden");
    form.reset();
    setTimeout(function () {
      formSubmitSuccess.classList.add("hidden");
    }, 5000);
  }

  function isEmailValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});

// NOW WANT TO REMOVE ERROR IF USER BEGINS TYPING
emailInput.addEventListener("input", function () {
  const emailValue = emailInput.value.trim();
  if (emailValue) {
    formErrorEmpty.classList.add("hidden");
  }
});
