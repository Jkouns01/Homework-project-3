// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assigned variables
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@,#$%&*{}[]/\\+=";
var chosenCharacters = "";

// Write password to the #password input
function enterpassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
debugger;
//write password function 
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

//generate password function gets called in writePassword function, and it should return the final password
function generatePassword(){
  //do random generation here and return the final password in the end
  var result = "";
  //ask the user how many characters they want
  var length = prompt("How many characters in your random password? (between 8 and 128)");
  if(isNaN(length)){
    alert("You must input a number!");
    return generatePassword()
  }
  if(length<8 || length> 128){
    alert("Please choose numbers between 8 - 128!");
    return generatePassword()
  }
  //ask the user if they want to include upper, lower, num, special?
  var hasUpper = confirm("Include upper case letters?");
  var hasLower = confirm("Include lower case letters?");
  var hasNumbers = confirm("Include numbers?");
  var hasSpecial = confirm("Include special characters?");

  if(!hasUpper&&!hasLower&&!hasNumbers&&!hasSpecial){
    alert("You must at least choose 1 character type!");
    return generatePassword()
  }

  if(hasUpper){
    chosenCharacters += upper
  }
  if(hasLower){
    chosenCharacters += lower
  }

  if(hasNumbers) {
    chosenCharacters += numbers
  }

  if(hasSpecial) {
    chosenCharacters += special
  }

for (var i = 0; i < length; i++) {
  result += chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length));
}
return result;

}

// Prompting system to generate a password
// function upper(arr) {
//   for (var i = 0; i < upper.length; i++) {
//     arr.push(upper[i]);
//   }
//   return arr;
// }

// function lower(arr) {
//   for (var i = 0; i < lower.length; i++) {
//     arr.push(lower[i]);
//   }
//   return arr;
// }

// function numbers(arr) {


// function special(arr) {
//   for (var i = 0; i < special.length; i++) {
//     arr.push(special[i]);
//   }
//   return arr;
// }

// Adding conditions

// if (userPasswordLengthChoice === true) {
//   number(workshopArr);
// }

// if (userPasswordLengthChoice === false) {
//   alert = "Your password is not long enough!";
// }

// function shuffle(array) {
//     var currentIndex = array.length, temporaryValue, randomIndex;

//   // While there remain elements to shuffle...
//    while (0 !== currentIndex) {

//  // Pick a remaining element...
//    randomIndex = Math.floor(Math.random() * currentIndex);
//    currentIndex -= 1;

// // And swap it with the current element.
//    temporaryValue = array[currentIndex];
//    array[currentIndex] = array[randomIndex];
//    array[randomIndex] = temporaryValue;
//   }

//     return array;
//         }

