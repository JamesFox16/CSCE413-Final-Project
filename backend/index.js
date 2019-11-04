const express = require('express');
const app = express();
const port = 3001;

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');// TODO: Fix this call to the database file.

app.get('/', (req, res) => res.send('request successful'));

app.listen(port, () => console.log(`Listening on port ${port}`));