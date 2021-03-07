const express = require('express');
const router = express.Router();
const User = require('../models/User');

//  Landing - index.hbs
router.get('/', (req, res) => {
    res.render('index');
});

router.post('/calc', (req, res) => {
    const age = req.body.age;
    const weight = req.body.weight;
    const height = req.body.height;
    const systolic = req.body.systolic;
    const diastolic = req.body.diastolic;
    const diabetes = req.body.diabetes;
    const cancer = req.body.cancer;
    const alzheimers = req.body.alzheimers;

    const user = new User(
        age, height, weight, 
        systolic, diastolic, 
        [diabetes, cancer, alzheimers]
    );


    res.render('summary', {
         ageScore: user.getAgeScore(),
         bmiScore: user.getBMIScore(),
         bpScore: user.getBloodPressureScore(),
         familyHistoryScore: user.getFamilyHistoryScore(),
         totalScore: user.getTotalScore(),
         scoreString: user.getScoreString()
    });
});

module.exports = router;