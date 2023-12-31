// Event Loop

// const timeout = setTimeout(() => {
//     console.log('after 2 second')
// }, 2000)

// clearTimeout(timeout)

// const timeou2 = setTimeout(() => {
//     console.log('after 3 second')
// }, 3000)
// let count = 0
// setInterval(() => {
//     console.log('tick', ++count)
// },5000)

// function delay(callback, time = 1000) {
//     setTimeout(callback, time)
// }

// const delay = (time = 1000) => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve([1, 2, 3])
//             // reject('Error in delay')
//         }, time)
//     })
//     return promise
// }

// delay(2500).then((data) => {
//     console.log('Timeout', data)
//     return data.map((x) => x ** 2)
// }).then(data => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// }).finally(() => console.log('Finally'))

const getData = () => new Promise(resolve => resolve([1, 2, 3]))

async function asyncExample() {
    try {
        const data = await getData()
        console.log(data)
    } catch (err) {
        console.log(err)
    } finally {
        console.log('Finally')
    }
}

asyncExample()

