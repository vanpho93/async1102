const fs = require('fs');

const request = require('then-request');

const write = (data, filename) => (
    new Promise((resolve, reject) => {
        fs.writeFile(filename, data, 'utf8', err => {
            if (err) return reject(err);
            resolve();
        });
    })
);

request('GET', 'http://vtimes.com.au/tu-vi-phuong-dong-thu-sau-24-03-2017-2591684.html')
.then(res => res.getBody('utf8'))
.then(body => write(body, 'b.txt'))
.catch(err => console.log(err));
