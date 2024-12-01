// strings

let str = 'Hello'
let str2 = "World"


// string concatenation

//let greeting1 = str + str2
//console.log(greeting1) 
let greeting = str + ' ' + str2
console.log(greeting) // Hello World



// ES6 template literals
let name = `Limon`  
let age = 24

let message = `My name is ${name} and I am ${age} years old`    
console.log(message) // My name is Limon and I am 24 years old      


// normal template literals

let message2 = 'My name is ' + name + ' and I am ' + age + ' years old'     
console.log(message2) // My name is Limon and I am 24 years old     


/*
Escaping special characters:
 - Windows line break: '\r\n'
 - Unix line break: '\n'
 - Tab: '\t'
 - Backslash: '\'
*/

let text = 'Hello\nWorld'
console.log(text) // Hello <br> World


// get string length

let str3 = 'Hello'
console.log(str3.length) // 5


// get a specific character from the string 
let str4 = 'Hello, World'
console.log(str4[0]) // H


// typecasting to string:

let num=10
let str5 = String(num)
console.log(str5) // 10
console.log(typeof str5) // string


let num1= 20
let str6 = num1.toString()
console.log(str6) // 20
console.log(typeof str6) // string


// typecasting to string using addition operator:

let str55 = 10 + String(num)
console.log(str55) // 10
console.log(typeof str55) // 10

let num2 = 30
let str7 = num2 + ''
console.log(str7) // 30
console.log(typeof str7) // string


// comparing strings:

let result = 'apple' == 'apple' 
console.log(result) // true


// string methods:

let str8 = 'Hello, World'

// converting to uppercase

console.log(str8.toUpperCase()) // HELLO, WORLD

// converting to lowercase

console.log(str8.toLowerCase()) // hello, world


// finding a substring

console.log(str8.substring(0, 5)) // Hello


