const prompt = require('prompt-sync')();
let arr = []

for (let i = 0; i < 5; i++) {
    let num = Number(prompt("Enter a number : "))
    arr.push(num)
}

console.log(arr)



// ----------------- Better Approach------------------- //


let arr1 = new Array(5)

for (let i = 0; i < arr1.length; i++) {
    arr1[i] = Number(prompt("Enter a number : "))
}

console.log(arr1)