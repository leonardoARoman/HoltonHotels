var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Holton Hotels' }); // calls index.jade in the views folder
});

module.exports = router;
