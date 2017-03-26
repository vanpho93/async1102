const data = require('./b');
const fs = require('fs');

const getBody = (str, pre, post) => {
    const start = str.indexOf(pre) + pre.length;
    const end = post ? str.indexOf(post) : str.length;
    return str.substring(start, end);
};

String.prototype.replaceAll = function(search, replacement) {
    const target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

const write = (info, filename) => (
    new Promise((resolve, reject) => {
        fs.writeFile(filename, info, 'utf8', err => {
            if (err) return reject(err);
            resolve();
        });
    })
);

class Tin {
	constructor(date, canchi, desc) {
        this.date = date;
        this.canchi = canchi;
        this.desc = desc;
	}

    static getAllItems() {
        const pre = 'Hợi, Mão, Mùi.</p>';
        const post = '</p></div>';
        const pureData = getBody(data.replaceAll('\n', ''), pre, post);
        return pureData.split('</p><p><strong>– <em>');
    }

    static getDate() {
        const pre = '<title>';
        const post = '</title>';
        const title = getBody(data, pre, post);
        return getBody(title, '(', ')');
    }
}

const convertItemToNews = (date, item) => {
    const canChi = getBody(item, '', '(').trim();
    const preDesc = getBody(item, '</em></strong></p><p>').trim();
    const desc = getBody(preDesc, '</strong></p><p>').trim();
    return new Tin(date, canChi, desc);
};

const arrayItems = Tin.getAllItems();
const date = Tin.getDate();

const arrNews = arrayItems.map(item => convertItemToNews(date, item));

write(JSON.stringify(arrNews), 'c.txt');
