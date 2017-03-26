
const pg = require('pg');

const config = {
  user: 'postgres',
  database: 'NODE1102',
  password: 'khoapham',
  host: 'localhost',
  port: 5432,
  max: 5,
  idleTimeoutMillis: 10000
};

const pool = new pg.Pool(config);

const query = (sql, arrayData) => (
    new Promise((resolve, reject) => {
        pool.connect((err, client, done) => {
            if (err) return reject(err);
            client.query(sql, arrayData, (errQuery, result) => {
                done(errQuery);
                if (errQuery) return reject(errQuery);
                return resolve(result);
            });
        });
    })
);

query('SELECT * FROM "Users"', [])
.then(result => console.log(result.rows))
.catch(err => console.log(err));
