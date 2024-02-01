//Connect the javascript variables with html components:
const passwordBox = document.getElementById("password");
const length = 12;

//Assign the password cases in variable:
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()-+=|?<>[]{}";
const allChars = upperCase + lowerCase + number + symbol;

//Create a password generate function:
function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
}

//Create copy function:
function copyPassword() {
  // Select the text field
  passwordBox.select();
  passwordBox.setSelectionRange(0, 99999);

  // Copy the text inside the text field
  navigator.clipboard.writeText(passwordBox.value);
}