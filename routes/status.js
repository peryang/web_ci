var express = require('express');
var router = express.Router();
var parseResponse = require("../func/parseResponse");

router.get('/', function(req, res) {
	if(req.session.user){
		res.send(parseResponse.success(1, "", "login success!"));
	}else{
		res.send(parseResponse.error(-1, "", "Unauthorized!"));
	}
});

module.exports = router;
