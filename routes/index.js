const express = require('express');
const router = express.Router();

//  Landing - index.hbs
router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;