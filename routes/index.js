const express = require('express');
const router = express.Router();
const User = require('../models/User');

//  Landing - index.hbs
router.get('/', (req, res) => {
    res.render('index');
});

router.post('/calc', (req, res) => {
    console.log(req.body);
});

module.exports = router;