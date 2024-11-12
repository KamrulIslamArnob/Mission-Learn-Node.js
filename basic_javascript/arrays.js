// arrays

// Arrays are a type of data structure that allows you to store multiple values in a single variable.   

let array = [1, 2, 3, 4, 5]

// print the array
console.log(array) // [1, 2, 3, 4, 5]


//print a specific element from the array
console.log(array[2]) // 3


// accessing the length of the array

console.log(array.length) // 5


// adding an element to the end of the array

array.push(6)
console.log(array) // [1, 2, 3, 4, 5, 6]


// removing an element from the end of the array

array.pop()
console.log(array) // [1, 2, 3, 4, 5]


// adding an element to the beginning of the array  

array.unshift(0)
console.log(array) // [0, 1, 2, 3, 4, 5]


// removing an element from the beginning of the array  

array.shift()
console.log(array) // [1, 2, 3, 4, 5]


// finding the index of an element in the array 

console.log(array.indexOf(3)) // 2


// updating an element in the array

array[2] = 10
console.log(array) // [1, 2, 10, 4, 5]


//copying an array

let newArray = array.slice()
console.log(newArray) // [1, 2, 10, 4, 5]



// updating multiple elements in the array

array.splice(2, 3, 3, 4, 50)
console.log(array) // [1, 2, 3, 4, 50]



// splice method in javascript arrays:

/*
The splice() method changes contents of an array by removing 
or replacing existing elements or adding new elements in 
place.

for example, in the following code, splice(2,3,3,4,50) means the following:

the first digit (2) means it will start from index 2
the next digit (3) means it will remove 3 elements from index 2
the next digits (3,4,50) means it will add 3,4 and 50 from index 2 onwards  

hence the output will be [1, 2, 3, 4, 50]   
*/


