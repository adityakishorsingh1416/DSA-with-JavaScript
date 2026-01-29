console.log(10+1) // 11
console.log(typeof(10+1)) // number

console.log('10'+'1') // 101
console.log(typeof('10'+'1')) // string

console.log(10+'1') // 101
console.log(typeof(10+'1')) // string

/*
TYPE COERCION : It refers to the automatically or implicity conversion of values from one data type to another during operation , comparison or assignment.

*/


let a = 20;
let b = 30;

[a,b] = [b,a] // Used to swap two numbers.

console.log(a)
console.log(b)



let c = 10;
let d // = ++(c++); // We can't increment/decrement constant value

console.log(d)



// MATHS FUNCTIONS

console.log(Math.round(10.5));
console.log(Math.ceil(10.5));
console.log(Math.floor(10.5));
console.log(Math.trunc(10.57878));
console.log(Math.pow(10,5));
console.log(Math.sqrt(16));
console.log(Math.abs(10.5));
console.log(Math.max(10,12,45,76,1));
console.log(Math.min(10,12,45,76,1));

let y = 89.673584
console.log(a.toFixed(2));


// RANDOM OTP GENERATOR

console.log(Math.trunc(Math.random()*9000)+1000);



let age = prompt("Enter your age !"); // Used to take user input
console.log(age);
console.log(typeof(age)); // Bydeafult prompt method take argument as 'string'
