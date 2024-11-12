// control structures (conditional statements)

// normal if else statement

let score = 85

if (score > 90) {
    console.log('Excellent')
} else if (score > 75) {
    console.log('Good')
} else {
    console.log('Keep trying')
}


//ternary operator

let age = 17

age >= 18 ? console.log('Eligible for voting') : console.log('Not eligible for voting')


// switch statement

let day = 5

switch (day) {
    case 1: console.log('Sunday')
        break
    case 2: console.log('Monday')
        break
    case 3: console.log('Tuesday')
        break
    default: console.log('Invalid day')
}