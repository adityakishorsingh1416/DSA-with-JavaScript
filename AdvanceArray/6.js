// ------ Left rotation by k times(without using an extra array) ------ //
// ---- Reduces space complexity ----- //
const prompt = require('prompt-sync')()
let array = [1, 2, 3, 4, 5]
let k = Number(prompt("Enter the value of k : ") % array.length)
reverse(0, k)
reverse(k+1, array.length - 1)
reverse(0, array.length - 1)
function reverse(i , j){
    while(i < j){
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
        i++
        j--
    }
}

console.log(array)