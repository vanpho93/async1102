const fs = require('fs');

// fs.readFile('./a.txt', 'utf8', (err, data) => {
//     if (err) return console.log(err);
//     console.log(data);
// });

const read = (filename) => (
    new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) return reject(err);
            resolve(data);
        });
    })
);

const write = (data, filename) => (
    new Promise((resolve, reject) => {
        fs.writeFile(filename, data, 'utf8', err => {
            if (err) return reject(err);
            resolve();
        });
    })
);

read('./a.txt')
.then(data => write(data, './b.txt'))
.then(() => console.log('THANH_CONG'));

// read('./a.txt2')
// .then(res => console.log(res))
// .catch(err => console.log(err + ''));

// write('123 dasfjda', './b.txt')
// .then(() => console.log('THANH_CONG'))
// .catch(err => console.log(err + ''));
