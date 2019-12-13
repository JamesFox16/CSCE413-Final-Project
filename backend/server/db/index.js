const mysql = require('mysql');
const secret = require('../dblogin.json');

const pool = mysql.createPool({
  connectionLimit: secret.connectionLimit,
  password: secret.password,
  user: secret.user,
  database: secret.database,
  host: secret.host,
  port: secret.port
});

let data = {};

data.boardingTotalAll = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM BoardingTotal', (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

data.boardingTotalDate = date => {
  return new Promise((resolve, reject) => {
    pool.query(
      'SELECT * FROM BoardingTotal WHERE service_date = ?',
      date,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

data.dailyEntriesAll = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM DailyEntriesRail', (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

data.dailyEntriesDate = date => {
  return new Promise((resolve, reject) => {
    pool.query(
      'SELECT * FROM DailyEntriesRail WHERE date = ?',
      date,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

data.dailyEntriesStationId = stationId => {
  return new Promise((resolve, reject) => {
    pool.query(
      'SELECT * FROM DailyEntriesRail WHERE station_id = ?',
      stationId,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

data.monthlyEntriesRailAll = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM MonthlyEntriesRail', (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

data.monthlyEntriesRailMonth = monthBegin => {
  return new Promise((resolve, reject) => {
    pool.query(
      'SELECT * FROM MonthlyEntriesRail WHERE month_beginning = ?',
      monthBegin,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

data.monthlyEntriesRailStationId = stationId => {
  return new Promise((resolve, reject) => {
    pool.query(
      'SELECT * FROM MonthlyEntriesRail WHERE station_id = ?',
      stationId,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

data.allTimesRidesByStation = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      'SELECT SUM(monthtotal) AS totalr, station_name FROM MonthlyEntriesRail GROUP BY station_name',
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

module.exports = data;
