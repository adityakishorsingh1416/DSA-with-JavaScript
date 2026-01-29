// let prompt = require('prompt-sync')();

// let a = prompt("Enter a number");
// console.log(a);

let myDetails = {
    name: "Adi",
    dob : new Date(),
    age: undefined,
    calAge: function (){
        return "test";
    },
};

let obj = JSON.parse(JSON.stringify(myDetails));
console.log(obj);
console.log(obj.dob instanceof Date);

console.log(obj.age);
console.log(obj.calAge);


