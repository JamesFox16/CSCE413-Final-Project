const mysql = require('mysql');
const secret = require('./dblogin.json');

const pool = mysql.createPool({
  connectionLimit: secret.connectionLimit,
  password: secret.password,
  user: secret.user,
  database: secret.database,
  host: secret.host,
  port: secret.port
});

let data = {};

data.all = () => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM dailyRiders`, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

module.exports = data;

