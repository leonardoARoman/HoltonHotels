var express = require('express');
var router = express.Router();
var mysql = require('mysql');

// Make connection to MySql
const db = mysql.createConnection({
  host      : 'localhost',
  user      : 'root',
  password  : 'LEoking1987',
  database  : 'hhdbms'
});

// Test connection to MySql DBMS
db.connect((err) => {
  if(err){
      throw err;
  }
});

/* GET users listing. */
router.get('/',(req, res, next) => {
  res.send('respond with a resource');
});

// Register rout.
router.get('/register',(req, res, next) => {
  res.render('register',{title:'Register'});
});

// Login rout.
router.get('/login', (req, res, next) => {
  res.render('login',{title:'Login'});
});

// Get info from register text fields .
router.post('/register',(req, res) => {

  req.checkBody('name','').notEmpty();
  req.checkBody('email','').notEmpty();
  req.checkBody('email','').isEmail();
  req.checkBody('username','').notEmpty();
  req.checkBody('password','').notEmpty();
  req.checkBody('password2','Pass do not match').equals(req.body.password);

  var errors = req.validationErrors();

  if(errors){
    res.render('register',{
      errors:errors
    });
  }else{
    // Query: add new user to the database.
    let user = { name:req.body.name,
                 email:req.body.email,
                 username:req.body.username,
                 password:req.body.password };

    let query = 'INSERT INTO user SET ?';

    let saveUser = db.query(query,user,(err,result) => {
      if(err) throw err;
      console.log(result);
    });
    console.log('Passed');
  }
  //console.log(uname+'\n'+uemail+'\n'+userName+'\n'+upassword+'\n'+upassword2);
});

// Get info from login text fields .
router.post('/login',(req, res) => {

  req.checkBody('username','').notEmpty();
  req.checkBody('password','').notEmpty();

  var errors = req.validationErrors();

  if(errors){
    res.render('login',{
      errors:errors
    });
  }else{
    // Query: get username and password for validation.
    let query = 'SELECT userName, password '+
                'FROM user '+
                'WHERE userName = ?';

    let getinfo = db.query(query,req.body.username,(err,results,fields) => {
      if(err) throw err;
      console.log(results);
    });

    console.log('Passed');
  }
  //console.log(uname+'\n'+uemail+'\n'+userName+'\n'+upassword+'\n'+upassword2);
});

module.exports = router;
