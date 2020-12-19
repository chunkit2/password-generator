// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialChar = [!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"]
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var numberChar = ["123456789"]
var charLength = "";

// Write password to the #password input  
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// created function to prompt char amount and store into var lengthAsk
function generatePassword(){
  var lengthAsk = window.prompt("Between 8-128 characters, how many characters should this password contain? ");  
// while-everything is true besides whats in parathesis. || = "or"
  while (lengthAsk <8 || lengthAsk>128){ 
alert("Password must be between 8-128 characters");
// re enter correct character if character requirement not met.
var lengthAsk = window.prompt("Between 8-128 characters, how many characters should this password contain? ");  

  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
