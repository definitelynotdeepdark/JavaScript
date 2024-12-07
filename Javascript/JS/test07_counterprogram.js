const decreasebutton = document.getElementById("decreaseBut");
const resetbutton = document.getElementById("resetBut");
const increasebutton = document.getElementById("increaseBut");

const countlabel = document.getElementById("countLabel");

let count =  0;

increasebutton.onclick = function(){
    count++;
    countlabel.textContent = count;
}

decreasebutton.onclick = function(){
    count--;
    countlabel.textContent = count;
}

resetbutton.onclick = function(){
    count =0;
    countlabel.textContent = count;
}


