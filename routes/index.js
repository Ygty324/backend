var express = require('express');
var router = express.Router();

/* GET home page. *//* Ana sayfanın rotası */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
