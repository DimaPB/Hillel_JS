const getDelay = (from, to) => Math.floor(Math.random() * (to - from + 1)) + from;

const promiseA = new Promise(resolve => setTimeout(resolve, getDelay(100, 500), 'First'));
const promiseB = new Promise((resolve, reject) => setTimeout(reject, getDelay(100, 500), 'Second'));
const promiseC = new Promise(resolve => setTimeout(resolve, getDelay(100, 500), 'Third'));

Promise.race([promiseA, promiseB, promiseC])
    .then(x => console.log('Fulfilled: ', x))
    .catch(x => console.log('Rejected: ', x));