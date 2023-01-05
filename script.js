const form = document.getElementById("form");
const pNumber = document.getElementById("phone_number");
const email = document.getElementById("mail");
const password = document.getElementById("password");
const confirmedPassword = document.getElementById("confirm_password");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmedPasswordValue = confirmedPassword.value.trim();
  const phoneNumber = pNumber.value.trim();

  if (firstNameValue === "") {
    errorMessage(firstName, "*Please enter first name");
  } else {
    success(firstName);
  }
  if (lastNameValue === "") {
    errorMessage(lastName, "*Please enter last name");
  } else {
    success(lastName);
  }

  if (passwordValue === "") {
    errorMessage(password, "*Blank password");
  } else {
    success(password);
  }
  if (confirmedPasswordValue === "") {
    errorMessage(confirmedPassword, "*Blank password");
  } else if (passwordValue !== confirmedPasswordValue) {
    errorMessage(confirmedPassword, "Passwords do not match");
  } else {
    success(confirmedPassword);
  }

  if (emailValue === "") {
    errorMessage(email, "*Email cannot be blank");
  } else if (!isValidEmail(emailValue)) {
    errorMessage(email, "*Invalid Email");
  } else {
    success(email);
  }
  if (phoneNumber === "") {
    errorMessage(pNumber, "*Blank phone number");
  } else if (!isValidPhoneNumber(phoneNumber)) {
    errorMessage(pNumber, "*Invalid phone number");
  } else {
    success(pNumber);
  }
}

function errorMessage(value, message) {
  const formController = value.parentElement;
  const small = formController.querySelector("small");
  small.innerText = message;
  formController.className = "form-control error";
}

function success(value) {
  const formController = value.parentElement;
  formController.className = "form-control success";
}

function isValidEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function isValidPhoneNumber(number) {
  return /^\+{0,2}([\-\. ])?(\(?\d{0,3}\))?([\-\. ])?\(?\d{0,3}\)?([\-\. ])?\d{3}([\-\. ])?\d{4}/.test(
    number
  );
}
