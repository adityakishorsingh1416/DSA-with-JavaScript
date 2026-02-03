// --------- Seperate the Zeros and One ------- //

let array = [0, 1, 0, 1, 0, 0, 1, 0, 1]

let i = 0 ,j = 0, temp

while(i < array.length){
    if (array[i] == 0) {
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
        j++
    }
    i++
}

console.log(array)


// ------ Seperate the negative and positive numbers ------ //

let arr = [-2, 4, -7, 5, 4, -3, 9]

let k = 0 ,l = 0, tempo

while(k < arr.length){
    if (arr[k] < 0) {
        tempo = arr[k]
        arr[k] = arr[l]
        arr[l] = tempo
        l++
    }
    k++
}
console.log(arr)