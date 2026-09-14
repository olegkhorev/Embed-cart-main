var mobile_ec_menu_clicked = false;
(function($) {
"use strict";
  $ec(document).ready(function() {
	setMetaScale();
  });
})($);

function mobile_ec_menu_open() {
		if (mobile_ec_menu_clicked) {
			mobile_ec_menu_clicked = false;
			$ec('.mobile-left_ec_menu').animate({left: -500}, 500);
		} else {
			var top = $ec(window).scrollTop() + 106;
			$ec('.mobile-left_ec_menu').css('top', top+'px');
			mobile_ec_menu_clicked = true;
			$ec('.mobile-left_ec_menu').animate({left: 0}, 500);
		}
}

function login_clicks() {
		$ec('form[name=login]').on('submit', function() {
			var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
				email = $ec('.login_table [name="email"]').val();

			if (!email || !r.test(email)) {
				func_highlight($ec('.login_table [name="email"]'));
				return false;
			}

			if (!$ec('.login_table [name="password"]').val()) {
				func_highlight($ec('.login_table [name="password"]'));
				return false;
			}

			$ec('form[name=login]').submit();
		});
}

function setMetaScale() {
	var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
	if (iOS)
		$ec('body').addClass('its_ios');

	$ec('body').show();

	var orientation = window.orientation;

	if (iOS) {
		if (typeof orientation !== "undefined") {
			if (orientation == 0) {
				var w = window.screen.width,
					x = w / 320;
			} else {
				var w = window.screen.height,
					x = w / 320;
			}
		} else {
			var mql = window.matchMedia("(orientation: portrait)");
			var orientation = screen.orientation.angle;
			if (orientation == 0) {
				var w = window.screen.width,
					x = w / 320;
			} else {
				var w = window.screen.height,
					x = w / 320;
			}
		}
	} else
		var w = window.screen.width,
			x = w / 320;

	$ec('#viewport').attr('content', 'width=320, initial-scale='+x+', user-scalable=no');
}

window.addEventListener("orientationchange", function(event) {
	setTimeout(function() {
		setMetaScale();
	}, 500);

	return;
}, false);