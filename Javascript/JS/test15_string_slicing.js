const Fullname = "John Doe";

/*let firstname = Fullname.slice(0,4);
let lastname = Fullname.slice(5);

let firstchar = Fullname.slice(0,1);
let lastchar = Fullname.slice(-1);*/

/*let firstname = Fullname.slice(0,Fullname.indexOf(" "));
let lastname = Fullname.slice(Fullname.indexOf(" ") + 1);

const email = "john123@gmail.com"

let username = email.slice(0,email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(firstname);
console.log(lastname);

console.log(username);
console.log(extension); */

let email;
let username;
let extension;


document.getElementById("submit").onclick = function(){
    email = document.getElementById("email").value;
    username = email.slice(0,email.indexOf("@"));
    extension = email.slice(email.indexOf("@"));

    document.getElementById("p1").textContent = `username = ${username}`;
    document.getElementById("p2").textContent = `extension = ${extension}`;


}


