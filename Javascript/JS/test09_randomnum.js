const button = document.getElementById("button");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const min = 1;
const max = 6;
let randomnumber1;
let randomnumber2;
let randomnumber3;

button.onclick = function(){
    randomnumber1 = Math.floor(Math.random() * max) +min;
    randomnumber2 = Math.floor(Math.random() * max) +min;
    randomnumber3 = Math.floor(Math.random() * max) +min;
    num1.textContent = randomnumber1;
    num2.textContent = randomnumber2;
    num3.textContent = randomnumber3;
}