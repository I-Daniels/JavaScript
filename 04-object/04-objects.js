const person = {
    name: 'Dani',
    age: 20,
    girlFriend: false,
    language: ['en', 'ru'],
    address: {
        city: 'NN',
        street: 'Koreyskaya'
    },
    'complex key': 'complex',
    ['key_' + 21 * 2]: 'computed value',
    greet() {
        console.log('Greet grom person', this)
    },
    arrow: () => {
        console.log('Person arrow', this)
    },
    info() {
        console.log('Person name', this,name)
    },
}
// console.log(person)
// person.arrow()


// console.log(person.address)
// const addressKey = 'address'
// console.log(person[addressKey])
// console.log(person['complex key'])

// person.age++
// console.log(person.age)
// person.language.push('de')
// console.log(person.language)

// person.address = undefined .....не надо так
// delete person.address
// console.log(person)

// ===Destructoring
// const age = person.age
// const name = person.name
// const language = person.language

// const name = 'Petr'

// const {age, name: firstName = 'TEST', language} = person

// console.log(language, age, firstName)


// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log(person[key])
//     }
// }

// Object.keys(person).forEach(key => {
//     console.log(person[key])
// })

const logger = {
    keys(withText = true) {
        if (withText){
            console.log('Object keys', Object.keys(this))
        }
        console.log(Object.keys(this))
        
    },

    keysAndValues() {
    Object.keys(this).forEach(key => {
        console.log('Key:', key)
        console.log('Value:', this[key])
    })
    },
}

// const bound = logger.keys.bind({a: 1})
// bound()

// logger.keys.bind(person, false)()

// logger.keys.call(person, false)
// logger.keys.apply(person, [false])

class Human {
    static isHuman = true

    humanGreet() {
        console.log('greet from human')
    }
}


class Person extends Human {
    constructor(name, age) {
        super()
        this.name = name ?? 'Undefined name'
        this.age = age ?? 'Undefined age'
    }

    sayHello () {
        console.log('Hello from ', this.name)
    }
}

const person1 = new Person('Dani', 20)
const person2 = new Person('Vlad', 21)
console.log(Person.isHuman)



