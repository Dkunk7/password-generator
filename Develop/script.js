
var alpha = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+="




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var characters = alpha;
//check length function
 var checkLength = function() {
    length = prompt("How many characters? (Between 8 and 128)");
    console.log(length);
    
    if (!length) {
      alert("You gotta fit the parameters, yo!");
      return writePassword();
    }
    
    else if (length > 128 || length < 1) {
      alert("You gotta fit the parameters, yo!");
      return writePassword();
    };
  }
  checkLength();
// check case function
  var checkCase = function() {
    charCase = prompt("Uppercase, lowercase, or both?").toLowerCase();
    console.log(charCase);

    if (charCase === "uppercase") {
      characters = characters.toUpperCase();
      console.log(characters);
    }
    else if (charCase === "lowercase") {
      characters = characters.toLowerCase();
      console.log(characters);
    }
    else if (charCase === "both") {
      characters += characters.toUpperCase();
      console.log(characters);
    }
    else {
      alert("Try answering that one again, bud.");
      return checkCase();
    }
  };
  checkCase();
// check number function
  var checkNum = function() {
    charNum = prompt("Include numbers? (yes or no)").toLowerCase();
    console.log(charNum);

    if (charNum === "yes") {
      characters += numbers;
      console.log(characters);
    }
    else if (charNum === "no") {
      characters = characters;
      console.log(characters);
    }
    else {
      alert("That's not a viable response! Try again!");
      return checkNum();
    }
  };
  checkNum();
// check special char function
  var checkSpec = function() {
    charSpec = prompt("Include special characters? (yes or no)").toLowerCase();
    console.log(charSpec);
    if (charSpec === "yes") {
      characters += symbols;
      console.log(characters);
    }
    else if (charSpec === "no") {
      characters = characters;
      console.log(characters);
    }
    else {
      alert("C'mon, answer the question for real this time.");
      return checkSpec();
    }
  };
  checkSpec();

  var password = "";

  for (var i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  };
  passwordText.textContent = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
