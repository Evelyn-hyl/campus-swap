var createError = require('http-errors');
const express = require('express');
var path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// const db = require('./db');
const dotenv = require('dotenv');
const { auth } = require('express-openid-connect');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

dotenv.config();

const app = express();

const baseURL = process.env.AUTH0_BASE_URL;
const issuerBaseURL = process.env.AUTH0_ISSUER_BASE_URL;
const clientId = process.env.AUTH0_CLIENT_ID;
const clientSecret = process.env.AUTH0_CLIENT_SECRET;

const port = process.env.PORT;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

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
  // // res.render('error');
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
});

// Auth0 Configuration
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: clientSecret,
  baseURL: baseURL,
  clientID: clientId,
  issuerBaseURL: issuerBaseURL
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

module.exports = app;
