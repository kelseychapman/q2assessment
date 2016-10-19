if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session')
const knex = require('./db/knex');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const Handlebars = require('handlebars');
const routes = require('./routes/index');
const signup = require('./routes/signup');
const login = require('./routes/login');
const db = require('./db/api')

const app = express();

app.use(passport.initialize());

// passport.use(FacebookStrategy({
//         clientID: clientID,
//         clientSecret: clientSecret,
//         callbackURL: callbackURL,
//         profileFields: ['email', 'name', 'displayName', 'profileUrl'],
//         enableProof: true,
//         passReqToCallback: true
//     },
//
//     function(req, accessToken, refreshToken, profile, cb1) {
//         db.createOrLogin(profile, (err, user) => {
//             req.session.userInfo = user;
//             return cb1(null, user);
//         });
//     }
// ))

// passport.serializeUser(function(user, done) {
//     done(null, user.id);
// });
//
// passport.deserializeUser(function(id, done) {
//     User.findById(id, function(err, user) {
//         done(err, user);
//     });
// });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// // required for passport
// app.use(session({
//     secret: 'ilovescotchscotchyscotchscotch', // session secret
//     resave: true,
//     saveUninitialized: true
// }));
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions
// app.use(flash()); // use connect-flash for flash messages stored in session


app.use('/', routes);
app.use('/signup', signup)
app.use('/login', login)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
