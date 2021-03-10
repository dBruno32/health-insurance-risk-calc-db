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

  v = new validator();

  if(v.testInputIsEmpty(height) || v.testInputIsEmpty(weight)) {
    return res.render('errors/emptyfield');
  }

  if(!v.testInputIsNumber(height) || !v.testInputIsNumber(weight)) {
    return res.render('errors/nonnumbers');
  }


  const user = new User(
    age, height, weight,
    systolic, diastolic,
    [diabetes, cancer, alzheimers]
  );

  // TODO: Validation
  //  res.redirect();

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
