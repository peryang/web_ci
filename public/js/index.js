function loginAction(){
				var username = $(".username").val();
	var psd = $(".password").val();
	if(!username || !psd){
		console.log("输入用户名和密码");
		alert("输入用户名和密码");
		return false;
	}
	var postData = {
		username: username,
		password: psd
	}
	$.ajax({
		url: "http://10.234.137.25:3000/login",
		type: "post",
		dataType: "json",
		data: postData,
		success: function(data){
			if(data.status == "success"){
				localStorage.setItem("username", username);
				window.location.href = "/list.html";
			}
		},
		error: function(e){
			console.error(e);
		}
	});
}

$(document).ready(function(){
	var username = localStorage.getItem("username") || "";
	$(".username").val(username);
	$.ajax({
		url: "http://10.234.137.25:3000/status",
		type: "get",
		dataType: "json",
		success: function(data){
			if(data.status == "success"){
				window.location.href = "/list.html";
			}
		},
		error: function(e){
			console.error(e);
		}
	});
});

$(document).on("click", ".login", function(ev){
	ev.stopPropagation();
	ev.preventDefault();
	loginAction();
});

$(document).on("keyup", ".password", function(ev){
	ev.stopPropagation();
	ev.preventDefault();
	if(ev.keyCode == 13){
		loginAction();
	}
});

$(document).on("click", ".logout", function(ev){
	ev.stopPropagation();
	ev.preventDefault();
	$.ajax({
		url: "http://10.234.137.25:3000/logout",
		type: "get",
		success: function(data){
			
		},
		error: function(e){
			console.error(e);
		}
	});
});