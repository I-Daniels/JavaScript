// *Function Declaration

// function greet(name) {
//     console.log('Hello - ', name)
// }

// greet('Dani')

// // *Function Expression

// const greet2 = function (name) {
//     console.log('Hello - ', name)
// }

// greet2('Dani')

// console.log(typeof greet2)

// setTimeout(function() {
//     greet('Dani')
// }, 1500)
// let counter = 0
// const interval = setInterval(function() {
//     if(counter===5) {
//         clearInterval(interval)
//     } else {
//         console.log(++counter)
//     }
// }, 1000)


// *Arrow functions

// function greet(name) {
//     console.log('Hello - ', name)
// }

const arrow = (name, age) => {
    console.log('Hello - ', name, age)
}

arrow('Dani', 20)

const arrow2 = (name) => console.log('Hello - ', name)


function pow(num, exp) {
    return Math.pow(num,exp)
}

const pow2 = (num, exp) => Math.pow(num, exp)

// console.log(pow2(2, 3))

// ======= Default Parameters

const sum = (a=40, b= a / 3) => a + b

// console.log(sum(40, 2))
// console.log(sum())

function sumAll ( ... numbers) {
    // let res = 0
    // for (let num of numbers) {
    //     res += num
    // }

    // return res
    return numbers.reduce((acc, cur) => acc += cur, 0)
}

console.log(sumAll(3, 6, 1, 9, 5))

// ===== Closures

function createPerson (name) {
    return function(lastName) {
        console.log(name + ' ' + lastName)
    }
}

const addLastName = createPerson('Dani')
addLastName('Soldatov')
addLastName('Minin')