// const aPromise = new Promise((resolve, reject) => {
//     // resolve(9);
// });

// aPromise
// .then(res => console.log('Thanh cong', res))
// .catch(err => console.log('That bai'));

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

// add(4, 5)
// .then(res => mul(res, 6))
// .then(result => div(result, 2))
// .then(square => console.log(square));

// const getSquare = (dai, rong, cao) => (
//     add(dai, rong)
//     .then(total => mul(total, cao))
//     .then(res => div(res, 2))
// );

// getSquare(4, '5', 6)
// .then(square => console.log(square))
// .catch(err => console.log(err + ''));

const getSquare = async (a, b, h) => {
    try {
        const total = await add(a, b);
        const abh = await mul(total, h);
        const square = await div(abh, 2);
        return Promise.resolve(square);
    } catch (e) {
        return Promise.reject(e);
    }
};

getSquare(3, 4, '2')
.then(square => console.log('Dien tich:', square))
.catch(err => console.log('Loi:', err));
