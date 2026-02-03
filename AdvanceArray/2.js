// ------ Right rotation by k times ------ //
const prompt = require('prompt-sync')();
let array = [1, 2, 3, 4, 5]
let k = Number(prompt("Enter value of k ") % array.length)
for (let j = 0; j < k; j++) {
    let copy = array[0]
    for (let i = 0; i < array.length - 1; i++) {
        array[i] = array[i + 1]
    }
    array[array.length - 1] = copy
}
console.log(array)