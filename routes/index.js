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
  const heightInFeet = req.body.heightfeet;
  const heightInInches = req.body.heightinches;
  const weight = req.body.weight;
  const systolic = req.body.systolic;
  const diastolic = req.body.diastolic;
  const diabetes = req.body.diabetes;
  const cancer = req.body.cancer;
  const alzheimers = req.body.alzheimers;
  
  // Validations on user input
  const v = new validator();

  // Empty Input
  if(v.testInputIsEmpty(weight)) {
    return res.render('errors/emptyfield');
  }

  // Weight Non Numbers
  if(v.testInputIsNumber(weight) == false) {
    return res.render('errors/nonnumbers');
  }

  // Instantiates user
  const user = new User(
    age, [heightInFeet, heightInInches], weight,
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
