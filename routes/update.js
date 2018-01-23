var express = require('express');
var router = express.Router();
var parseResponse = require("../func/parseResponse");

var spawn = require("child_process").spawn;


router.get('/', function(req, res) {
	if(req.session.user){
		var project = req.body.project;
		var free = spawn('sh', ['../bash/lake.sh']);
		
		free.stdout.on("data", function(data){
			console.log("success: \n" + data);
		});
		
		free.stderr.on('data', function (data) {
			console.log('error: \n' + data);
		});
		
		free.on('exit', function (code, signal) {
			console.log('child process eixt ,exit:' + code);
		});
		
		res.send(parseResponse.success(1, "", "success!"));
	}else{
		res.send(parseResponse.error(-1, "", "error!"));
	}
});

module.exports = router;
