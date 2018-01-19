var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  req.session.destroy();
  res.send("logout success!");
});

module.exports = router;
