var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


//Прописування роутів(дороги)
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const userProduct = require('./routes/product');
const userGoogle = require('./routes/google');
const userDownload = require('./routes/dwnLoad');
const usersInfo = require('./routes/info');
const userBook = require('./routes/books');

var app = express();
app.use(usersInfo);//Date , method , url , ip.

// view engine setupc
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Вказування назви роута
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', userProduct);
app.use('/google', userGoogle);
app.use('/download' , userDownload);
app.use('/book' , userBook);


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
