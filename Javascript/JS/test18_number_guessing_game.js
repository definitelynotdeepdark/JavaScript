let guess_attemp = 0;
let guees_num;
let running = true;
let text = document.getElementById("text");

const MinNum = 1;
const MaxNum =100;
const Answer = Math.floor(Math.random() * (MaxNum - MinNum + 1)) + MinNum;

document.getElementById("submit").onclick = function(){
    guees_num = document.getElementById("guess_num").value;
    guees_num = Number((guees_num));
    if(isNaN(guees_num)){
        window.alert("Enter Valid Number!");
    }
    else if(guees_num < MinNum || guees_num > MaxNum){
        window.alert("Enter Valid Number!");
    }
    else{
        while(running){
            guess_attemp ++;
            if(guees_num < Answer){
                text.textContent = `${guees_num} is too LOW`;
            } 
            else if(guees_num > Answer){
                text.textContent = `${guees_num} is too HIGH`;
            }
            else{
                text.textContent = `${guees_num} is the correct answer! attemps = ${guess_attemp}`;
                running = false;
            }
            break;
        }
    }
}