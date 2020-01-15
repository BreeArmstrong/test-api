var express = require('express');
var router = express.Router();
const uuid = require('uuid');


const wineReviews = require("../db/wine-reviews");
const resultsPerPage = 20;

/* GET users listing. */
router.get('/', function (req, res) {
  const {page} = req.query;
  if (page) {
    const startIndex = (page - 1) * 20;
    res.json(wineReviews.slice(startIndex, startIndex + 20));
  }
  res.json(wineReviews)
});

module.exports = router;
