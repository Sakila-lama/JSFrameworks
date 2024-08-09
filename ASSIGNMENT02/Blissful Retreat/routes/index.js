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

// Register page route 
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' });
});

// POST route to handle the form submission and redirect to the booking details page
router.post('/booking-details', function(req, res) {
  const selectedTreatment = req.body.treatment;

  // You can pass the selected treatment to the next page
  res.redirect(`/booking-details?treatment=${selectedTreatment}`);
});

// GET route to render the booking details page
router.get('/booking-details', function(req, res) {
  const treatment = req.query.treatment;
  
  // Render the page with the selected treatment details 
  res.render('booking-details', { treatment });
});



module.exports = router;
