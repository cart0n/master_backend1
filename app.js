var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let MongoClient = require('mongodb').MongoClient;
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

getdb();
async function getdb() {
    global.connection = await MongoClient.connect("mongodb://127.0.0.1:27017", {
      useUnifiedTopology: true,
        useNewUrlParser: true
    })
    global.database = await global.connection.db("acom");
    global.news = await global.database.collection('news');
    global.actions = await global.database.collection('actions');
    global.tariff = await global.database.collection('tariff');
    global.call = await global.database.collection('call');
  }

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
