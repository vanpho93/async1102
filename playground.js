// function add (a, b){
//     return a + b;
// }
// const add = (a, b) => a + b;

const add = (a, b, cb) => {
    setTimeout(() => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            return cb(new Error('Tham so phai co kieu number'));
        }
        cb(undefined, a + b);
    }, 1000);
};


