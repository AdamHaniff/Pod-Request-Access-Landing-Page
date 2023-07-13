import {
  addHiddenClassTo,
  removeHiddenClassFrom,
  displayFormError,
  isEmailValid,
} from "./helpers.js";
import "core-js/stable";
import "regenerator-runtime/runtime";

// VARIABLES
const form = document.querySelector(".form");
const formErrorEmpty = document.querySelector(".form-error-empty");
const formErrorInvalid = document.querySelector(".form-error-invalid");
const formSubmitSuccess = document.querySelector(".form-submit-success");
const emailInput = document.querySelector(".form__input");
let emailValue;

// FUNCTIONS
function trimEmailValue() {
  emailValue = emailInput.value.trim();
  return emailValue;
}

function displayFormSuccess() {
  if (formErrorInvalid.classList.contains("hidden")) {
    removeHiddenClassFrom(formSubmitSuccess);
  } else {
    addHiddenClassTo(formErrorInvalid);
    removeHiddenClassFrom(formSubmitSuccess);
  }
}

function resetForm() {
  form.reset();
}

function hideSuccessMessage() {
  setTimeout(function () {
    addHiddenClassTo(formSubmitSuccess);
  }, 5000);
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
    addHiddenClassTo(formErrorEmpty);
  }
}

// EVENT LISTENERS
form.addEventListener("submit", handleFormSubmit);
emailInput.addEventListener("input", handleInputChange);
