var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


/** PRUEBAS MYSQL------------ */

// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   port: 3306,
//   database: 'controlhours'
// });

// connection.connect((error) => {
//   if (error) return console.log(error);
//   console.log('Se ha conectado correctamente');
//   connection.query('select * from lists', (error, rows) => {
//     if (error) return console.log(error);
//     console.log(rows);
//   });
// });
/** FIN PRUEBAS MYSQL----------- */

// npm install mysql and dotenv
// create and configure => dbConfig and .env 
// require .createPool
require('./dataBaseConfig').createPool();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api',apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
