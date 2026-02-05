// ----- Remove duplicate elements from and array ------ //

let array = [1, 1, 2, 3, 3, 4, 5, 6, 6]
let temp = []
let i = 0
while (i < array.length) {
    if (array[i] != array[i+1]) {
        temp.push(array[i])
    }
    i++
}
console.log(temp) 