$(document).ready(function(){

	 $("#menu-open").click(function() {
            $(".menu-header").css("top", 0);
            $(this).css("display", "none");
            $("#menu-close").css("display", "block");
        });

        $("#menu-close").click(function() {
            $(".menu-header").css("top", -59);
            $(this).css("display", "none");
            $("#menu-open").css("display", "block");
        });

	var voltaMenu = function(){
		$('.side-menu').animate({
			marginLeft: "-220px"}, "slow")
	}
	var width = $( window ).width();

	$("#sec-avanco").click(function() {
		$('body,html').animate({
			scrollTop: $(".sec-avanco").offset().top}, "slow", function(){
				if(width <= 480){
					voltaMenu();
				}
			});
	});

	$("#sec-invasao").click(function() {
		$('body,html').animate({scrollTop: $(".sec-invasao").offset().top}, "slow",function(){
			if(width <= 480){
					voltaMenu();
				}
		});
	});

	$("#sec-lider").click(function() {
		$('body,html').animate({scrollTop: $(".sec-lider").offset().top}, "slow", function(){
			if(width <= 480){
					voltaMenu();
				}
		});
	});

	$("#sec-major").click(function() {
		$('body,html').animate({scrollTop: $(".sec-major").offset().top}, "slow", function(){
			if(width <= 480){
					voltaMenu();
				}
		});
	});

	$("#sec-ouvidor").click(function() {
		$('body,html').animate({scrollTop: $(".sec-ouvidor").offset().top}, "slow"), function(){
			if(width <= 480){
					voltaMenu();
				}
		};
	});

	$(".btn-menu").click(function(event) {
		$('.side-menu').animate({
			marginLeft: "0px"}, "slow")
	});

	$("#fechar").click(function(event) {
		$('.side-menu').animate({
			marginLeft: "-220px"}, "slow")
	});

});
