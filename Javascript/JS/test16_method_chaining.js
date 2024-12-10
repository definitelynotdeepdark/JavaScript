let username = window.prompt("Enter Username:");

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);

document.getElementById("text").textContent = `Your username is ${username}`;