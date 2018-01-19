var express = require('express');
var router = express.Router();
var auth = require('../func/auth')

router.get('/', auth, function (req, res) {
    res.send("You can only see this after you've logged in.");
});

module.exports = router;
