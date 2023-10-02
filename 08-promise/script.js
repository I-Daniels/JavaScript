console.log('request data...')

// setTimeout(() => {
//     console.log('Preparing data...');
//     const backendData = {
//         server: 'aws',
//         port: '2000',
//         status: 'working'
//     }

//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Data recived', backendData);
//     }, 2000)
// }, 2000)

// const p = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('Preparing data...');
//         const backendData = {
//             server: 'aws',
//             port: '2000',
//             status: 'working'
//         }
//         resolve(backendData)
//     }, 2000);
// })

// p.then(data => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         data.modified = true
//         resolve(data)
//         // console.log('Data recived', backendData);
//     }, 2000) 
//     })

// })
// .then(clientData => {
//     clientData.fromPromise = true
//     return clientData
// }).then(data => {
//     console.log('Modified', data);
// })
// .catch(err => console.log('Error', err))
// .finally(() => console.log('Finally'))

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
})
}

// sleep(2000).then(()=> console.log("after 2 second"))
// sleep(3000).then(()=> console.log("after 3 second"))

Promise.all([sleep(2000), sleep(5000)])
.then(() => {
    console.log('All promises')
})

Promise.race([sleep(2000), sleep(5000)])
.then(() => {
    console.log('Race promises')
})


