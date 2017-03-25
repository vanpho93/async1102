// const aPromise = new Promise((resolve, reject) => {
//     // resolve(9);
// });

// aPromise
// .then(res => console.log('Thanh cong', res))
// .catch(err => console.log('That bai'));

const getPromise = (a, b) => (
    new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            return reject(new Error('Tham so phai co kieu number'));
        }
        resolve(a + b);
    })
);

getPromise(4, 5)
.then(res => console.log(res));


