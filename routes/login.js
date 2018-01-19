var express = require('express');
var router = express.Router();
var users = require("../database/users")["users"];

router.get('/', function (req, res) {
	var userName = req.query.username;
	var psd = req.query.password;
  if (!userName || !psd) {
    res.send('login failed');    
  }else{
  	if(!users[userName]){
  		res.send('user does not exist');
  	}else{
  		if(psd === users[userName]) {
		    req.session.user = userName;
		    res.send("login success!");
		  }else{
		  	res.send('password error');
		  }
  	}
  }
});

module.exports = router;
