let x = 100;
let age = 20; //int
let price = 999.99; //float
let Fname = "John"; //string
let Lname = "Doe";
let bool = true; //bool

console.log(`You are ${age} years old`);
console.log(`The keyboard is ${price} dollar`);
console.log(`Hello ${Fname} ${Lname}`);
console.log(`Bool is ${bool}`);

document.getElementById("p1").textContent =`Firstname: ${Fname}`;
document.getElementById("p2").textContent = `Lastname: ${Lname}`;
document.getElementById("p3").textContent = `Age: ${age}`;