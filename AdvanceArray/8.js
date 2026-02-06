// -------------- Merge Two sorted array --------------- //

let a = [2, 3, 4]
let b = [1, 5, 6]
let temp = new Array(a.length + b.length)
let i = 0, j = 0, k = 0
while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
        temp[k] = a[i]
        i++
        k++
    } else {
        temp[k] = b[j]
        j++
        k++
    }
}
while (i < a.length) {
    temp[k++] = a[i++]
}
while (j < b.length) {
    temp[k++] = b[j++]
}
console.log(temp);

