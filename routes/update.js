var express = require('express');
var router = express.Router();
var parseResponse = require("../func/parseResponse");

router.get('/', function(req, res) {
	if(req.session.user){
		var project = req.query.project;
		//var project = req.body.project; post
		var free = "";
		switch(project){
			case "lake":
				//free = spawn('sh', ['./bash/lake.sh']);
				var exec = require("child_process").exec;
				exec("sh ./bash/lake.sh", function(error, stdout, stderr) {
					if (!error) {
						// things worked!
						console.log(1);
						return next(error);
					} else {
						// things failed :(
						console.log(2);
						return res.status(200).send(stdout);
					}
				});
				
				break;
			case "ark":
				free = spawn('sh', ['./bash/ark.sh']);
				break;
		}
		
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
