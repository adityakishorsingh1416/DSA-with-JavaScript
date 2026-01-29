// ----------- 2nd highest element --------- //

let arr = [2, 5, 1, 77, 6, 7, 4, 20]
let FirstMax, SecondMax;

if (arr[0] > arr[1]) {
    FirstMax = arr[0]
    SecondMax = arr[1]
} else{
    FirstMax = arr[1]
    SecondMax = arr[0]
}

for(let i = 2; i < arr.length; i++){
    if (arr[i] > FirstMax) {
        SecondMax = FirstMax
        FirstMax = arr[i]
    } else if (arr[i] > SecondMax && arr[i] !== FirstMax){
        SecondMax = arr[i]
    }
}

console.log(`The First highest number in the given array is ${FirstMax}`)
console.log(`The Second highest number in the given array is ${SecondMax}`)