const express = require('express');
const router = express.Router();
const User = require('../models/User');


// Home 
router.get('/', (req, res) => {
  res.render('index');
});

// Collect & calculate results from form
router.post('/calc', (req, res) => {
  res.redirect('summary');
});

// Summary
router.get('/summary', (req,res) => {
  res.render('summary', {
    template: 'summary'
  });
});


module.exports = router;
