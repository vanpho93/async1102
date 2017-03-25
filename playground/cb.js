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
    add(dai, rong, (err, result) => {
        if (err) return cb(err);
        mul(result, cao, (errMul, resultMul) => {
            if (errMul) return cb(errMul);
            div(resultMul, 2, (errDiv, square) => {
                if (errDiv) return cb(errDiv);
                cb(undefined, square);
            });
        });
    });
}; 

getSquare(3, 2, '4', (err, square) => {
    if (err) return console.log(err + '');
    console.log('Dien tich:', square);
});

// add(4, 5, (err, result) => {
//     if (err) return console.log(`${err} `);
//     console.log(result);
// });

