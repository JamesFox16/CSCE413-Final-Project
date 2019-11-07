const express = require('express');
const db = require('../db');

const router = express.Router();

app.get('/', (req, res, next) => {
  try {
    let results = await db.all();
    res.json(results)
  } catch(e) {
    res.sendStatus(500);
  }
});

app.get('/boardingtotal', (req, res, next) => {
  res.json({ test: 'test' });
});

app.get('/derail', (req, res, next) => {
  res.json({ test: 'test' });
});

app.get('/lstop', (req, res, next) => {
  res.json({ test: 'test' });
});

app.get('/merail', (req, res, next) => {
  res.json({ test: 'test' });
});

module.exports = router;