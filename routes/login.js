var express = require('express');
var router = express.Router();
var URL = require('url');
var users = require("../database/users")["users"];
var parseResponse = require("../func/parseResponse");

router.post('/', function(req, res, next) {
	console.log("login");
	var userName = req.body.username;
	var psd = req.body.password;
	console.log(userName, psd);
	if (!userName || !psd) {
		res.send(parseResponse.error(-1, "", "login failed"));
	}else{
		if(!users[userName]){
			res.send(parseResponse.error("-2", "", "user does not exist"));
		}else{
			if(psd === users[userName]) {
				req.session.user = userName;
				req.session.timeStamp = new Date().getTime();
				res.send(parseResponse.success(1, "", "login success!"));
			}else{
				parseResponse.error(code, data, msg)
				res.send(parseResponse.error(-1, "", "password error!"));
			}
		}
	}
});

module.exports = router;