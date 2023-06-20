// Password toggle JavaScript code
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function () {
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);

  const iconClass = type === "password" ? "fa-eye" : "fa-eye-slash";
  togglePassword.classList.toggle("fa-eye");
  togglePassword.classList.toggle("fa-eye-slash");
});

// Current date JavaScript code
var currentDateElement = document.getElementById("current-date");

var options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};
var currentDate = new Date().toLocaleDateString(undefined, options);

currentDateElement.textContent = currentDate;
