// Assignment Code
const generateBtn = document.querySelector("#generate");
const lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVQXYZ';
const specCharacters = '!@#$%^&*?~';
// in case i need it for other ideas
const index = Math.floor(Math.random() * length);
const lowerPrompt = lowercaseCharacters[index];
const upperPrompt = lowercaseCharacters[index];
const specialPrompt = lowercaseCharacters[index];
let password_text = "";





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // trying to find length variable and then open character prompts
  let len = window.prompt("length of password. max char. 124", '8')
  if (len < 8 || len > 124) {
    return "bad length"}
  let lowercase = window.confirm("press ok to confirm lowercase letters")
  let uppercase = window.confirm("press ok to confirm uppercase letters")
  let special = window.confirm("press ok to confirm special characters")
  // begin conditions
  
if (lowercase == true) {
  password_text += lowercaseCharacters;
}
if (uppercase == true) {
  password_text += uppercaseLetters;
}
if (special == true) {
  password_text += specCharacters;
}
for (let i = 0; i < len; i++) {
  password += password_text[Math.floor(Math.random() * password_text.length)]
}
  passwordText.value = password;
}

// the magic that makes it happen
function generatePassword() {
  return password_text
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);