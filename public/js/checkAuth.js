function sfAjax(options) {
	options = options || {};
	options.type = (options.type || "GET").toUpperCase();
	options.dataType = options.dataType || "json";
	var params = formatParams(options.data);
	var xhr;
	//创建 - 第一步
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	} else if(window.ActiveObject) {//IE6及以下
		xhr = new ActiveXObject('Microsoft.XMLHTTP');
	}
	 
	//连接 和 发送 - 第二步
	if (options.type == "GET") {
		xhr.open("GET", options.url + "?" + params, true);
		xhr.send(null);
	} else if (options.type == "POST") {
	xhr.open("POST", options.url, true);
		//设置表单提交时的内容类型
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.send(params);
	}
	
	//接收 - 第三步
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			var status = xhr.status;
			if (status >= 200 && status < 300 || status == 304) {
				options.success && options.success(xhr.responseText, xhr.responseXML);
			} else {
				options.error && options.error(status);
			}
		}
	}
}

//格式化参数
function formatParams(data) {
	var arr = [];
	for (var name in data) {
		arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
	}
	arr.push(("v=" + Math.random()).replace("."));
	return arr.join("&");
}

sfAjax({
	url: "http://10.234.137.25:3000/status",
	type: "get",
	dataType: "json",
	success: function (data) {
		var result = JSON.parse(data);
		if(result.status == "error"){
			window.location.href = "/index.html";
		}
	},
	error: function (e) {
		console.error("请求出错");
	}
});