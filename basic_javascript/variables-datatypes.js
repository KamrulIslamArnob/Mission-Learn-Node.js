// Variables and Data Types
console.log("-----------Variables and Data Types-----------") 

//let is used to declare a variable which can be changed later on
// Varrable name cant be "name" because it's a reserved keyword
let name = "Kaium Al Limon"

//const is used to declare a variable which can't be changed later on   
const age = 22

// var is used to declare a variable which can be changed later on and it's a global variable
var isDeveloper = true


// Printing the variables

console.log(name, age, isDeveloper)

name1 = "Limon"
console.log(name) 


/// update


//age = 22

//Uncaught TypeError: Assignment to constant variable.
console.log("age :" + age) 


isDeveloper = false
console.log(isDeveloper) // false


// Data Types
console.log("----------Data Types ------------") 


let counter = 120
console.log("typeof counter : "+ typeof counter) // number


counter = false
console.log("typeof counter : "+ typeof counter) // boolean


counter = "Hello"
console.log("typeof counter : "+ typeof counter) // string




let person
console.log(person) // undefined. If a variable is declared but not assigned any value, it will be undefined


let human=null
console.log(human) // null. If a variable is declared and assigned null, it will be null


let price = 10.5
console.log(typeof price) // number


let fruits = ['apple', 'banana', 'mango']
console.log(typeof fruits) // object

let student = {
    name: "Kaium",
    age: 22
}

console.log(typeof student) // object