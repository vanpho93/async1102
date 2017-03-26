//async await

const add = (a, b) => (
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a !== 'number' || typeof b !== 'number') {
                return reject(new Error('Tham so phai co kieu number'));
             }
            resolve(a + b);
        }, 1000);
    })
);

const mul = (a, b) => (
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a !== 'number' || typeof b !== 'number') {
                return reject(new Error('Tham so phai co kieu number'));
             }
            resolve(a * b);
        }, 1000);
    })
);

const div = (a, b) => (
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a !== 'number' || typeof b !== 'number') {
                return reject(new Error('Tham so phai co kieu number'));
             }
            resolve(a / b);
        }, 1000);
    })
);

// const addAsync = async (a, b) => {
//     const total = await add(a, b);
//     console.log(total);
// };

// addAsync(4, 5);

const getSquare = async (dai, rong, cao) => {
    const total = await add(dai, rong);
    const abh = await mul(total, cao);
    const square = await div(abh, 2);
    return square;
};

const a = getSquare(4, 5, '6');

console.log(a);

setTimeout(() => console.log(a), 3500);
