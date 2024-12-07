let username;

document.getElementById("submit").onclick = function(){
    username = document.getElementById("name").value;
    console.log(username);
    document.getElementById("head").textContent = `Hello ${username}`;
}