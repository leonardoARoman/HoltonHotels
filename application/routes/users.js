var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Register rout.
router.get('/register', function(req, res, next) {
  res.render('register',{title:'Register'});
});

// Login rout.
router.get('/login', function(req, res, next) {
  res.render('login',{title:'Login'});
});

// Get field texts.
router.post('/register', upload.single(), function(req, res) {
  console.log(req.body.name);
});

module.exports = router;
