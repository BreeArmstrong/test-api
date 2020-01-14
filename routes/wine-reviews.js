var express = require('express');
var router = express.Router();
const uuid = require('uuid');


const wineReviews = require("../db/wine-reviews").map(r => ({
...r,
id: uuid.v4()
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(wineReviews)
});

module.exports = router;
