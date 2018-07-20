$(document).ready(function(){
	$.ajax({
		url: "/status",
		type: "get",
		dataType: "json",
		success: function(data){
			if(data.status == "error"){
				window.location.href = "/index.html";
			}
		},
		error: function(e){
			console.error(e);
		}
	});
});

$(document).on("click", ".logout", function(ev){
	ev.stopPropagation();
	ev.preventDefault();
	$.ajax({
		url: "/logout",
		type: "get",
		dataType: "json",
		success: function(data){
			if(data.status == "success"){
				window.location.href = "/index.html";
			}
		},
		error: function(e){
			console.error(e);
		}
	});
});