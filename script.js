// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialChar = [!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"]
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var numberChar = ["123456789"]
var charLength = ""

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
