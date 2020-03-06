var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //Ini mah buat di github
  res.render('index', { title: 'Express' });
});

module.exports = router;
