// HELPER FUNCTIONS
function addHiddenClassTo(element) {
  element.classList.add("hidden");
}

function removeHiddenClassFrom(element) {
  element.classList.remove("hidden");
}

function displayFormError(errorElement) {
  removeHiddenClassFrom(errorElement);
}

function isEmailValid(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export {
  addHiddenClassTo,
  removeHiddenClassFrom,
  displayFormError,
  isEmailValid,
};
