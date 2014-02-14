// JavaScript Document

$(document).ready(function() {
    document.addEventListener("deviceready",function(){
		$('#B1').tap(function(){
			navigator.notification.beep(1);
			
		});//cierra tap B1
		
	});//cierra listener
});//cierra ready