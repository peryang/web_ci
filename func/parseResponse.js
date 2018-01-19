module.exports = {
	success: function(code, data, msg){
		return JSON.stringify({
			"status": "success",
			"code": code,
			"data": data,
			"msg": msg
		});
	},
	error: function(code, data, msg){
		return JSON.stringify({
			"status": "error",
			"code": code,
			"data": data,
			"msg": msg
		});
	}
};