let greeting = document.getElementById("greeting");
let username = "";
let password = "";
let login = false;

while(!login) {
   username = window.prompt("enter username:");
   password = window.prompt("enter password");

    if(username === "user" && password ==="1234"){
        login = true;      
    }
    else{
        console.log(`Invalid username or password`);
    }
}
greeting.textContent = `You are logged in`;
