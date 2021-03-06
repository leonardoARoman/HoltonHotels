var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var expressValidator = require('express-validator');
var localStrategy = require('passport-local').Strategy;
var multer = require('multer');
var upload = multer({dest:'./uploads'});
var flash = require('connect-flash');
var index = require('./routes/index');
var users = require('./routes/users');


var app = express();
/*

var mysql = require('mysql');

const db = mysql.createConnection({
  host      : 'localhost',
  user      : 'root',
  password  : 'LEoking1987',
  database  : 'hhdbms'
});

// Conect to MySql DBMS
db.connect((err) => {
  if(err){
      throw err;
  }
  console.log('mysql connected...');
});

// Creates satabase if it does not exist yet.
app.get('/a',(req,res) => {
    let sql = 'CREATE DATABASE IF NOT EXISTS hhdbms';
    db.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      //res.send('Database created...');
    });
    //console.log('hhdbms database exists...');
});

// Create users table
app.get('/b',(req,res) => {
    let sql = 'CREATE TABLE user(name varchar(30), '+
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
});
*/
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Handle sessions
app.use(session({
  secret:'secret',
  saveUninitialized:true,
  resave:true
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value){
    var namespace = param.split('.'),
    root = namespace.shift(),
    formParam = root;
    while (namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return{
      param : formParam,
      msg:  msg,
      value: value
    };
  }
}));

app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
