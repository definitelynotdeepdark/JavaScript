
const textBox = document.getElementById("textbox");
const toF = document.getElementById("toF");
const toC = document.getElementById("toC");
const Result = document.getElementById("result");

let temp;


function convert(){
    if(toF.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        Result.textContent = temp.toFixed(1) + `°F`
    }
    else if(toC.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        Result.textContent = temp.toFixed(1) + `°C`
    }
    else{
        Result.textContent = "Select a Unit!"
    }
}