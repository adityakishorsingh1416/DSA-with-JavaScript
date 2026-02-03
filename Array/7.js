// ---------- Reverse the Array -----------//

let array = [1, 2, 3, 4, 5]

let revArray = []

for(let i = array.length - 1; i >= 0; i--){
    revArray.push(array[i])
}
console.log(revArray)




// ----- Two pointer apporach ------- //

let arr = [1, 2, 3, 4, 5, 6]

let i = 0, j = arr.length - 1, temp

while (i < j) {
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    i++
    j--
}
console.log(arr)

// This apporoach help us to reduce space complexcity by not creating any new array to stor ethe value..
