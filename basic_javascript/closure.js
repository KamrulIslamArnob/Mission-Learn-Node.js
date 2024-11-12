// Closure & this keyword

// Closure

// Closure is a function that has access to the outer function's scope.     


function outerFunction() {
    let outerVar = 'I am outside!';

    function innerFunction() {
        console.log(outerVar);
    }

    return innerFunction;
}


let myFunction = outerFunction();

myFunction(); // I am outside!


// In the above example, the innerFunction has access to the outerFunction's scope.     



// this keyword

// The this keyword refers to the object it belongs to.     


let person = {
    name: 'John',
    age: 24,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};  


person.greet(); // Hello, my name is John
