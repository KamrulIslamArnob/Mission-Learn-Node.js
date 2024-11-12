// Variables and Data Types

//let is used to declare a variable which can be changed later on
let name = "Kaium Al Limon"

//const is used to declare a variable which can't be changed later on   
const age = 22

// var is used to declare a variable which can be changed later on and it's a global variable
var isDeveloper = true


// Printing the variables

console.log(name, age, isDeveloper)


name = "Limon"
console.log(name) // Limon


/ false


// age = 24

// Uncaught TypeError: Assignment to constant variable.
// console.log(age) 


isDeveloper = false
console.log(isDeveloper) // false




// Data Types

let counter = 120
console.log(typeof counter) // number


counter = false
console.log(typeof counter) // boolean


counter = "Hello"
console.log(typeof counter) // string



let person

console.log(person) // undefined



let human=null
console.log(human) // null


let price = 10.5
console.log(typeof price) // number


let fruits = ['apple', 'banana', 'mango']
console.log(typeof fruits) // object

let student = {
    name: "Kaium",
    age: 22
}

console.log(typeof student) // object