// Object Oriented Programming


// class

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`)
    }

}


// create an object of the class
let person = new Person('John', 24)

person.greet() // Hello, my name is John



// inheritance

class Developer extends Person {
    constructor(name, age, language) {
        super(name, age)
        this.language = language
    }
    code() {
        console.log(`${this.name} is coding in ${this.language}`)
    }
}

// create an object of the Developer class and call the methods
let developer = new Developer('Limon', 24, 'JavaScript')    

developer.greet() // Hello, my name is Limon   
developer.code() // Limon is coding in JavaScript


// polymorphism

class Animal {
    constructor(name) {
        this.name = name
    }
    makeSound() {
        console.log('Animal sound')
    }
}

class Dog extends Animal {
    makeSound() {
        console.log('Bark')
    }
}

class Cat extends Animal {
    makeSound() {
        console.log('Meow')
    }
}

let dog = new Dog('Dog')

dog.makeSound() // Bark

let cat = new Cat('Cat')

cat.makeSound() // Meow




// encapsulation

class Account {
    // # is used to make the property private
    #balance = 0

    getBalance() {
        return this.#balance
    }

    deposit(amount) {
        this.#balance += amount
    }

    withdraw(amount) {
        this.#balance -= amount
    }
}   

// create an object of the Account class

let account = new Account()

account.deposit(100)

console.log(account.getBalance()) // 100

account.withdraw(50)

console.log(account.getBalance()) // 50

// console.log(account.#balance) // error: private property


// static methods: methods that can be called without creating an object of the class

class MathOperations {
    static add(a, b) {
        return a + b
    }

    static subtract(a, b) {
        return a - b
    }
}       


console.log(MathOperations.add(10, 5)) // 15
console.log(MathOperations.subtract(10, 5)) // 5


