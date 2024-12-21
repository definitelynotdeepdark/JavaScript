
const passwordLength = document.getElementById("length");
const includeLowercase = document.getElementById("includeLowercase"); 
const includeUppercase = document.getElementById("includeUppercase");
const includeNumbers = document.getElementById("includeNumber");
const includeSymbols = document.getElementById("includeSymbols");


function generatePassword(length,includeLowercase,includeUppercase,includeNumbers,includeSymbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symnbolChars = "!@#$%^&*()_+-="

    let allowChars = "";
    let password = "";



    allowChars += includeLowercase ? lowercaseChars : "";
    allowChars += includeUppercase ? uppercaseChars : "";
    allowChars += includeNumbers ? numberChars : "";
    allowChars += includeSymbols ? symnbolChars : "";

    if(length <=0){
        return `password length must be at least 4 characters`;
    }
    else if(length >= 20){
        return `password length must less than 20 characters`;
    }
    if(allowChars.length === 0){
        return `password must be at least 1 characters set`;
    }

    for(let i = 0; i < length;i++){
        const randomIndex = Math.floor(Math.random() * allowChars.length);
        password += allowChars[randomIndex]
    }

    return password;
}

document.getElementById("submit").onclick = function(){
const password = generatePassword(passwordLength.value,
                                includeLowercase.checked,
                                includeUppercase.checked,
                                includeNumbers.checked,
                                includeSymbols.checked);                          
    console.log(`Generated password: ${password}`);
   
    document.getElementById("passresult").textContent = `Generated password: ${password}`;
                            }
          