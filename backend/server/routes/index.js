const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    let results = await db.boardingTotalAll();
    res.json(results);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.get('/boardingtotal', async (req, res, next) => {
  try {
    let results = await db.boardingTotalAll();
    res.json(results);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.get('/boardingtotal/date/:date', async (req, res, next) => {
  try {
    let results = await db.boardingTotalDate(req.params.date);
    res.json(results);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.get('/derail', async (req, res, next) => {
  try {
    let results = await db.dailyEntriesAll();
    res.json(results);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.get('/derail/date/:date', async (req, res, next) => {
  try {
    let results = await db.dailyEntriesDate(req.params.date);
    res.json(results);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.get('/derail/station/:station', async (req, res, next) => {
  console.log('derail');
  try {
    let results = await db.dailyEntriesStationId(req.params.station);
    res.json(results);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.get('/merail', async (req, res, next) => {
  try {
    let results = await db.monthlyEntriesRailAll();
    res.json(results);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.get('/merail/month/:month', async (req, res, next) => {
  try {
    let results = await db.monthlyEntriesRailMonth(req.params.month);
    res.json(results);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.get('/merail/station/:station', async (req, res, next) => {
  try {
    let results = await db.monthlyEntriesRailStationId(req.params.station);
    res.json(results);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.get('/lstop', async (req, res, next) => {
  res.json({ test: 'test' });
});

module.exports = router;
