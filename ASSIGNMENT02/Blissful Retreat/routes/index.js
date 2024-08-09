var express = require('express');
var router = express.Router();

/* Main home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

// Booking page route
router.get('/book', function(req, res, next) {
  res.render('book', { title: 'Book Online' });
});

// Login page route
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Log In' });
});

// Register page route (Optional: can be combined with login if desired)
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' });
});

module.exports = router;
