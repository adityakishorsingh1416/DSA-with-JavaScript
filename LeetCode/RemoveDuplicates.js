// ----- Given an integer array nums sorted in non-decreasing order, "remove the duplicates" in-place such that each unique element appears only once. The relative order of the elements should be kept the same ------ //

let arr = [1, 1, 2, 3]

var removeDuplicate = function(arr){
    let j = 1
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] !== arr[i+1]){
            arr[j] = arr[i+1]
            j++
        }
    }
    return j
}
console.log(removeDuplicate(arr))