// ------- Rotate evey element by 1 to left side -------- //

let arr1 = [1, 2, 3, 4, 5]
let copy = arr1[0]

for(let i = 0; i < arr1.length; i++){
    arr1[i] = arr1[i+1]
}

arr1[arr1.length - 1] = copy

console.log(arr1)


// ------- Rotate evey element by 1 to right side -------- //


let arr2 = [1, 2, 3, 4, 5]
let copyy = arr2[arr2.length - 1]

for(let j = arr2.length-1; j > 0 ; j--){
    arr2[j] = arr2[j-1]
}

arr2[0] = copyy
console.log(arr2)
