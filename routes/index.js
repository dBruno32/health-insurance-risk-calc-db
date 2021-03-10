const express = require('express');
const router = express.Router();
const User = require('../models/User');
const validator = require('../utils/validator');


// Home 
router.get('/', (req, res) => {
  res.render('index');
});

// Collect & calculate results from form
router.post('/calc', (req, res) => {
  const age = req.body.age;
  const height = req.body.height;
  const weight = req.body.weight;
  const systolic = req.body.systolic;
  const diastolic = req.body.diastolic;
  const diabetes = req.body.diabetes;
  const cancer = req.body.cancer;
  const alzheimers = req.body.alzheimers;
  
  // Validations on user input
  const v = new validator();

  // Empty Input
  if(v.testInputIsEmpty(height) || v.testInputIsEmpty(weight)) {
    return res.render('errors/emptyfield');
  }

  // Non Numbers
  //if(!v.testInputIsNumber(height) || !v.testInputIsNumber(weight)) {
  //  return res.render('errors/nonnumbers');
  //}

  // Instantiates user
  const user = new User(
    age, height, weight,
    systolic, diastolic,
    [diabetes, cancer, alzheimers]
  );

  res.render('summary', {
    layout: 'summary',
    totalScore: user.getTotalScore(),
    scoreString: user.getScoreString(),
    ageScore: user.getAgeScore(),
    bmiScore: user.getBMIScore(),
    bpScore: user.getBloodPressureScore(),
    familyHistoryScore: user.getFamilyHistoryScore(),
  });
});


module.exports = router;
