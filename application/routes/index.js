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
  console.log('mysql connected...');
});

/* GET home page. */
router.get('/', function(req, res, next) {

  let CREATE_DB = 'CREATE DATABASE IF NOT EXISTS hhdbms';
  db.query(CREATE_DB, (err, result) => {
    if(err) throw err;
    console.log(result);
    //res.send('Database created...');
  });
  /*
  let USER_TABLE = 'CREATE TABLE user(name varchar(30), '+
                              'email VARCHAR(30), '+
                              'userName VARCHAR(30), '+
                              'password VARCHAR(30), '+
                              'PRIMARY KEY(userName));';

  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('User Table Created...');
    console.log('User table created...');
  });
  */

  res.render('index', { title: 'Holton Hotels' }); // calls index.jade in the views folder
});

module.exports = router;
