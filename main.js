import "core-js/stable";
import "regenerator-runtime/runtime";

// VARIABLES
const form = document.querySelector(".form");
const formErrorEmpty = document.querySelector(".form-error-empty");
const formErrorInvalid = document.querySelector(".form-error-invalid");
const formSubmitSuccess = document.querySelector(".form-submit-success");
const emailInput = document.querySelector(".form__input");
let emailValue;

// HELPER FUNCTIONS
function isEmailValid(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function addHiddenClass(element) {
  element.classList.add("hidden");
}

function removeHiddenClass(element) {
  element.classList.remove("hidden");
}

function trimEmailValue() {
  emailValue = emailInput.value.trim();
  return emailValue;
}

function hideSuccessMessage() {
  setTimeout(function () {
    addHiddenClass(formSubmitSuccess);
  }, 5000);
}

function resetForm() {
  form.reset();
}

function displayFormError(errorElement) {
  removeHiddenClass(errorElement);
}

function displayFormSuccess() {
  if (formErrorInvalid.classList.contains("hidden")) {
    removeHiddenClass(formSubmitSuccess);
  } else {
    addHiddenClass(formErrorInvalid);
    removeHiddenClass(formSubmitSuccess);
  }
}

// EVENT LISTENER CALLBACK FUNCTIONS
function handleFormSubmit(e) {
  emailValue = trimEmailValue();
  e.preventDefault();
  if (!emailValue) {
    displayFormError(formErrorEmpty);
  } else if (!isEmailValid(emailValue)) {
    displayFormError(formErrorInvalid);
  } else {
    displayFormSuccess();
    resetForm();
    hideSuccessMessage();
  }
}

function handleInputChange() {
  emailValue = trimEmailValue();
  if (emailValue) {
    formErrorEmpty.classList.add("hidden");
  }
}

// EVENT LISTENERS
form.addEventListener("submit", handleFormSubmit);
emailInput.addEventListener("input", handleInputChange);
