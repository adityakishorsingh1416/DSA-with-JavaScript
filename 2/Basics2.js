/*  
Ques 1 :

let age = prompt("What is your age ?");

if (isNaN(age)) {
    console.log("Invalid input 🚫")
}
else if (age<18) {
    console.log("Cannot vote ❌");
}
else{
    console.log("You can vote ✔️");
    
}


Ques 2 :

let unit = Number(prompt("Enter your electricity unit used")); // 700
let amount = 0
if (isNaN(unit)) {
    console.log("Inavlid Input !");   
}if (unit >  400) {
    amount += (unit-400) * 13
    unit = 400
}if (unit >  200 && unit <= 400) {
    amount += (unit-200) * 8
    unit = 200
}if (unit >  100 && unit <= 200) {
    amount += (unit-100) * 6
    unit = 100
}
amount += unit * 4

console.log(amount);

*/


amount = Number(prompt("Enter the amount !"))
if (amount >= 500) {
    console.log("500 notes : " + Math.floor(amount/500));
    amount = amount%500
}
if (amount >= 200) {
    console.log("200 notes : " + Math.floor(amount/200));
    amount = amount%200
}
if (amount >= 100) {
    console.log("100 notes : " + Math.floor(amount/100));
    amount = amount%100
}
if (amount >= 50) {
    console.log("50 notes : " + Math.floor(amount/50));
    amount = amount%50
}
if (amount >= 20) {
    console.log("20 notes : " + Math.floor(amount/20));
    amount = amount%20
}
if (amount >= 10) {
    console.log("10 notes : " + Math.floor(amount/10));
    amount = amount%10
}
if (amount === 1) {
    console.log("1 notes : " + amount);  
}
