const form = document.querySelector("form");

const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector(".firstName-error");

const email = document.querySelector("#email");
const emailError = document.querySelector(".email-error");

const phone = document.querySelector("#phone");
const phoneError = document.querySelector(".phone-error");

const password = document.querySelector("#password");
const passwordError = document.querySelector(".password-error");

const passwordConfirm = document.querySelector("#password-confirm");
const confirmError = document.querySelector(".confirm-error");

firstName.addEventListener("input", (event) => {
  if (firstName.validity.valid) {
    firstNameError.textContent = "";
    firstNameError.className = "firstName-error";
  } else {
    showFirstNameError();
  }
});

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "email-error";
  } else {
    showEmailError();
  }
});

password.addEventListener("input", (event) => {
  if (password.validity.valid) {
    passwordError.textContent = "";
    passwordError.className = "password-error";
  } else {
    showPasswordError();
    matchPassword();
  }
});

passwordConfirm.addEventListener("input", (event) => {
  if (passwordConfirm.validity.valid) {
    confirmError.textContent = "";
    confirmError.className = "confirm-error";
  } else {
    matchPassword();
  }
});

phone.addEventListener("input", (event) => {
  if (phone.validity.valid) {
    phoneError.textContent = "";
    phoneError.className = "phone-error";
  } else {
    showPhoneError();
  }
});

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showEmailError();
    showFirstNameError();
    showPasswordError();
    event.preventDefault();
  }
});

function showEmailError() {
  if (email.validity.tooShort) {
    emailError.textContent = `* Email is too short. You entered ${email.value.length} characters. The required is ${email.minLength}.`;
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "* That is not an email address.";
  } else if (email.validity.valueMissing) {
    emailError.textContent = "* Please enter an email address.";
  }

  emailError.className = "email-error active";
}

function showFirstNameError() {
  if (firstName.validity.tooShort) {
    firstNameError.textContent = `* Please enter a name longer than ${firstName.value.length}`;
  } else if (firstName.validity.valueMissing) {
    firstNameError.textContent = "Please enter a name.";
  }

  firstNameError.className = "firstName-error active";
}

function showPasswordError() {
  if (password.validity.patternMismatch) {
    passwordError.textContent =
      "Create a password 8 characters long that includes at least 1 uppercase letter at the start.";
  } else if (password.validity.valueMissing) {
    passwordError.textContent = "Please enter a password";
  }

  passwordError.className = "password-error active";
}

function matchPassword() {
  if (password.value != passwordConfirm.value) {
    confirmError.textContent = "Passwords do not match";
  }

  confirmError.className = "confirm-error active";
}

function showPhoneError() {
  if (phone.validity.valueMissing) {
    phoneError.textContent = "Please enter phone number";
  } else if (phone.validity.patternMismatch) {
    phoneError.textContent = "Phone: i.e 123-456-7890";
  } else if (phone.validity.tooShort) {
    phoneError.textContent = `Number is too short. Please enter ${phone.minLength}`;
  } else if (phone.validity.tooLong) {
    phoneError.textContent = `Number is too long. Please enter ${phone.maxLength}`;
  }

  phoneError.className = "phone-error active";
}

//Work on phone number validation and
//passwords and also a function to see if
//they match

//Create a way to orgainize all inputs into
//the same validiation function??
