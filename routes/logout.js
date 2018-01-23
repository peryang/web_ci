var express = require('express');
var router = express.Router();
var parseResponse = require("../func/parseResponse");

router.get('/', function (req, res) {
	req.session.destroy();
	res.send(parseResponse.success(1, "", "logout success!"));
});

module.exports = router;
