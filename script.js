// Assignment Code
var generateBtn = document.querySelector("#generate");

// Options  
// alternative option to var lowerCase

var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var lowerCase = ['a','b','c','d','e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r' ,'s','t','u','v','w','x','y', 'z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialCharacters = [ '.', '//', ':', ';', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', '~', '`']

function userInput() {
  var length=window.prompt("How long would you like your password?");
  
  if(isNaN(length)) {
    alert("The password length must be a number!!!")
    return;
  }

  if(length<8 || length>128 ) {
    alert("Password must be between 8 and 128 characters.")
    return;
  }

  var useNumbers=confirm("Would you like your password to have numbers?")

  var useUppercase=confirm("Would you like your password to have Uppercase letters?")

  var useLowercase=confirm(" Would you like your password to have lowercase letters?")

  var useSpecialCharacters=confirm(" Would like your password to have special characters?")

  if(useNumbers===false&& useUppercase===false&& useLowercase===false&& useSpecialCharacters===false){
    alert("MUST choose from at least one character option.")
    return;
  }

  var userData = {
    length: length,
    useNumbers: useNumbers,
    useUppercase: useUppercase,
    useLowercase: useLowercase,
    useSpecialCharacters: useSpecialCharacters

  }

  return userData;

}

function randomizer(array) {
  //use math.floor(Math.random)
  var index = Math.floor(Math.random()  * array.length); 
  //randomly selecting index from the array, needs more, its only a bag 
  //use the index to return that element of array
  return array[index]; // 0, f, $
}
var randomLetter=randomizer (upperCase);
var randomLetter=randomizer (lowerCase);
var randomLetter=randomizer (specialCharacters);



function generatePassword() {
  var passwordOptions = userInput();

  // {
  //   length: 8,
  //   useNumbers: true,
  //   useUppercase: false,
  //   useLowercase: true,
  //   useSpecialCharacters: true
  // }

  var result = "";
  var usersChars = [];

  //Put password generate code here for each one
  //for loop at the end of this function

  if(passwordOptions.useNumbers ===true) {
    usersChars = usersChars.concat(numbers);
  }

  if(passwordOptions.useLowercase===true) {
    usersChars =usersChars.concat(lowerCase);
  }
  
  if(passwordOptions.useUppercase===true) {
    usersChars = usersChars.concat(upperCase);
  }

  if(passwordOptions.useSpecialCharacters===true){
    usersChars = usersChars.concat(specialCharacters);
  }

  for(var i = 0; i < passwordOptions.length; i++){
    var randomValue = randomizer(usersChars);

    result = result + randomValue; // "" + "A"     "A" + "B"   "AB" + "C"

  }
  
  return result;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






