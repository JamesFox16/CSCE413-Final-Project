const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    let results = await db.all();
    res.json(results);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.get('/boardingtotal', (req, res, next) => {
  res.json({ test: 'test' });
});

router.get('/derail', (req, res, next) => {
  res.json({ test: 'test' });
});

router.get('/lstop', (req, res, next) => {
  res.json({ test: 'test' });
});

router.get('/merail', (req, res, next) => {
  res.json({ test: 'test' });
});

module.exports = router;
