/*let username = "John Doe  ";

console.log(username.charAt(0));
console.log(username.indexOf("o"));
console.log(username.lastIndexOf("o"));
console.log(username.length);
trimname = username.trim()
console.log(trimname);
console.log(trimname.length);
console.log(trimname.toUpperCase());
console.log(trimname.toLowerCase());
console.log(trimname.repeat(3));

//.startsWith() endsWith() .includes() .replaceAll(,);*/

let username;
let trimname;

document.getElementById("submit").onclick = function(){
username = document.getElementById("username").value;
trimname = username.trim()

document.getElementById("p1").textContent = `1. charAt(0) of ${username} is ${username.charAt(0)}`;
document.getElementById("p2").textContent = `2. indexOf("o") of ${username} is ${username.indexOf("o")}`;
document.getElementById("p3").textContent = `3. lastIndexOf("o") of ${username} is ${username.lastIndexOf("o")}`;
document.getElementById("p4").textContent = `4. username.length of ${username} is ${username.length}`;
document.getElementById("p5").textContent = `5. trimname of ${username} is ${trimname}`;
document.getElementById("p6").textContent = `6. trimname.length of ${username} is ${trimname.length}`;
document.getElementById("p7").textContent = `7. trimname.toUpperCase() of ${username} is ${trimname.toUpperCase()}`;
document.getElementById("p8").textContent = `8. trimname.toLowerCase() of ${username} is ${trimname.toLowerCase()}`;
document.getElementById("p9").textContent = `9. trimname.repeat(3) of ${username} is ${trimname.repeat(3)}`;


}
