<?php
include 'includes/settings.php';
?>
/*
document.write('<style type="text/css" media="all">@import url("<?php echo $web_dir; ?>/var/cache/css.css?<?php echo $css_js_cache; ?>");</style>');
*/
if (!document.getElementById('embed_cart_area')) {
	document.write('<div class="embed-cart-area"></div>');
	document.write('<style>.ec_progress{top: 80px; margin: 0 auto; position: relative;height: 10px;width: 250px;border: 10px solid #2e2e2e;border-radius: 15px;}.ec_progress .color{position: absolute;background-color: #aaa;width: 0px;height: 10px;border-radius: 15px;animation: progres 4s infinite linear;}@keyframes progres{0%{  width: 0%;}25%{width: 50%;}50%{width: 75%;}75%{width: 85%;}100%{width: 100%;}};</style>');
} else {
	document.getElementById('embed_cart_area').innerHTML = '<style>.ec_progress{top: 80px; margin: 0 auto; position: relative;height: 10px;width: 250px;border: 10px solid #2e2e2e;border-radius: 15px;}.ec_progress .color{position: absolute;background-color: #aaa;width: 0px;height: 10px;border-radius: 15px;animation: progres 4s infinite linear;}@keyframes progres{0%{  width: 0%;}25%{width: 50%;}50%{width: 75%;}75%{width: 85%;}100%{width: 100%;}};</style>';
}

if (window.jQuery) {
	load_embed_cart();
} else {
	var script = document.createElement('script');
	script.onload = function () {
		load_embed_cart();
	};

	script.src = '//code.jquery.com/jquery-1.12.4.min.js';
	document.head.appendChild(script); //or something of the likes
}

//var $ec = '';
function load_embed_cart() {
//	$ec = jQuery;

$.ajaxSetup({
      xhrFields: {
           withCredentials: true
      },
      crossDomain: true,
});

	var ec_host = '',
		ec_get_host = '';
	if ($('#embed_cart_script').size()) {
		var ec_url = new URL($('#embed_cart_script').attr('src'));
		ec_get_host = ec_url.searchParams.get("host");
		if (ec_get_host)
			ec_host = 'https://'+ec_get_host;
	}

	host = 'https://ec.com';
	var add_href = '';
	if (window.location.href.indexOf('#!') > -1) {
		var tmp = window.location.href.split('#'),
			tmp = tmp[1].split('!');

		add_href = tmp[1];
	}

	$('.embed-cart-area').html('<div id="embed_cart_loader" style="background: #fff; height: 200px; border-radius: 25px;"><div class="ec_progress"><div class="color"></div></div></div>');
	if (!(add_href.indexOf('?') > -1)) {
		add_href = add_href+'?';
	}
//return;
	$.ajax({
		url: ec_host+'<?php echo $web_dir; ?>/'+add_href+'&original=1&its_ajax_page=1'
	}).done(function(r) {
//		alert('1');
		$('.embed-cart-area').css('opacity', '0');
		$('.embed-cart-area').append(r);
	});
}