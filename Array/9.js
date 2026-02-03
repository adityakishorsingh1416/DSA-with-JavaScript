// --------- First minimum and Second minimum ----------- //

let arr = [7, 2, 3, 4, 5, 6, 9]

let FirstMin, SecondMin

if (arr[0] < arr[1]) {
    FirstMin = arr[0]
    SecondMin = arr[1]
} else {
    FirstMin = arr[1]
    SecondMin = arr[0]
}

for(let i = 2; i < arr.length; i++){
    if(arr[i] < FirstMin){
        SecondMin = FirstMin
        FirstMin = arr[i]
    } else if(arr[i] < SecondMin && arr[i] != FirstMin){
        SecondMin = arr[i]
    }
}

console.log(`The first smallest number in the given array is ${FirstMin}`)
console.log(`The Second smallest number in the given array is ${SecondMin}`)