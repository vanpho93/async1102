// (a + b) * h / 2

const add = (a, b, cb) => {
    setTimeout(() => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            return cb(new Error('Tham so phai co kieu number'));
        }
        cb(undefined, a + b);
    }, 1000);
};

const mul = (a, b, cb) => {
    setTimeout(() => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            return cb(new Error('Tham so phai co kieu number'));
        }
        cb(undefined, a * b);
    }, 1000);
};

const div = (a, b, cb) => {
    setTimeout(() => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            return cb(new Error('Tham so phai co kieu number'));
        }
        if (b === 0) return cb(new Error('Chia cho 0'));
        cb(undefined, a / b);
    }, 1000);
};

const getSquare = (dai, rong, cao, cb) => {

}; 

// add(4, 5, (err, result) => {
//     if (err) return console.log(`${err} `);
//     console.log(result);
// });
