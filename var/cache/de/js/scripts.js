var $ec = jQuery,
	ec_auto_click = false,
	$window = $ec(window),
	original_content,
	original_pageid,
	original_title,
	original_page,
	original_bread_crumbs,
	$animation_elements = $ec('.ec_page-container-2, .ec_page-container-news, .ec_page-container-blog'),
	are_you_sure = "Sind Sie sicher?",
	mobile_screen = 700,
	instant_search_ajax,
	yes = "Ja",
	no = "Keine",
	ok = "ok",
	chat_w = 0,
	alerts = Math.floor(Math.random() * 10000),
	at,
	bc = true,
	confirmed = false,
	ajaxed = false,
	hp = false,
	ie = (window.navigator.appName == "Microsoft Internet Explorer"),
	ff = navigator.userAgent.toLowerCase().indexOf('firefox') > -1,
	wid,rtm,
	cursor = [],
	pushed = false,
	original_content, original_title, original_bread_crumbs,
	body_ec_loading_t,
	body_id,
	pushed_history_ok = false,
	mobile_design = false,
	dontloadfilter = false;

if (typeof window.janrain !== 'object') window.janrain = {};
if (typeof window.janrain.settings !== 'object') window.janrain.settings = {};

$ec(window).scroll(function() {
	on_scroll_ec_header();
	scrolltop();
});

$ec(document).on('keyup', function(e) {
	if (e.keyCode == 27) {
		removePopups();
	}
});

$ec(window).resize(function() {
	on_scroll_ec_header();
});

function on_scroll_ec_header() {
	if ($ec('body').hasClass('admin-area') || !$ec('.embed-cart-area').size())
		return;

	$ec('#ec_head').css('max-width', $ec('.embed-cart-area').outerWidth()+'px');
	if ($ec(window).width() < 850 && $ec(this).scrollTop() > ($ec('.embed-cart-area').offset().top)) {
		$ec('body').addClass('embed_cart_scrolled');
	} else if ($ec(this).scrollTop() > ($ec('.embed-cart-area').offset().top + 50)) {
		$ec('body').addClass('embed_cart_scrolled');
	} else {
		$ec('body').removeClass('embed_cart_scrolled');
	}
}

$ec.ajaxSetup({
      xhrFields: {
           withCredentials: true
      },
      crossDomain: true,
});

(function($) {
"use strict";
  $ec(document).ready(function() {
//		$('.embed-cart-area').bind('click', function(event, ui) {
//			$(event.target).click();
//		});

		let url = window.location.href.split('?');

		if (strstr(window.location.href, '?') && !strstr(window.location.href, '#'))
			window.history.pushState({'page': 'home'},"", url[0]);

		$ec('#embed_cart_loader').remove();
		setTimeout(function() {
			$ec('.embed-cart-area').css('opacity', '1')
			$ec('.embed-cart-area').addClass('loaded');
//			$ec('html, body').animate({
//				scrollTop: 0
//			}, 10);
		}, 200)
  	on_scroll_ec_header();
	body_id = ec_this_page;
	$ec('body').attr('embed_cart_rel', 'body-'+ec_this_page);
	proceed_clicks(ec_this_page);//embed_cart_rel
	mobile_design = $ec('body').data('mobile');
	$ec('#subsform').on('submit', function() {
		var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if ($ec('#sub-email').val() && r.test($ec('#sub-email').val())) {
			$ec.ajax({
				url: current_location+'/subscribe?email='+$ec('#sub-email').val()+'&its_ajax_page=1'
			}).done(function(r) {
				ec_alert(r);
				$ec('.alert_message').css('top', '150px');
				unfade();
			});
		} else {
			func_highlight($ec('#ec_subscribe'));
		}

		return false;
	});

	$ec(document).mousemove(function(e) {
		cursor = [e.pageX, e.pageY];
	});

	$ec('.alerts').on('click', function() {
		bc = false;
	});

	$ec(document).on('click', function() {
		if (bc != false) {
			$ec('.popup, .alert_message, .alerts').not('.login_alert').remove();
			$ec('.login_alert').hide();
			unfade();
		}

		bc = true;
	});

	$ec('.search input').on('focus', function() {
		if ($ec(this).val() == 'Search')
			$ec(this).val('');
	});

	original_content = $ec('.ec_ajax_container').html();
	original_title = $ec('title').html();
	original_page = ec_page;
	original_bread_crumbs = $ec('#bread_crumbs_container').html();

	if (ec_page == 'home' || ec_page == 'category' || (ec_page == 'brands' && ec_pageid))
		is_ajax_page = true;

	if (is_ajax_page)
		ec_ajax_clicks();

	$ec('.currency_select a').on('click', function() {
		aload();
		$ec.ajax({
			url: current_location+'/set_currency/'+$ec(this).data('id')+'&its_ajax_page=1'
		}).done(function() {
			location.reload();
		});

		return false;
	});

	$ec('.language_select a').on('click', function() {
		aload();
		$ec.ajax({
			url: current_location+'/set_language/'+$ec(this).data('id')+'&its_ajax_page=1'
		}).done(function() {
			location.reload();
		});

		return false;
	});
                              1
	$ec('.currency_select select').change(function() {
		aload();
		$ec.ajax({
			url: current_location+'/set_currency/'+$ec(this).val()+'&its_ajax_page=1'
		}).done(function() {
			location.reload();
		});
	});

	$ec('.language_select select').change(function() {
		aload();
		$ec.ajax({
			url: current_location+'/set_language/'+$ec(this).val()+'&its_ajax_page=1'
		}).done(function() {
			location.reload();
		});
	});

	cart_clicks();
	original_pageid = ec_pageid;
	instant_search();
	responsive_init();
	scrolltop();
  });
})($);

function ec_ajax_clicks() {
	left_filter_max_height();
	init_translate();
	wl_actions();
	$animation_elements = $ec('.ec_page-container-2, .ec_page-container-news, .ec_page-container-blog')
	$window.trigger('scroll');
	mobile_ec_menu_clicked = true;
	mobile_ec_menu_open();
	$ec('.filter_switcher').unbind('click').on('click', function() {
		$ec('body').toggleClass('filteropen');
	});

	$ec('body').removeClass('filteropen');
	try {
		ga('set', 'page', window.location.pathname);
		ga('send', 'pageview');
	} catch (err) {
	}

	$ec('.searchform').unbind('submit').on('submit', function() {
		var substring = $ec(this).find('input[type="text"]').val();
		if (!substring)
			return false;

		$ec('.embed_cart_search_link').remove();
		$ec('body').append('<a href="'+parnet_site_page+'#!/search?q='+substring+'" class="embed_cart_search_link ec_ajax_link"></a>');
		window.history.pushState({}, "", parnet_site_page+'#!/search?q='+substring);
		ec_ajax_clicks();
		$ec('.embed_cart_search_link').click();
		return false;
	});
//console.log('123');
	$ec('#ec_menu a, button.ec_ajax_link, a.ec_ajax_link, .ajax_mobile_link, .logo-link, .bread_crumbs a, #ec_subcategories a, .brands a, .test-links a, .ec_foot a').unbind('click').on('click', function(e) {
//		alert('1');
		if ($ec(this).hasClass('no-ajax'))
			return true;

//		ec_ajax_clicked = true;
		if ($ec(this).closest('button').size()) {
       ec_auto_click = true;
    }

		$ec('.popup.cart_popup .close').click();
		no_pop_state = true;
		if ($ec(this).closest('.product_popup').size())
			$ec('.fade').click();

			$ec('html, body').animate({
				scrollTop: $ec('.embed-cart-area').offset().top - 70
			}, 500);
			mobile_ec_menu_clicked = false;
			$ec('.mobile-left_ec_menu').animate({left: -500}, 500);
	var add_href = '';
	if ($ec(this).attr('href').indexOf('#') > -1) {
		var tmp = $ec(this).attr('href').split('#'),
			tmp = tmp[1].split('!');

		add_href = tmp[1];
	}

		var h = current_location+'/'+add_href;
		if (!pushed) {
			pushed = true;
		}

//ec_alert(create_ec_ajax_link(h)+'|'+add_href);
//return false;
//console.log('123');
//console.trace();
		$ec('#ec_content-ec_loading').remove();
		$ec('.ec_ajax_container').append('<div id="ec_content-ec_loading"><div class="cssload-container"><div class="cssload-speeding-wheel"></div></div></div>');
		$ec('#ec_content-ec_loading').width($ec('.ec_ajax_container').width()+1);
		$ec('#ec_content-ec_loading').height($ec('.ec_ajax_container').height()-100);
		$ec.ajax({
			dataType: 'json',
			url: create_ec_ajax_link(h),
			error: function() {
				self.location = h;
			},
			success: function(r) {
				$ec('body').attr('embed_cart_rel', 'body-'+r[3]);
				$ec('.ec_ajax_container').html(r[0]);

				$ec('#bread_crumbs_container').html(r[2]);
				ec_ajax_clicks();
				ec_page = r[3];
//				no_pop_state = true;
				if (ec_auto_click) {
					ec_auto_click = false;
//					ec_alert(parnet_site_page+'#!'+add_href);
					window.history.pushState({"html":r[0],"pageTitle":r[1], 'bread_crumbs': r[2], 'page': r[3], 'parentid': r[4], 'pageid': r[5]},"", parnet_site_page+'#!'+add_href);
        }

				document.title = r[1];
				$ec('meta[name="keywords"]').attr('content', r[7]);
				$ec('meta[name="description"]').attr('content', r[8]);

				ec_pageid = r[5];
				recalc_ec_menus(r[3], r[4]);
				proceed_clicks(r[3]);
				tabs_clicks();
			}
		});

		return true;
	});

	try {
		login_clicks();
		register_actions();
	} catch (err) {
	}

	try {
		profile_clicks();
	} catch (err) {
	}

	contact_form();
}

function contact_form() {
	$ec('#help_form .submit_help').unbind('click').on('click', function() {
		var allgood = true;
		$ec('#help_form input[required]').each(function() {
			if (!$ec(this).val()) {
				$ec(this).addClass('error');
				allgood = false;
			}
		});

		$ec('#help_form textarea[required]').each(function() {
			if (!$ec(this).val()) {
				$ec(this).addClass('error');
				allgood = false;
			}
		});
//alert('1');
		if (allgood) {
			aload();
//			alert(current_location+'/help?its_ajax_page=1');
	    $ec.ajax({
           type: "POST",
           url: current_location+'/help?its_ajax_page=1',
           data: $ec("#help_form").serialize(),
           success: function(data) {
						unload();
						recaptchaOnload();
						if (data == 'C') {
							ec_alert("Captcha ist falsch.");
						} else {
							ec_alert("Ihr Brief wurde gesendet. Wir Kontaktieren Sie so bald wie möglich.");
						}
//						location.reload();
           }
         });

//			document.help_form.submit();
		}
	});
}

var no_pop_state = false;
window.onpopstate = function(e) {
	if (current_area == 'A') {
		self.location = window.location.href;
		return false;
	}
//	ec_alert('5');
//console.trace();
	if (no_pop_state) {
		no_pop_state = false;
		return true;
	}

	if (!(window.location.href.indexOf(parnet_site_page) > -1))
		return true;

//	no_pop_state = true;
//console.log('------');
	if (true || is_ajax_page) {
//		ec_alert(window.location.href);
		$ec('.ec_page-container-2, #ec_home-tabs').remove();
	var add_href = '';
	if (window.location.href.indexOf('#') > -1) {
		var tmp = window.location.href.split('#'),
			tmp = tmp[1].split('!');

		add_href = tmp[1];
	}

		var h = current_location+'/'+add_href;
		if (!pushed) {
			pushed = true;
		}

//ec_alert(create_ec_ajax_link(h)+'|'+add_href);
//return false;
		$ec('.ec_ajax_container').append('<div id="ec_content-ec_loading"><div class="cssload-container"><div class="cssload-speeding-wheel"></div></div></div>');
		$ec('#ec_content-ec_loading').width($ec('.ec_ajax_container').width()+1);
		$ec('#ec_content-ec_loading').height($ec('.ec_ajax_container').height()-100);
		$ec.ajax({
			dataType: 'json',
			url: create_ec_ajax_link(h),
			error: function() {
				self.location = h;
			},
			success: function(r) {
				$ec('body').attr('embed_cart_rel', 'body-'+r[3]);
				$ec('.ec_ajax_container').html(r[0]);

				$ec('#bread_crumbs_container').html(r[2]);
				ec_ajax_clicks();
				ec_page = r[3];
				no_pop_state = true;
//				window.history.pushState({"html":r[0],"pageTitle":r[1], 'bread_crumbs': r[2], 'page': r[3], 'parentid': r[4], 'pageid': r[5]},"", '/'+parnet_site_page+'#!'+add_href);
				document.title = r[1];
				$ec('meta[name="keywords"]').attr('content', r[7]);
				$ec('meta[name="description"]').attr('content', r[8]);
				ec_pageid = r[5];
				recalc_ec_menus(r[3], r[4]);
				proceed_clicks(r[3]);
				tabs_clicks();
				no_pop_state = false;
			}
		});
		ec_ajax_clicks();
		proceed_clicks(ec_this_page);
		tabs_clicks();
	}
};

function proceed_clicks(whats_page) {
//	ec_alert(whats_page);
	if (whats_page == 'category' || whats_page == 'search' || (whats_page == 'brands' && ec_pageid)) {
		$ec('body').addClass('withfilter');
		if (dontloadfilter)
			dontloadfilter = false;
		else
			load_filter();
	} else {
		$ec('body').removeClass('withfilter');
	}

	products_clicks();
	banners();
	product_clicks();
	filter_clicks();
	cart_actions();
	coupon_actions();
	cart_clicks();
	checkout_actions();
}

$ec(window).resize(function() {
	if ($ec('.fade').size() > 0)
		fade();
});

function aload() {
	$ec('.ec_loading').show();
}

function unload() {
	$ec('.ec_loading').hide();
}

function ec_alert(message, nook, h, classes, noshake, alert2, nofade) {
	clearTimeout(at);
	var id = alerts;
	if (alert2)
	    $ec('body').append('<div class="embed-cart-area alert_message '+classes+'" id="a'+id+'" tabindex="'+id+'"><div class="background"></div><div class="alert_content"><span class="close_alert">x</span>'+message+(nook ? '' : '<div class="close-alert"><button>'+ok+'</button>')+'</div></div>');
	else {
		if (!nofade)
			fade();

		bc = false;
	    $ec('body').append('<div class="embed-cart-area alert_message '+classes+'" id="a'+id+'" tabindex="'+id+'"><span class="close_alert">x</span>'+message+(nook ? '' : '<div class="close-alert"><button>'+ok+'</button>')+'</div></div>');
	}

	if (noshake == 2) {
		$ec('#a'+id).hide();
		$ec('#a'+id).show();
	}

	$ec('#a'+id+' .close_alert').on('click', function() {
		var othis = $ec(this);
		bc = false;
		if (alert2)
	    	var e = $ec(this).parent().parent();
		else
	    	var e = $ec(this).parent();

		e.css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, 70)');
		setTimeout(function() {
			e.css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
			if (othis.closest('.login_alert').size() || othis.closest('.register_alert').size())
		    	unfade();

	    	if (!$ec('.popup').size() && !$ec('.register_alert').size() && !$ec('.login_alert').size())
		    	unfade();

			setTimeout(function() {
				e.remove();
			}, 200);
		}, 200);

	});

	$ec('#a'+id+' .close-alert button').on('click', function() {
		bc = false;
		bb = true;
    	var e = $ec('#a'+id);
		e.css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, 70)');
		setTimeout(function() {
			e.css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
	    	if (!$ec('.popup').size() && !$ec('.register_alert').size() && !$ec('.login_alert').size())
		    	unfade();

			setTimeout(function() {
				e.remove();
			}, 200);
		}, 200);

	});

	$ec('.alert_message').on('click', function() {
		bc = false;
		bb = true;
	});

	if (h)
		at = setTimeout(function(){$ec('#a'+id).fadeOut();unfade();}, 5000);

	$ec('#a'+id).focus();
	$ec('#a'+id).on('keyup', function(e) {
		if (e.which == 27) {
			$ec('#a'+id).hide();
    		if (!$ec('.popup').size())
				unfade();
		}
	});

	alerts += 1;

	return id;
}

function confirm(text, o, goto) {
	if (!text)
		text = are_you_sure;

	$ec('.confirm').remove();
	bc = false;
	ec_alert(text+'<br /><br /><button class="yes">'+yes+'</button> <button onclick="javascript: $ec(\'.confirm\').remove(); unfade();" class="no">'+no+'</button>', 1, '', 'confirm', 2);
	$ec('.confirm').focus();
	$ec('.confirm .yes').on('click', function() {
		bc = false;
		confirmed = true;
		if (goto)
			self.location = goto;
		else
			o.trigger('click');

		unfade();
		$ec('.confirm').remove();
		confirmed = false;
	});

	$ec('.confirm').keydown(function(e) {
		if (e.which == 13)
			$ec('.confirm .yes').trigger('click');
		else if (e.which == 27)
			$ec('.confirm .no').trigger('click');
	});
}

function fade() {
	if ($ec('.fade').size() == 0) {
		$ec('html').prepend('<div class="fade"></div>');
		$ec('.fade').height($ec(document).height());
		$ec('.fade').show();
	} else
		$ec('.fade').height($ec(document).height());

	$ec('.fade').unbind('click').on('click', function() {
		bc = false;
		removePopups();
return;
		bc = true;
	});
}


function removePopups(no_unfade) {
	if (current_area == 'C')
		setTimeout(function() {
			ec_oid = 0;
			product_clicks();
		}, 500);

	if (no_unfade) {
		$ec('.popup, .alert, .alert_message:not(.not_remove)').remove();
		return;
	}

	$ec('.popup, .alert, .alert_message').css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, 70)');
	setTimeout(function() {
		$ec('.popup, .alert, .alert_message').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
    	unfade();

		setTimeout(function() {
			$ec('.popup, .alert, .alert_message:not(.not_remove)').remove();
		}, 200);
	}, 200);
}

function unfade() {
	clearTimeout(at);
	$ec('.prev').remove();
	$ec('.fade').remove();
}

function price_format(price, thousand_delim, decimal_delim, precision) {
	var thousand_delim = (arguments.length > 1 && thousand_delim !== false) ? thousand_delim : '';
	var decimal_delim = (arguments.length > 2 && decimal_delim !== false) ? decimal_delim : '.';
	var precision = (arguments.length > 3 && precision !== false) ? precision : '2';

	if (precision > 0) {
		precision = Math.pow(10, precision);
		price = Math.round(price*precision)/precision;
		var top = Math.floor(price);
		var bottom = Math.round((price-top)*precision)+precision;

	} else {
		var top = Math.round(price);
		var bottom = 0;
	}

	top = top+"";
	bottom = bottom+"";
	var cnt = 0;
	for (var x = top.length; x >= 0; x--) {
		if (cnt % 3 == 0 && cnt > 0 && x > 0)
			top = top.substr(0, x)+thousand_delim+top.substr(x, top.length);

		cnt++;
	}

	return (bottom > 0) ? (top+decimal_delim+bottom.substr(1, bottom.length)) : top;
}

function IsNumeric(num) {
     return (num >=0 || num < 0);
}

function cart_clicks() {
}

function cart_actions() {
	$ec('.cart-quantity').on('keyup', function() {
		var max = $ec(this).data('max');
		if ($ec(this).val() > max)
			$ec(this).val(max);
	});

	$ec('.ec_clear-cart').on('click', function() {
		$ec.ajax({url: current_location+'/cart/clear'+'?its_ajax_page=1'}).done(function(r) {
			reload_mc();
			ec_auto_click = true;
			$ec('#ec_menu-home a').click();
			return;
		});

		return false;
	});

	$ec('.update-cart').on('click', function(e) {
		$ec('.ec_ajax_container').append('<div id="ec_content-ec_loading"><div class="cssload-container"><div class="cssload-speeding-wheel"></div></div></div>');
		$ec('#ec_content-ec_loading').width($ec('.ec_ajax_container').width()+1);
		$ec('#ec_content-ec_loading').height($ec('.ec_ajax_container').height()-100);
	    $ec.ajax({
           type: "POST",
           url: current_location+'/cart'+'?its_ajax_page=1',
           data: $ec("#cartform").serialize(),
           success: function(data) {
						$ec('#ec_content-ec_loading').remove();
						$ec('.cart-link-force').first().click();
//						location.reload();
           }
         });

	    e.preventDefault();
		return false;
	});

	$ec('.remove-link').on('click', function() {
		var url = $ec(this).attr('href');
		$ec.ajax({url: url}).done(function(r) {
			$ec('#ec_minicart').html(r);
			$ec('#ec_head_mobile #ec_minicart').html(r);
			ec_auto_click = true;
			if ($ec('#ec_minicart .cart-link-force').size()) {
				ec_ajax_clicks();
				$ec('.cart-link-force').click();
			} else {
				$ec('#ec_menu-home a').click();
			}
		});

		return false;
	});
}

function wl_actions() {
	$ec('.ec_clear-wl').on('click', function() {
		$ec.ajax({url: current_location+'/wishlist/clear'+'?its_ajax_page=1'}).done(function(r) {});
			ec_auto_click = true;
		$ec('#ec_menu-home a').click();
		return false;
	});

	$ec('.remove-wl-link').on('click', function() {
		var url = $ec(this).attr('href');
		$ec.ajax({url: url}).done(function(r) {
			$ec('.wishlist-link-force').click();
		});

		return false;
	});
}

function recalculate_shipping(shippingid) {
	$ec('#place_order').animate({opacity: .6 }, 50);
	$ec('#place_order *').attr('disabled', true);
    $ec.ajax({
		type: "POST",
		url: current_location+'/checkout?shippingid='+shippingid+'&its_ajax_page=1',
		success: function(data) {
			$ec('#place_order').animate({opacity: 1 }, 200);
			$ec('#place_order *').attr('disabled', false);
			$ec('#place_order').html(data);
			checkout_actions();
			$ec('#paymentid').trigger('change');
		}
	});
}


var handler,
	stripe_loaded = false,
	stripe_lib;

function checkout_actions() {
	if (!stripe_loaded) {
		$ec.ajax({
		  url: "https://js.stripe.com/v3/",
		  dataType: "script",
		  success: function() {
  	stripe_loaded = true;
//				alert(Stripe);
		  }
		});
	}

	if (stripe_key && $ec('#ex_date_stripe').size() && stripe_loaded) {
		var stripe = Stripe(stripe_key);
		// Create an instance of Elements.
		var elements = stripe.elements();
		var elementStyles = {
			base: {
				fontSize: '16px',
				color: '#000',
				fontFamily: 'sans-serif',
			}
		};
	    var elementClasses = {
		    focus: 'focused',
	    	empty: 'empty',
		    invalid: 'invalid',
		};
	    var cardNumber = elements.create('cardNumber', {
		    style: elementStyles,
	    	classes: elementClasses,
	    });
		var cardExpiry = elements.create('cardExpiry', {
			style: elementStyles,
			classes: elementClasses,
		});

		cardExpiry.mount('#ex_date_stripe');
		var cardCvc = elements.create('cardCvc', {
			style: elementStyles,
			classes: elementClasses,
		});
		cardCvc.mount('#cv_code_stripe');
    	cardNumber.mount('#card_number_stripe');

	    var elements = [cardNumber, cardExpiry, cardCvc];
	}

	ec_states_actions();
	if ($ec('#same_address').is(':checked')) {
		$ec('.billing_address input').removeProp('required');
	} else {
		$ec('.billing_address input').prop('required', true);
	}

	$ec('#same_address').unbind('change').change(function() {
		if ($ec(this).is(':checked')) {
			$ec('.billing_address input').removeProp('required');
		} else {
			$ec('.billing_address input').prop('required', true);
		}

		$ec('.billing_address').toggle();
	});

	$ec('#paymentid').change(function() {
        	$ec("#cc-info-stripe").hide()
        	$ec("#cc-info").hide()
	        if ($ec('#paymentid').val() == '2') {
	        	$ec("#cc-info").show()
	        	$ec("#place-order").hide()
	        } else if ($ec('#paymentid').val() == '7') {
	        	$ec("#cc-info-stripe").show()
	        } else {
	        	$ec("#cc-info").hide()
	        	$ec("#place-order").show()
	        }
	});

	$ec('#checkout_user_form').unbind('submit').on('submit', function(e) {
	    e.preventDefault();
		var allgood = true;
		$ec('#checkout_user_form input').each(function() {
			var o = $ec(this);
			if (!o.val()) {
			}
		});

		if (!allgood)
			return false;

	    $ec.ajax({
           type: "POST",
           url: current_location+'/checkout/user_form'+'?its_ajax_page=1',
           data: $ec('#checkout_user_form').serialize(),
           success: function(data) {
				if (data == 'Email') {
	                ec_alert('Enterd email already registered for another user');
				} else {
					$ec('#place_order').animate({opacity: 1 }, 200);
					$ec('#place_order *').attr('disabled', false);
					$ec('#place_order').html(data);
					 init_translate();
					checkout_actions();
					$ec('html, body').animate({
						scrollTop: $ec('#checkoutform').offset().top - 200
					}, 500);
					if ($ec('#paymentid').val() == '2')
						$ec('#cc-info').show();
				}
           }
         });

		return false;
	});

	$ec('#place_order button').unbind('click').on('click', function(e) {
		if ($ec('#paymentid').val() == 7) {
			aload();
/*
 *		    $ec.ajax({
    	    	type: "POST",
				url: current_location+'/checkout/place_order'+'?its_ajax_page=1',
				data: $ec('#checkoutform').serialize(),
				success: function(data)
				{
						ec_alert('Please, wait we are connecting you to Stripe');
				}
			});
*/
			var clientSecret = $ec('#cc-info-stripe').attr('secret');
//			console.log(clientSecret);
			  stripe.confirmCardPayment(clientSecret, {
			    payment_method: {
			      card: elements[0]
			    }
			  }).then(function(result) {
			    if (result.error) {
			    	unload();
						ec_alert('<b>Payment validation failed: '+result.error.message+'</b><br />Try to enter again or try another card.');
			    } else {
//			      		$ec('#stripe_token_new').val(result.token.id);
			      // The payment has been processed!
			      if (result.paymentIntent.status === 'succeeded') {
					stripe.retrievePaymentIntent(clientSecret).then(function(result) {
//console.log(result.paymentIntent);
//						return;
			      		$ec('#stripe_token').val(result.paymentIntent.id);
					    $ec.ajax({
    				    	type: "POST",
							url: current_location+'/checkout/place_order'+'?its_ajax_page=1',
							data: $ec('#checkoutform').serialize(), // serializes the form's elements.
							success: function(data)
							{
								unload();
								var tmp = data.split('|');
								if (tmp[0] == 'E') {
									ec_alert(tmp[1]);
									return false;
								}

								$ec('.invoice_quick_link').remove();
								$ec('body').append('<a class="ec_ajax_link invoice_quick_link" href="'+parnet_site_page+'#!/invoice/'+data+'/success"></a>');
								ec_ajax_clicks();
								ec_auto_click = true;
								$ec('.invoice_quick_link').click();
								reload_mc();
							}
						});
					});
				  }
				}
			});

	    	e.preventDefault();

			return false;
	    	e.preventDefault();
		} else if ($ec('#paymentid').val() == '2') {
			aload();
			hostedFieldsInstance_obj.tokenize(function (err, payload) {
				if (err) {
					unload();
					ec_alert(err.message);
					console.error(err);
					return;
				}

    braintree.threeDSecure.create({
      authorization: client_token,
      version: 2
	}, function (createError, threeDSecure) {
  threeDSecure.on('lookup-complete', function (data, next) {
    // check lookup data

    next();
  });

threeDSecure.verifyCard({
  amount: $ec('#order_total').val(),
  nonce: payload.nonce,
  bin: payload.details.bin
  // other fields such as billing address
}, function (verifyError, payload) {
							unload();
  if (verifyError) {
  	ec_alert(verifyError.message);
    if (verifyError.code === 'THREEDS_VERIFY_CARD_CANCELED_BY_MERCHANT ') {
      // flow was cancelled by merchant, 3ds info can be found in the payload
      // for cancelVerifyCard
    }

    return;
  }

        if ('undefined' != typeof payload.verificationDetails && payload.verificationDetails.liabilityShiftPossible == false && payload.verificationDetails.liabilityShifted == false && this.isAcceptNo3dSecure == false) {
        }


        		$ec('#payment-method-nonce').val(payload.nonce);
			    $ec.ajax({
	    	       type: "POST",
        		   url: current_location+'/checkout/place_order'+'?its_ajax_page=1',
	    	       data: $ec('#checkoutform').serialize(), // serializes the form's elements.
    		       success: function(data)
	        	   {
						if (data == 'Error') {
							unload();
		            	    ec_alert('Please, contact site administrator');
						} else if (data == 'StripeError') {
							$ec('#stripe_token').val('');
							$ec('#payment-method-nonce').val('');
							$ec('.checkout_popup').css('opacity', 1);
	            		    ec_alert('There was error processing your credit card');
						} else {
							$ec('.invoice_quick_link').remove();
							$ec('body').append('<a class="ec_ajax_link invoice_quick_link" href="'+parnet_site_page+'#!/invoice/'+data+'/success"></a>');
							ec_ajax_clicks();
							ec_auto_click = true;
							$ec('.invoice_quick_link').click();
							reload_mc();3
//							no_pop_state = true;
//							self.location = parnet_site_page+'#!/invoice/'+data+'/success';
						}
		        	}
	    		});

});
    });

return;

        		$ec('#payment-method-nonce').val(payload.nonce);
			    $ec.ajax({
	    	       type: "POST",
        		   url: current_location+'/checkout/place_order'+'?its_ajax_page=1',
	    	       data: $ec('#checkoutform').serialize(), // serializes the form's elements.
    		       success: function(data)
	        	   {
						if (data == 'Error') {
							unload();
		            	    ec_alert('Please, contact site administrator');
						} else if (data == 'StripeError') {
							$ec('#stripe_token').val('');
							$ec('#payment-method-nonce').val('');
							$ec('.checkout_popup').css('opacity', 1);
	            		    ec_alert('There was error processing your credit card');
						} else {
							$ec('.invoice_quick_link').remove();
							$ec('body').append('<a class="ec_ajax_link invoice_quick_link" href="'+parnet_site_page+'#!/invoice/'+data+'/success"></a>');
							ec_ajax_clicks();
							ec_auto_click = true;
							$ec('.invoice_quick_link').click();
							reload_mc();
//							no_pop_state = true;
//							self.location = parnet_site_page+'#!/invoice/'+data+'/success';
						}
		        	}
	    		});
        	});
		} else {
		    $ec.ajax({
    	       type: "POST",
        	   url: current_location+'/checkout/place_order'+'?its_ajax_page=1',
	           data: $ec('#checkoutform').serialize(), // serializes the form's elements.
    	       success: function(data)
        	   {
					if (data == 'Error') {
	            	    ec_alert('Please, contact site administrator');
					} else if (data == 'StripeError') {
						$ec('#stripe_token').val('');
						$ec('.checkout_popup').css('opacity', 1);
	            	    ec_alert('There was error processing your credit card');
					} else if (strstr(data, 'int_payment_form')) {
						$ec('body').append(data);
						$ec('#int_payment_form form').submit();
						ec_alert('Пожалуйста подождите');
					} else if (strstr(data, 'paypal.com')) {
						$ec('body').append(data);
						document.paypalform.submit();
						ec_alert('Bitte warten, wir verbinden Sie zu PayPal');
					} else {
							$ec('.invoice_quick_link').remove();
							$ec('body').append('<a class="ec_ajax_link invoice_quick_link" href="'+parnet_site_page+'#!/invoice/'+data+'/success"></a>');
							ec_ajax_clicks();
							ec_auto_click = true;
							$ec('.invoice_quick_link').click();
							reload_mc();
//							no_pop_state = true;
//							self.location = parnet_site_page+'#!/invoice/'+data+'/success';
					}
	           }
	         });
		}
	});

	$ec('.apply_gc').on('click', function() {
		bc = false;
		var id = ec_alert('<div class="coupon_screen"></div>', 1, '', 'coupon_alert');
		$ec('.coupon_screen').html('<br/><div class="group"><input type="text" size="30" required /><span class="highlight"></span><span class="bar"></span><label>Введите ваш код здесь</label></div><div class="coupon-error"></div><button>Bewerben</button><br/><br/>');
		$ec('.coupon_screen input').on('keyup', function() {
			$ec('.coupon-error').hide();
		});

		$ec('.coupon_screen button').on('click', function() {
			if (!$ec('.coupon_screen input').val()) {
				func_highlight($ec('.coupon_screen input'));
				return false;
			}

			$ec.ajax({url: current_location+'/checkout?gc='+$ec('.coupon_screen input').val()+'&its_ajax_page=1'}).done(function(r) {
				if (r == 'S') {
					$ec('.coupon_alert').remove();
					refresh_coupon();
				} else {
					$ec('.coupon-error').html(r);
					$ec('.coupon-error').show();
				}
			});
		});
	});

	$ec('.apply_coupon').on('click', function() {
		bc = false;
		var id = ec_alert('<div class="coupon_screen"></div>', 1, '', 'coupon_alert');
		$ec('.coupon_screen').html('<br/><div class="group"><input type="text" size="30" required /><span class="highlight"></span><span class="bar"></span><label>Geben Sie Ihren Gutschein-code hier</label></div><div class="coupon-error"></div><button>Bewerben</button><br/><br/>');
		$ec('.coupon_screen input').on('keyup', function() {
			$ec('.coupon-error').hide();
		});

		$ec('.coupon_screen button').on('click', function() {
			if (!$ec('.coupon_screen input').val()) {
				func_highlight($ec('.coupon_screen input'));
				return false;
			}

			$ec.ajax({url: current_location+'/checkout?coupon='+$ec('.coupon_screen input').val()+'&its_ajax_page=1'}).done(function(r) {
				if (r == 'S') {
					$ec('.coupon_alert').remove();
					refresh_coupon();
				} else {
					$ec('.coupon-error').html(r);
					$ec('.coupon-error').show();
				}
			});
		});
	});

	$ec('#local_pickup').change(function() {
		if ($ec(this).is(':checked')) {
			recalculate_shipping('L');
		} else {
			recalculate_shipping($ec('[name="shippingid"]').val());
		}

	});
}

function checkout_changes() {
	$ec('#checkout_user_form input').on('paste change keyup click', function() {
		$ec('#place_order *').attr('disabled', true);
		$ec('#place_order').css('opacity', .3);
	});

	$ec('#checkout_user_form select').change(function() {
		$ec('#place_order *').attr('disabled', true);
		$ec('#place_order').css('opacity', .3);
	});
}

function coupon_actions() {
	$ec('.remove_coupon').on('click', function() {
		$ec.ajax({url:current_location+'/checkout/remove_coupon'+'?its_ajax_page=1'}).done(function() {
			refresh_coupon();
		});
	});

	$ec('.remove_gc').on('click', function() {
		$ec.ajax({url:current_location+'/checkout/remove_gc'+'?its_ajax_page=1'}).done(function() {
			refresh_coupon();
		});
	});
}

function refresh_coupon() {
	if ($ec('.checkout_popup').is(':visible'))
		$ec('.checkout-link-force').click();
	else if ($ec('.cart_popup').is(':visible'))
		$ec('.cart-link-force').click();
	else
		window.location.reload();
}

function setCookie(cn,v,ed,seconds) {
	if (seconds) {
		var date = new Date(new Date().getTime() + ed * 1000);
		document.cookie=cn + "=" + v + ((ed==null) ? "" : "; expires="+date.toUTCString())+'; path=/;';//
	} else {
		var e = new Date();
		e.setDate(e.getDate() + ed);
		document.cookie=cn + "=" + v + ((ed==null) ? "" : "; expires="+e.toUTCString())+'; path=/;';
	}
}

function getCookie(cn) {
	var i, x, y, a = document.cookie.split(";");
	for (i = 0; i < a.length; i++) {
		x = a[i].substr(0, a[i].indexOf("="));
		y = a[i].substr(a[i].indexOf("=") + 1);
		x = x.replace(/^\s+|\s+$/g,"");
		if (x == cn)
			return y;
	}
}

function func_highlight(el) {
	if ($ec('html.area-c').size()) {
		el.addClass('error');
		return;
	}

	el.css('background', '#ff3000');
	setTimeout(function() {
		el.css('background', '#fff');
		setTimeout(function() {
			el.css('background', '#ff3000');
			setTimeout(function() {
				el.css('background', '#fff');
			}, 200);
		}, 200);
	}, 100);
}

function print_invoice(el) {
	$ec('#iframe-invoice').remove();
	$ec("<iframe id='iframe-invoice' name='invoice' style='height: 0px; width: 0px;' src='" + el.attr('href') + "' />").appendTo('body');
	$ec('#iframe-invoice').load(function() {
		window.frames['invoice'].focus();
		window.frames['invoice'].print();
	});

	return false;
}

function strstr(haystack, needle, bool) {
	var pos = 0;

	pos = haystack.indexOf(needle);
	if (pos == -1)
		return false;
	else {
		if (bool)
			return haystack.substr( 0, pos );
		else
			return haystack.slice( pos );
	}
}

function recalc_ec_menus(pg, pi) {
	$ec('.ec_menu-container li').removeClass('active');
	if (pi) {
		$ec('li#ec_menu-'+pi).addClass('active');
	} else {
		$ec('li#ec_menu-'+pg).addClass('active');
	}
}

function instant_search() {
	$ec('.search input').unbind('focus').on('focus', function() {
		var val = $ec(this).val();
		if (val.length < 2) {
			$ec('.instant-search').html("<div class='enter-3-chars'>Geben Sie 2 Zeichen</div>");
			return;
		}

		setTimeout(function() {
			search_instant(val);
		}, 300);
	});

	$ec('.search').unbind('mouseleave').mouseleave(function() {
		$ec('.instant-search').fadeOut();
	});

	$ec('.search').unbind('mouseover').mouseover(function() {
		return false;
		$ec('.instant-search').fadeIn();
		var val = $ec(this).find('input').val();
		if (val.length < 2) {
			$ec('.instant-search').html("<div class='enter-3-chars'>Geben Sie 2 Zeichen</div>");
			return;
		}

		setTimeout(function() {
			search_instant(val);
		}, 300);
	});

	$ec('.search input').on('keyup', function() {
		if ($ec(this).val().length < 2) {
			$ec('.instant-search').html("<div class='enter-3-chars'>Geben Sie 2 Zeichen</div>");
			return;
        }

		search_instant($ec(this).val());
	});
}

function search_instant(val) {
		try {
			instant_search_ajax.abort();
		} catch (err) {
		}

		instant_search_ajax = $ec.ajax({
			url: current_location+'/instant_search?q='+encodeURIComponent(val)+'&its_ajax_page=1'
		}).done(function(r) {
			$ec('.instant-search').html(r);
			ec_ajax_clicks();
			$('.submitsearch').click(function() {
				$('.searchform').submit();
			});
		});
}

function responsive_init() {
	$ec('.navigation-toggle').on('click', function() {
		mobile_ec_menu_open();
	});
}

var mobile_ec_menu_clicked = false;
$ec('.mobile-ec_menu-fade').on('click', function() {
	mobile_ec_menu_open();
});

function mobile_ec_menu_open() {
		if (mobile_ec_menu_clicked) {
			mobile_ec_menu_clicked = false;
			$ec('.mobile-left_ec_menu').animate({left: -500}, 500);
			$ec('.navigation-toggle').removeClass('is-active');
			$ec('.mobile-ec_menu-fade').fadeOut();
		} else {
			if ($('.embed_cart_scrolled').size())
				var top = $ec(window).scrollTop() + 80 - $('.embed-cart-area').offset().top;
			else
				var top = 80;

			$ec('.mobile-left_ec_menu').css('top', top+'px');
			mobile_ec_menu_clicked = true;
			$ec('.mobile-left_ec_menu').animate({left: 0}, 500);
			$ec('.navigation-toggle').addClass('is-active');
			$ec('.mobile-ec_menu-fade').fadeIn();
		}
}

function create_ec_ajax_link(href) {
	try {
		if (href.indexOf('?') == -1) {
			href = href+'?its_ajax_page=1';
		} else {
			href = href+'&its_ajax_page=1';
		}
	} catch (err) {
	}

	return href;
}

function scrolltop() {
	if ($ec(window).scrollTop() > 100)
		$ec('#scrolltop').show();
	else
		$ec('#scrolltop').hide();

	$ec('#scrolltop').unbind('click').on('click', function() {
		$ec('html, body').animate({
			scrollTop: $('.embed-cart-area').offset().top
		}, 500);
	});
}

function check_if_in_view() {
	return false;
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $ec.each($animation_elements, function() {
    var $element = $ec(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
    }
  });
}

$ec('body').on('keyup focus', function(event) {
	if ($ec(event.target).prop('nodeName').toLowerCase() == 'input' || $ec(event.target).prop('nodeName').toLowerCase() == 'textarea') {
		$ec(event.target).removeClass('error');
	}
});

$ec(window).resize(function() {
	var top = $(window).scrollTop()+100;
	$ec('.product_popup').css('top', top + 'px');
	$ec('.product_popup').css('left', ($ec(window).width() / 2 - $ec('.product_popup').width() / 2 - 10) + 'px');
	$ec('.cart_popup').css('top', top + 'px');
	$ec('.cart_popup').css('left', ($ec(window).width() / 2 - $ec('.cart_popup').width() / 2 - 20) + 'px');
});

$ec(window).on('load', function() {
//	$('#embed_cart_unwrap').ec_contents().unwrap();
});

function reload_mc() {
		$ec.ajax({url: current_location+'/cart?reload_mc=1'+'&its_ajax_page=1'}).done(function(r) {
			$ec('#ec_minicart').html(r);
			$ec('#ec_head_mobile #ec_minicart').html(r);
		});
}

function init_translate() {
//	console.log('1');
    $ec('.translate').unbind('click').click(function(e) {
			e.preventDefault();
			e.stopPropagation();
			var lbl = $(this).find('.hidden.translate-phrase').html(),
					word = $(this).find('.hidden.word').html();
			translate_alert('<textarea id="translate_me">'+lbl+'</textarea><div class="close-alert"><button>Save</button></div>', '1', '', 'translate-alert');
			$('.translate-alert').click(function() {
				$.ajax({
					url: current_location+'/translate?lbl='+encodeURIComponent(word)+'&translate='+encodeURIComponent($('.translate-alert textarea').val())+'&its_ajax_page=1'
				});
			});
    });
}

function str_replace(search, replace, subject) {
	return subject.split(search).join(replace);
}

function translate_alert(message, nook, h, classes, noshake, alert2, nofade) {
	clearTimeout(at);
	var id = alerts;
	if (alert2)
	    $('body').append('<div class="alert_message '+classes+'" id="a'+id+'" tabindex="'+id+'"><div class="background"></div><div class="alert_content"><span class="close_alert">x</span>'+message+(nook ? '' : '<div class="close-alert"><button>'+ok+'</button>')+'</div></div>');
	else {
		if (!nofade)
			fade();

		bc = false;
	    $('body').append('<div class="alert_message '+classes+'" id="a'+id+'" tabindex="'+id+'"><span class="close_alert">x</span>'+message+(nook ? '' : '<div class="close-alert"><button>'+ok+'</button>')+'</div></div>');
	}

	if (noshake == 2) {
		$('#a'+id).hide();
		$('#a'+id).show();
	}

	$('#a'+id+' .close_alert').on('click', function() {
		var othis = $(this);
		bc = false;
		if (alert2)
	    	var e = $(this).parent().parent();
		else
	    	var e = $(this).parent();

		e.css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, 70)');
		setTimeout(function() {
			e.css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
			if (othis.closest('.login_alert').size() || othis.closest('.register_alert').size())
		    	unfade();

	    	if (!$('.popup').size() && !$('.register_alert').size() && !$('.login_alert').size())
		    	unfade();

			setTimeout(function() {
				e.remove();
			}, 200);
		}, 200);

	});

	$('#a'+id+' .close-alert button').on('click', function() {
		bc = false;
		bb = true;
    	var e = $('#a'+id);
		e.css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, 70)');
		setTimeout(function() {
			e.css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
	    	if (!$('.popup').size() && !$('.register_alert').size() && !$('.login_alert').size())
		    	unfade();

			setTimeout(function() {
				e.remove();
			}, 200);
		}, 200);

	});

	$('.alert_message').on('click', function() {
		bc = false;
		bb = true;
	});

	if (h)
		at = setTimeout(function(){$('#a'+id).fadeOut();unfade();}, 5000);

	$('#a'+id).focus();
	$('#a'+id).on('keyup', function(e) {
		if (e.which == 27) {
			$('#a'+id).hide();
    		if (!$('.popup').size())
				unfade();
		}
	});

	alerts += 1;

	return id;
}