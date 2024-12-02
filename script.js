//your JS code here. If required.
const inputField = document.getElementById("fname");

// Attach an onblur event listener to the input field
inputField.addEventListener("blur", function () {
  // Convert the value of the input field to uppercase
  inputField.value = inputField.value.toUpperCase();
});