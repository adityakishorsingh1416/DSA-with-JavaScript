// --------- Maximum Element -------- //

let arr = [2, 5, 1, 77, 6, 7, 4, 20]
let max = arr[0]
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }
}
console.log(`The highest number in the given array is ${max}`)
