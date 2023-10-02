console.log('start');
console.log('start2');

function timeout2sec() {
    console.log('timeout2sec');
}

window.setTimeout(function() {
    console.log('Inside timeout, after 2 seconds');
}, 3000)

setTimeout(timeout2sec, 2000)

console.log('End');