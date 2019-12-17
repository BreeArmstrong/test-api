var express = require('express');
var router = express.Router();

const wineReviews = require("../db/wine-reviews");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(wineReviews)
});

module.exports = router;
