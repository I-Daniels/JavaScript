const names = ['Даниил', 'Алеша', 'Вика', 'Лера']

// names.push('Алена')
// names.unshift('Алена')

// const name = names.shift()
// const name = names.pop()

// console.log('Names: ', names, name)

// console.log(names.reverse())
// const reversed = names.toReversed()
// const letters = ['r', 'a', 'g', 'n', 'f']
// console.log(letters.toSorted())
// console.log(names)

// console.log(names.splice(0, 2))
// console.log(names.toSpliced(0, 2))
// console.log(names)

// const greatWoman = 'Вика'
// const index = names.indexOf(greatWoman)
// console.log(index)
// const newNames = names.with(index, 'Вика Прекрасная')
// console.log(newNames)
// console.log(names[index])

// const capitalNames = names.map(function(name, index) {
//     if (index === 1) {
//         return "Алеша Durak"
//     }
//     return name
//     // return name.toUpperCase()
//     // return name.toLowerCase()
// })

// console.log(capitalNames)

// console.log(names.includes('Вика'))
// console.log(names.indexOf('Вика') !== -1)

const people = [
    {name: 'Даниил',
    budget: 1000,  
},
    {name: 'Алеша',
budget: 1400,  
},
    {name: 'Вика',
budget: 1200,  
},
    {name: 'Лера',
budget: 2000,  
},
]


// let findedPerson

// for (let person of people) {
//     if (person.budget === 2000) {
//         findedPerson = person
//     }
// }

// const findedPerson = people.find(function(person) {
//     return person.budget === 2000
//     // if (person.budget === 2000) {
//     //     return true
//     // }
// })

// const finded = people.findIndex(function(person) {
//     return person.budget === 2000
// })

// const finded = people.find((p) => p.budget === 2000)



// console.log(people.with(finded, 42))
// let sumBudget = 0
// const filtered = people.filter(function(p) {
//     return p.budget > 1000
// })

// console.log(filtered)

// filtered.forEach(function(p) {
//     sumBudget += p.budget
// })



// const sumBudget = people
//     .filter((p) => p.budget > 1000)
//     .map((p) => p.budget)
//     .reduce((acc, p) => acc + p, 0)

// console.log(sumBudget)


const string = 'Привет, как дела?'
const reversed = string
.split('')
.toReversed()
.join('!')
.split('')
.filter(c => c != '!')
.join('')

console.log(reversed)


