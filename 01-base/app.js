let num = 23
let firstName = 'Dani'
// const isProgrammer = true

/* Can Do

let $ = 'test'
let $num = 43
let num$ = 23
let _ = 40
let num_ = 50
let _num = 60
let first_name = 'Elena' // Bad
let myNum = 523 //Good
let num1 = 44
*/

/* Restricted

let 54num = '11'
let my-num = 1
let false
*/


// firstName = 'Max'
// isProgrammer = false //error

// alert(firstName)
// console.log(firstName)

// console.log(num + 10)
// console.log(num - 10)
// console.log(num * 10)
// console.log(num / 10)

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')

const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = '+'

const submitBtn = document.getElementById('submit')

// const sum = Number(input1.value) + Number(input2.value)
// resultElement.textContent = sum

plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}

function printResult(result) {
    console.log('Result to print', result)
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = +inp1.value
    const num2 = +inp2.value
   

    const result = actionSymbol == '+' ? num1 + num2 : num1 - num2
    return result
    // if (actionSymbol == '+'){
    //     return num1 + num2
    // }
    // if (actionSymbol == '-'){
    //     return num1 - num2
    // }

}

submitBtn.onclick = function () {

    const result = computeNumbersWithAction(input1, input2, action)
    printResult(result)


    // if (action == '+') {
    // const sum = Number(input1.value) + Number(input2.value)
    // printResult(sum)
    // }
    // else {
    // const sum = Number(input1.value) - Number(input2.value)
    // printResult(sum)
    // }
}

// alert(resultElement.textContent)

// resultElement.textContent = 47


