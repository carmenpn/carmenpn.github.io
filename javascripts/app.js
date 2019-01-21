$(function() {
	mobileMenu();
	closeMobileMenu();

	if ($("body").hasClass("homepage")) {
		$(document).bind("scroll", function(e) {
			var scrollOffset = $(document).scrollTop();
			var progressBars = $(".progress-bars");
			var containerOffset = progressBars.offset().top - window.innerHeight;
			if (scrollOffset > containerOffset) {
				animateProgressBars();
				$(document).unbind("scroll");
			}
		})
	}


	function animateProgressBars() {
		$(".progress-bars_bar > div").each(function() {
			$(this).data("origWidth", $(this).width())
				   .width(0)
				   .animate({
				   		width: $(this).data("origWidth")
				   }, 2500);
		});
	}

	function mobileMenu() {
		$(".open-menu").click(function() {
			$(".mobile-menu").toggle();
		});
	}

	function closeMobileMenu() {
		$("#close-menu").click(function() {
			$(".mobile-menu").toggle();
		});
	}
});