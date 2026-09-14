var put_filter_push = '';
(function($) {
"use strict";
  $ec(document).ready(function() {
	if (ec_page == 'search' || ec_page == 'category' || (ec_page == 'brands' && ec_pageid))
		load_filter();

	products_clicks();
  });
})($);

function products_clicks() {
	if ($ec('body').hasClass('admin-area'))
		return false;

	$ec('.navigation a, .sort-by a').unbind('click').on('click', function(e) {
		no_pop_state = true;
		var h = $ec(this).attr('href');
		if (!pushed) {
			pushed = true;
		}

		if ($ec(this).closest('.bottom-pagination').size()) {
			$ec('html, body').animate({
				scrollTop: $ec('.products-results').offset().top - 120
			}, 300);
		}

		$ec('.ec_ajax_container').append('<div id="ec_content-ec_loading"><div class="cssload-container"><div class="cssload-speeding-wheel"></div></div></div>');
		$ec('#ec_content-ec_loading').width($ec('.ec_ajax_container').width()+1);
		$ec('#ec_content-ec_loading').height($ec('.ec_ajax_container').height()-100);

	var add_href = '';
	if ($ec(this).attr('href').indexOf('#') > -1) {
		var tmp = $ec(this).attr('href').split('#'),
			tmp = tmp[1].split('!');

		add_href = tmp[1];
	}

		var h = current_location+'/'+add_href+'&its_ajax_page=1';
		$ec.ajax({
			url: h,
			error: function() {
				self.location = h;
			},
			success: function(r) {
				$ec('#ec_content-ec_loading').remove();
				$ec('.products-results').html(r);
//				window.history.pushState({'page': 'search', 'dontrealodfilter': '1', "html":$ec('.ec_ajax_container').html(),"pageTitle":$ec('title').html(), 'bread_crumbs': $ec('#bread_crumbs_container').html()},"", h);
				ajax_clicks();
				dontloadfilter = true;
				proceed_clicks('search');
			}
		});

		return true;
//		return false;
	});

	$ec('.products .ec_photo').unbind('mouseenter').mouseenter(function() {
		$ec(this).append('<div class="view-quicklook"><img src="'+current_location+'/images/quicklook.png" alt="" /></div>');
		var q = $ec(this).find('.view-quicklook'),
			i = $ec(this).closest('.ec_photo'),
			product_id = i.find('.product-image').attr('id').replace('pid-', '');

		q.css('left', (i.width() / 2 - 35) + 'px');
		q.css('top', (i.height() / 2 - 20)+'px');
		q.css('z-index', 3);
		q.on('click', function() {
			load_quick_look(product_id);
		});
	});

	$ec('.products .quick-look').unbind('click').on('click', function() {
		var product_id = $ec(this).data('productid');
		load_quick_look(product_id);
	});

	$ec('.products .ec_photo').unbind('mouseleave').mouseleave(function() {
		$ec(this).find('.view-quicklook').remove();
	});
	$ec('.products button').unbind('click').on('click', function() {
		bc = false;
		add_to_cart($ec(this).attr('id').replace('pid',''), 'Y');
	});
}

function load_quick_look(product_id) {
			aload();
			$ec('body').append('<div class="load load_product_ql hidden"><span class="close close-popup">x</span></div>');
			$ec('.popup-wrap').css('top', $ec(window).scrollTop()+'px');
//ec_alert(parnet_site_page+'#!/product/'+product_id+'?popup=1');
			$ec.ajax({
				url: current_location+'/product/'+product_id+'?popup=1'+'&its_ajax_page=1'
			}).done(function(r) {
				$ec('.popup-wrap').height($ec(window).height());
				unload();
				fade();
				$ec('.load_product_ql').html('<span class="close close-popup">x</span>'+r);
				$ec('.load').addClass('embed-cart-area popup product_popup');
				var top = $(window).scrollTop()+100;
				$ec('.product_popup').css('top', top + 'px');

				$ec(".product_popup img").on('load', function() {
					var top = $(window).scrollTop()+100;
					$ec('.product_popup').css('top', top + 'px');
					$ec('.product_popup').css('left', ($ec(window).width() / 2 - $ec('.product_popup').width() / 2 - 10) + 'px');
				});

				$ec('.product_popup').css('left', ($ec(window).width() / 2 - $ec('.product_popup').width() / 2 - 10) + 'px');
				$ec('.product_popup').css('opacity', 0).css('transform', 'matrix(0.1, 0, 0, 0.1, 0, 0)');
				setTimeout(function() {
					$ec('.product_popup').css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, 70)');
					setTimeout(function() {
						$ec('.product_popup').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
					}, 200);
				}, 200);

				$ec('.product_popup').show();
				$ec('.product_popup .close, .product_popup .close_popup').on('click', function() {
					removePopups();
					return;
					$ec('.product_popup').css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, 70)');
					setTimeout(function() {
						$ec('.product_popup').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
				    	unfade();
					}, 200);

					return;
    				var e = $ec('.product_popup');
	    			e.slideUp();
					setTimeout(function(){$ec('body').css('overflow-y', 'auto');e.remove()}, 500);
				});

				$ec('.product_popup').on('click', function() {
					bc = false;
					bb = true;
				});

				product_clicks()
			});
}

var filter_box,
  filter_box_html;

function load_filter(url_params, url_replace) {
	$ec('#left_filter').html('<div class="cssload-container"><div class="cssload-speeding-wheel"></div></div>');
	if (url_replace)
		var url = url_replace;
	else
		var url = window.location.href;

	if (!strstr(url, '?'))
		url += '?'

	var add_href = '';
	if (window.location.href.indexOf('#') > -1) {
		var tmp = window.location.href.split('#'),
			tmp = tmp[1].split('!');

		add_href = tmp[1];
	}

  if (url_replace) {
  	var h = current_location+'/'+url_replace;
  } else
  	var h = current_location+'/'+add_href;

	if (!(h.indexOf('?') > -1)) {
		h = h + '?';
	}
//alert(url+'|'+h+'|'+url_params);
	$ec.ajax({
		url: h+'&its_ajax_page=1&load_filter=1'+(url_params ? url_params : '')
	}).done(function(r) {
		$ec('#left_filter').html(r);
    if (filter_box) {
      $('.filter-box-'+filter_box).html(filter_box_html);
      $('.withfilter .left_filter').animate({
        scrollTop: $('.filter-box-'+filter_box).position().top - 30 + $('.withfilter .left_filter').scrollTop()
      }, 500);
      filter_box = '';
    }

		if (put_filter_push) {
			window.history.pushState({'page': 'search', 'dontrealodfilter': '1', "html":$ec('.ec_ajax_container').html(),"pageTitle":$ec('title').html(), 'bread_crumbs': $ec('#bread_crumbs_container').html()},"", put_filter_push);
			put_filter_push = '';
		}

		filter_clicks();
	});
}

function filter_clicks() {
	var filter_url = $ec('.filter-url').html(),
		min_value = parseInt($ec("#min_price").val()),
		max_value = parseInt($ec("#max_price").val());

  $ec('.reset_filter').unbind('click').on('click', function() {
    $ec('.reset_filter_url').click();
  });

	$ec('.selected-filter').unbind('click').on('click', function() {
		var what_uncheck = $ec(this).data('what'),
			url = filter_url,
			id = $(this).data('id'),
			url_params = '';

		$ec('.selected-filter').each(function() {
			var what = $(this).data('what');
			if (what_uncheck != what) {
				if (what == 'brand') {
					url_params += '&filter[brandid]='+$(this).data('id');
				}

				if (what == 'price') {
					url_params += '&filter[price]='+$(this).data('id');
				}
			}

			if (what == 'attr') {
				if (id != $(this).data('id'))
					url_params += '&filter[attr]['+encodeURIComponent($ec(this).data('id'))+'][]='+encodeURIComponent($ec(this).data('oid'));
			}
		});

		load_filter_process(url, url_params);
	});

  $ec('#left_filter h4.pointer').unbind('click').on('click', function() {
    $ec(this).next().toggleClass('opened');
    $ec(this).toggleClass('opened');
  });

	$ec('#left_filter li').unbind('click').on('click', function() {
    var input = $ec(this).find('input');
    if (input.is(':checked')) {
      input.prop('checked', false);
      input.attr('checked', false);
  } else {
      input.prop('checked', true);
      input.attr('checked', true);
  }

		var what = $ec(this).closest('ul').data('what'),
			url = filter_url,
			url_params = '';

		if (what == 'brand') {
			url_params += '&filter[brandid]='+$ec(this).data('id');
		}

		if (what == 'price') {
			url_params += '&filter[price]='+$ec(this).data('id');
		}

		if (what == 'attr') {
//			url_params += '&filter[attr]['+encodeURIComponent($ec(this).data('id'))+']='+encodeURIComponent($ec(this).data('oid'));
		}

		$ec('.selected-filter').each(function() {
			var what = $ec(this).data('what');
			if (what == 'brand') {
				url_params += '&filter[brandid]='+$ec(this).data('id');
			}

			if (what == 'price') {
				url_params += '&filter[price]='+$ec(this).data('id');
			}
/*
			if (what == 'attr') {
				url_params += '&filter[attr]['+encodeURIComponent($ec(this).data('id'))+']='+encodeURIComponent($ec(this).data('oid'));
			}
*/
    });

    $ec('.filter-attr input:checked').each(function() {
			url_params += '&filter[attr]['+encodeURIComponent($ec(this).closest('li').data('id'))+'][]='+encodeURIComponent($ec(this).closest('li').data('oid'));
    });
    filter_box = $(this).closest('ul').attr('groupid');
    filter_box_html = $(this).closest('ul').html();

//    alert(url_params);
//return;
		load_filter_process(url, url_params);
	});
}

function load_filter_process(url, url_params) {
		var h = url+url_params;
	var add_href = '';
	if (window.location.href.indexOf('#') > -1) {
		var tmp = window.location.href.split('#'),
			tmp = tmp[1].split('!');

		add_href = tmp[1];
	}

	var filter_url = $ec('.filter-url').html();
	if (!(filter_url.indexOf('?') > -1)) {
		filter_url = filter_url+'?';
	}

	var h = current_location+'/'+filter_url+url_params+'&its_ajax_page=1';

		$ec('html, body').animate({
			scrollTop: $ec('.products-results').offset().top - 120
		}, 300);

		$ec('.ec_ajax_container').append('<div id="ec_content-ec_loading" style="margin-top: '+($ec('.products-results').offset().top - 200)+'px"><div class="cssload-container"><div class="cssload-speeding-wheel"></div></div></div>');
		$ec('#ec_content-ec_loading').width($ec('.ec_ajax_container').width());
		$ec('#ec_content-ec_loading').height($ec('.ec_ajax_container').height());
		$ec.ajax({
			url: h,
			error: function() {
				self.location = h;
			},
			success: function(r) {
				$ec('#ec_content-ec_loading').remove();
				$ec('.products-results').html(r);
				h = h.replace('filtered=1&amp;', '') ;
//        alert(h+'|'+r);
				ajax_clicks();
				put_filter_push = parnet_site_page+'#!'+filter_url+url_params;
				load_filter(url_params, url);
				dontloadfilter = true;
				proceed_clicks('search');
			}
		});
}

$(window).resize(function() {
  left_filter_max_height();
});

$(window).scroll(function() {
  left_filter_max_height();
});

function left_filter_max_height() {
  if ($('.withleftec_menu .left_filter').size()) {
    var max_height = ($(window).height() - 80);
    if ($(window).scrollTop() < 230) {
//      max_height += $(window).scrollTop();
      max_height = 2000;
    }

    $('.withleftec_menu .left_filter').css('max-height', max_height+'px');
  }
}