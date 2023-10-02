// Theory
/*
const array = [1, 2, 3, 5, 20, 42]
const array = new Array(1,2,3,5,20,42)
const arrayString = ['a', 'b', 'c']

console.log(array.length)
console.log(array[4])
console.log(array[array.length - 1])
array[0] = 'Hello'
console.log(array)
*/

const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

// console.log(inputElement.value)

// const notes = ['скоро учеба', 'отвезти документы']

// function render() {
// for (let note of notes) {
//     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
// }
// }

// createBtn.onclick = function () {
// if (inputElement.value.length === 0) {
//     return
// }
//     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(inputElement.value))
//     inputElement.value = ''
// }

// function getNoteTemplate(title) {
//     return `
//     <li
//         class="list-group-item d-flex justify-content-between align-items-center"
//     >
//     <span>${title}</span>
//         <span class="btn btn-small btn-success">&check;</span>
//         <span class="btn btn-small btn-danger">&times;</span>
//     </li>
//     `
// }

/* Object

* Object Theory

const person = {
    firstName: "Dani",
    lastName: "Soldatov",
    year: 2003,
    hasGirlFriend: false,
    languages: ['English', 'Russian'],
    getFullnName: function() {
        console.log(person.firstName + ' ' + person.lastName)
    }

}

const key = 'hasGirlFriend'
console.log(person[key])
*/

const notes = [
    {
    title: '14 учеба',
    completed: false,
},
    {
    title: 'отдать документы',
    completed: true,
},
]

function render() {
    listElement.innerHTML = ''
    if (notes.length == 0) {
        listElement.innerHTML = '<p class="noNotes"> Нет элементов</p>'
    }
    for (let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
    }
}

render()

createBtn.onclick = function () {
    if (inputElement.value.length === 0) {
        return
    }
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(inputElement.value))
        inputElement.value = ''
    }

createBtn.onclick = function () {
    if (inputElement.value.length === 0) {
        return
    }
    const newNote = {
        title: inputElement.value,
        completed: false,

    }
        notes.push(newNote)
        render()
        inputElement.value = ''
    }

    listElement.onclick = function (event) {
        if (event.target.dataset.index) {
            const index = parseInt(event.target.dataset.index)
            const type = event.target.dataset.type

            if(type === 'toggle') {
                notes[index].completed = !notes[index].completed
                console.log('toggle', index)
            } else if (type === 'remove')
            notes.splice(index, 1)
        }
        render()
    }

function getNoteTemplate(note, index) {

    return `
    <li
        class="list-group-item d-flex justify-content-between align-items-center"
    >
        <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}
        </span>
            <span>
                <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}" 
                data-index="${index}" data-type="toggle">&check;</span>
                <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
            </span>
    </li>
    `
}
