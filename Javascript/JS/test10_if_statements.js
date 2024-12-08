
const sayhisname = document.getElementById("sayname");
let label =document.getElementById("label");
let hisname = document.getElementById("name");
let pic = document.getElementById("heisenberg");

sayhisname.hidden = true;
pic.hidden = true;

document.getElementById("yesbut").onclick = function(){
label.textContent = "SAY MY NAME!"; 
sayhisname.hidden = false;
document.getElementById("submit").onclick = function(){
    hisname = document.getElementById("name").value;
    if (hisname == "heisenberg"){
        label.textContent = "YOU GODDAMN RIGHT!"; 
        pic.hidden = false;
    }
    else{
        label.textContent = "YOU GODDAMN WRONG!"; 
    }
}

}

document.getElementById("nobut").onclick = function(){
    label.textContent = "THEN YOU SHOULD!"; 
    
    }