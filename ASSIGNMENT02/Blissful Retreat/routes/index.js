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

// GET route to fetch available slots for a selected date
router.get('/available-slots', function(req, res) {
  const date = req.query.date;

  // Example: Fetch slots from your database based on the selected date
  const slots = getAvailableSlots(date); 
  res.json({ slots });
});

function getAvailableSlots(date) {
  // Example logic to return available slots for a given date
  // database here
  const slots = {
    "2024-08-08": ["10:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"],
    "2024-08-09": ["9:00 AM", "12:00 PM", "2:00 PM"],
    // Add more dates and slots as needed
  };

  return slots[date] || [];
}


module.exports = router;
