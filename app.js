const createError = require('http-errors');
const express = require('express');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const router = require('./routes/api');

const uri = "mongodb+srv://mongodb_user:mongodb_password@cluster0.8gcqw.mongodb.net/mongodb_database?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error'));

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Backend:
app.use('/api', router);

// Frontend:
app.use(express.static(path.join(__dirname, './fe/build')));
app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname, './fe/build/index.html'))
})

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
