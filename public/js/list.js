$(document).ready(function(){
	$.ajax({
		url: "http://10.234.137.25:3000/status",
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
		url: "http://10.234.137.25:3000/logout",
		type: "get",
		success: function(data){
			
		},
		error: function(e){
			console.error(e);
		}
	});
});