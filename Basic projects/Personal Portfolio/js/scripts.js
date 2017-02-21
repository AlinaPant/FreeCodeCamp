$(document).ready(function () {
	$(".main_menu").on("click","a", function(event) {
		event.preventDefault();
		var id = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

	var up = $('.to_top');
	up.click(function() {
		$('html, body').animate({ scrollTop: 0 }, 1000);
	});

	var $humb = $(".main_menu .humburger_menu");
	var $menu = $(".main_menu ul");
	$humb.on("click", function () {
		$menu.toggleClass("active");
		$(".main_menu").toggleClass("h");
	});
});