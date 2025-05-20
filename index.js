const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const specialCharacters = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


let firstPasswordEl = document.getElementById("first-password");
let secondPasswordEl = document.getElementById("second-password");


function generatePassword(passwordLength, includeNumbers, includeSpecialCharacters){
    let charset = [...characters];
    
    if(includeNumbers){
        charset = [...charset, ...numbers]
    }
    
    if(includeSpecialCharacters){
        charset = [...charset, ...specialCharacters]
    }
    
    let password = "";
    for(let i = 0; i <passwordLength; i++){ 
        let index = Math.floor(Math.random() * charset.length);
        password += charset[index];
    }
    return password;
}


function generatePasswords(){
    let passwordLengthEl = document.getElementById('password-length');
    let numbersCheckboxEl = document.getElementById("number-checkbox"); 
    let specialCharactersCheckboxEl = document.getElementById("special-characters-checkbox");
    
    let passwordLength = parseInt(passwordLengthEl.value, 10) || 16; // by default set to 16
    let useNumbers = numbersCheckboxEl.checked;
    let useSpecialCharacters = specialCharactersCheckboxEl.checked; 
    
    firstPasswordEl.textContent = generatePassword(passwordLength, useNumbers, useSpecialCharacters);
    secondPasswordEl.textContent = generatePassword(passwordLength, useNumbers, useSpecialCharacters);
}