// Assignment Code
var specialChar = ["!@#$%^&*()_+?.,;~"]
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numberChar = ["123456789"];
var charLength = "";
var generateBtn = document.querySelector("#generate");

// created function to prompt char amount and store into var lengthAsk
function generatePassword(){
  var lengthAsk = window.prompt("Between 8-128 characters, how many characters should this password contain?");  
// while-everything is true besides whats in parathesis. || = "or"
  while (lengthAsk < 8 || lengthAsk> 128){ 
alert("Password must be between 8-128 characters");
// re enter correct character if character requirement not met.
var lengthAsk = window.prompt("Between 8-128 characters, how many characters should this password contain? ");  
 }
 // parameters of the password
 var includeSpecialChar = window.confirm("Do you want to include special characters in the password?");
 var includeLowerCase = window.confirm("Do you want to include lower case characters in the password?");
 var includeUpperCase = window.confirm("Do you want to include upper case characters in the password?");
 var includeNumbers = window.confirm("Do you want to include numbers in the password?");
 // If everything is false the while loop will run causing the confirms to re ask.
 while(includeSpecialChar===false
      &&includeLowerCase===false
      &&includeUpperCase===false
      &&includeNumbers===false){
   alert("Choose at least 1 parameter");
 var includeSpecialChar = window.confirm("Do you want to include special characters in the password?");
 var includeLowerCase = window.confirm("Do you want to include lower case characters in the password?");
 var includeUpperCase = window.confirm("Do you want to include upper case characters in the password?");
 var includeNumbers = window.confirm("Do you want to include numbers in the password?");
 }
var passwordCombination =[]
if(includeSpecialChar){
  passwordCombination = passwordCombination + specialChar
}
if(includeLowerCase){
  passwordCombination = passwordCombination + lowerCase
}
if(includeUpperCase){
  passwordCombination = passwordCombination + upperCase
}
if(includeNumbers){
  passwordCombination = passwordCombination + numberChar
}
console.log (passwordCombination);
var randPass = "";
for(i=0; i<lengthAsk; i++){
  randPass = randPass + passwordCombination[Math.floor(Math.random() * passwordCombination.length)];
  console.log(randPass);
};
return randPass;
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
