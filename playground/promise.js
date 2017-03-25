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

add(4, 5)
.then(res => console.log(res))
.catch(err => console.log(err));


