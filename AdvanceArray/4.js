// ------ Right rotation by k times(USING AN ALGORITHM ) ------ //
const prompt = require('prompt-sync')()
let k = Number(prompt("Enter the value of k : "))

let array = [1, 2, 3, 4, 5]
let temp = []
for(let i = 0 ; i < array.length; i++){
    temp[(i + k) % array.length] = array[i]
}
console.log(temp)