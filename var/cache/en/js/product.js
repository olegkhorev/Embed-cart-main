var rate_clicked = 0,
	gst_applied = false,
	qty_clicked = false,
	clear_clicked = false,
	image_popup_clicked = false,
	lbl_buy1click = "Enter your phone number";

(function($) {
"use strict";
  $ec(document).ready(function() {
	if (!$ec('body').hasClass('admin-area'))
		product_clicks();
  });
})($);

function product_clicks() {
	ec_ajax_clicks();
	$ec('.gift_cards button').unbind('click').on('click', function() {
		var val = $ec('#gift_card').val();
		if (val) {
			$ec.ajax({
				type: 'POST',
				url: current_location+'/cart/add_gc/'+val+'?its_ajax_page=1'
			}).done(function(r) {
				if (r) {
					ec_alert('Gift Card added to cart');
					$ec('#ec_minicart').html(r);
					$ec('#ec_head_mobile #ec_minicart').html(r);
					cart_clicks();
				} else {
					ec_alert('Please, enter numeric value');
				}
			});
		}
	});

	if ($ec(window).width() > 700)
		$ec('#ec_zoom').ec_zoom();

	if (ec_oid == 0) {
		ec_qadd = '';
		product_base = $ec('.product');
	} else {
		ec_qadd = '.product_popup ';
		product_base = $ec('.product_popup');
	}

	if (ec_oid == 0)
		default_images = $ec(ec_qadd+'.product .ec_photo table').html();
	else
		default_images_ql = $ec(ec_qadd+'.product .ec_photo table').html();

	postprocess();
	var rating_clicked = false;
	$ec('.rating').unbind('mouseleave').mouseleave(function() {
		if (rating_clicked) {
			$ec('.rating span.r'+$ec('#review_rating').val()).click();
		} else
			$ec('.rating').removeClass('r1').removeClass('r2').removeClass('r3').removeClass('r4').removeClass('r5');
	});

	$ec('.rating span').on('click', function() {
		rating_clicked = true;
		recalc_rating($ec(this));
		$ec('#review_rating').val($ec(this).attr('class').replace('r', ''));
	});

	$ec('.rating span').unbind('mouseover').mouseover(function() {
		recalc_rating($ec(this));
	});

	recaptchaOnload();
}

function recalc_rating(span) {
		$ec('.rating').removeClass('r1').removeClass('r2').removeClass('r3').removeClass('r4').removeClass('r5');
		if (span.hasClass('r1')) {
			$ec('.rating').addClass('r1');
		} else if (span.hasClass('r2')) {
			$ec('.rating').addClass('r1').addClass('r2');
		} else if (span.hasClass('r3')) {
			$ec('.rating').addClass('r1').addClass('r2').addClass('r3');
		} else if (span.hasClass('r4')) {
			$ec('.rating').addClass('r1').addClass('r2').addClass('r3').addClass('r4');
		} else if (span.hasClass('r5')) {
			$ec('.rating').addClass('r1').addClass('r2').addClass('r3').addClass('r4').addClass('r5');
		}
}

function postprocess(ql) {
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		$ec('[name=pricematch] input').on('keyup', function() {
			if ($ec(this).parent().parent().find('.star').size() > 0) {
				if ($ec(this).val() != '' && $ec(this).parent().find('img.mark-green').size() == 0 && ($ec(this).attr('name') != 'email' || emailReg.test($ec(this).val()))) {
					$ec(this).parent().find('img.mark-red').remove();
					$ec(this).removeClass('input-incorrect');
					$ec(this).parent().append('<img src="'+$ec('.spacer-src').attr('src')+'" class="mark-green" alt="Field correct" />');
					$ec(this).addClass('input-correct');
				} else if ($ec(this).val() == '' || ($ec(this).attr('name') == 'email' && !emailReg.test($ec(this).val()))) {
					$ec(this).parent().find('img.mark-green').remove();
					$ec(this).removeClass('input-correct');
				}
			}
		});

		$ec('[name=crform] input, [name=crform] textarea').on('keyup', function() {
			if ($ec(this).parent().parent().find('.star').size() > 0) {
				if ($ec(this).val() != '' && $ec(this).parent().find('img.mark-green').size() == 0) {
					$ec(this).parent().find('img.mark-red').remove();
					$ec(this).removeClass('input-incorrect');
					$ec(this).parent().append('<img src="'+$ec('.spacer-src').attr('src')+'" class="mark-green" alt="Field correct" />');
					$ec(this).addClass('input-correct');
				} else if ($ec(this).val() == '') {
					$ec(this).parent().find('img.mark-green').remove();
					$ec(this).removeClass('input-correct');
				}
			}
		});

		rate_clicked = 0;
		$ec('div.gst-tab').unbind('click').on('click', function() {
			$ec('div.gst-tab').removeClass('active');
			$ec(this).addClass('active');
			if ($ec(this).attr('id') == 'inc_gst') {
				gst_applied = true;
			} else {
				gst_applied = false;
			}

			recalculate_gst();
		});

		// Save gallery list items
		var o = this;
		if ($ec(ec_qadd+'#hasVariants').size() > 0) {
		}

		$ec(ec_qadd+'.price-breaks').mouseover(function() {
			$ec(ec_qadd+'.price-breaks div').show();
		});

		$ec(ec_qadd+'.price-breaks').mouseout(function() {
			$ec(ec_qadd+'.price-breaks div').hide();
		});

		$ec(ec_qadd+'[name=amount]').change(function() {
			if ($ec(this).val() < 1)
				$ec(this).val('1');

			product_options(o);
		}).on('keyup', function() {
			product_options(o);
		});

		$ec('.ec_clear_option').unbind('click').on('click', function() {
			var groupid = $ec(this).attr('id').replace('poa-', '');
			$ec('#pot-'+groupid).html('');
			$ec('#pot-'+groupid).hide();
			$ec('#poa-'+groupid).hide();
			$ec('#pog-'+groupid+' img.checked').remove();
			$ec('#po-'+groupid).val('');
			map_variants(o);
			product_options(o);
			$ec(ec_qadd+'.options-error').hide();
		});

		$ec(ec_qadd+'.options_container div').unbind('click').on('click', function() {
			if ($ec(this).hasClass('unavailable') || !($ec(this).hasClass('option-image') || $ec(this).hasClass('option-name')) || clear_clicked) {
				clear_clicked = false;
				return false;
			}

			$ec(this).parent().find('div img.checked').remove();
			var val = '';
			if ($ec(this).find('img').size() > 0)
				val = $ec(this).find('img').attr('alt');
			else
				val = $ec(this).html();

			var groupid = $ec(this).parent().attr('id').replace('pog-', '');
			$ec('#pot-'+groupid).html(': '+val);
			$ec('#pot-'+groupid).show();
			$ec('#poa-'+groupid).show();
			$ec(this).append("<img src='"+current_location+"/images/check-mark.png' class='checked'>");
			var optionid = $ec(this).attr('id').replace('poi-', '');
			$ec('#po-'+groupid).val(optionid);
			map_variants(o, groupid);
			product_options(o);
			$ec(ec_qadd+'.options-error').hide();
		});

		$ec(ec_qadd+'.product_options').unbind('change').change(function() {
			var id = $ec(this).attr('id').replace('po-', '');
			if ($ec(this).val()) {
				$ec('#pot-'+id).html(': '+$ec(this).find('option:selected').text());
				$ec('#pot-'+id).show();
				$ec('#poa-'+id).show();
			} else {
				$ec('#pot-'+id).hide();
				$ec('#poa-'+id).hide();
			}

			map_variants(o, id);
			product_options(o);
			$ec(ec_qadd+'.options-error').hide();
		});

		product_options(o);
		map_variants(o);

		$ec('.add2cart').unbind('click').on('click', function() {
			if (!option_selected())
				return false;
		});
		// Form AJAX-based submit
		$ec('form.product-details', product_base).eq(0).unbind('submit').on('submit',
			function(event)
			{
				return o.addProductToCart(event, this);
			}
		);
		// Cloud ec_zoom
		var cloud = $ec('.cloud-ec_zoom', product_base);
		if (cloud.length) {
			this.ec_zoomWidget = true;
			if (core.getCommentedData(cloud, 'kZoom')) {
				this.kZoom = core.getCommentedData(cloud, 'kZoom');
			}
			var imageWrapper = $ec(document.createElement('div')).addClass('wrapper');
			cloud.wrap(imageWrapper);
		}

		if ($ec(ec_qadd+'.product-image-gallery li a').length) {
			// TODO: improve to skip additional JS manipulations
			// like resizing etc when it is not needed
			this.selectImage(0);
		} else if (this.ec_zoomWidget && !cloud.data('ec_zoom')) {
			cloud.CloudZoom();
		}
		// Change Continue shopping button for QuickLook mode
		make_gallery_click_on_quick_look();
		$ec('.ql-ec_zoom', product_base).zIndex(10999);
		// Gallery
		if (typeof(window.lightBoxImagesDir) != 'undefined') {
			$ec('.loupe', product_base).on('click',
				function(event) {
					o.showLightbox();
					setTimeout(
						function() {
							$ec('.product-image-gallery li.selected a').eq(0).trigger('click');
						},
						500
					);
					return false;
				}
			);
		}

		// Tabs
		$ec('.product-details-tabs .tabs div', product_base).on('click',
			function () {
				if (!$ec(this).hasClass('active')) {
					var id = $ec(this).find('a').attr('id').substr(5);
					$ec('.product-details-tabs .tabs div.active').removeClass('active');
					$ec(this).addClass('active');
					var box = $ec(this).parents('.product-details-tabs');
					if (box.find('#' + id).hasClass('scroll-pane')) {
						destroy_custom_scrolls_bars(box.find('#' + id));
					}

					destroy_custom_scrolls_bars(box.find('.variants-list'));
					box.find('.tab-container').hide();
					box.find('#' + id).show();
					box.find('.faq-answer').eq(0).show();
					if (box.find('#' + id).hasClass('scroll-pane')) {
						if (box.find('#' + id).hasClass('Reviews-tab')) {
							scroll_apis[scroll_apis.length] = [box.find('#' + id), box.find('#' + id).jScrollPane().data().jsp];
						} else {
							custom_scrolls_bars(box.find('#' + id));
						}
					}

					custom_scrolls_bars(box.find('.variants-list'));
					if ($ec('.cp_message .progress-bar').size() > 0) {
						$ec('.cp_message div').html('');
						$ec('.cp_message_fade').hide();
						$ec('.cp_message').hide();
						$ec('.cp_message button').show();
					}

					if ($ec('.cr_message .progress-bar').size() > 0) {
						$ec('.cr_message div').html('');
						$ec('.cr_message_fade').hide();
						$ec('.cr_message').hide();
						$ec('.cr_message button').show();
					}
				}

				return true;
			}
		);
	$ec('.add-review', product_base).on('click', function() {
		if ($ec('.norelated').size() > 0)
			$ec('html, body').animate({scrollTop: $ec(".customerReviews h3").offset().top}, 2000);
		else {
			$ec('.Reviews-tab').data('jsp').scrollTo(0, $ec('.Reviews-tab .jspPane').height());
			$ec(this).hide();
		}
	});
	$ec('.Reviews-tab').bind(
		'jsp-scroll-y',
		function(event, scrollPositionY) {
			$ec('.add-review').show();
			$ec('.add-review').css('top', scrollPositionY);
		}
	);
	$ec('.faq-question', product_base).on('click',
		function() {
			var o = $ec(this);
			$ec('.faq-answer').each(
				function() {
					if (o[0] != $ec(this).parents()[0])
						$ec(this).slideUp();
				}
			);
			$ec(this).find('.faq-answer').slideDown(
				'',
				function() {
					custom_scrolls_bars($ec('.FAQ-tab'));
				}
			);
		}
	);
		// Related Tabs
		$ec('.related-items .tabs div', product_base).on('click',
			function () {
				if (!$ec(this).hasClass('active')) {
					var id = $ec(this).attr('id').substr(5);
					$ec('.related-items .tabs div.active').removeClass('active');
					$ec(this).addClass('active');

					var box = $ec(this).parents('.related-items');
					box.find('.tab-container').hide();
					box.find('#' + id).show();
				}

				return true;
			}
		);
		// Bottom tabs
		$ec('.product-details-bottom-tabs .tabs div', product_base).on('click',
			function () {
				if (!$ec(this).hasClass('active')) {
					var id = $ec(this).find('a').attr('id').replace('link-bt-', '');
					$ec('.product-details-bottom-tabs .tabs div.active').removeClass('active');
					$ec(this).addClass('active');
					var box = $ec(this).parents('.product-details-bottom-tabs');
					if (box.find('.FAQ-tab').size() > 0) {
						destroy_custom_scrolls_bars($ec('.FAQ-tab'));
						box.find('.tab-container').hide();
						$ec('.FAQ-tab').show();
						custom_scrolls_bars($ec('.FAQ-tab'));
					} else {
						destroy_custom_scrolls_bars(box.find('#tab-content-'+id+' .scroll-pane'));
						box.find('.tab-container').hide();
						box.find('#tab-content-'+id).show();
						custom_scrolls_bars(box.find('#tab-content-'+id+' .scroll-pane'));
					}
				}

				return true;
			}
		);

		// Custom quantity
		custom_quantity();

		if (!product_base.hasClass('product-quicklook') && !(0 < product_base.parents('.blockUI').length)) {
			$ec('#relatedItems .img img').on('click', function() {
				popup.postprocessRequestCallback = function()
				{
					popup.postprocessRequest.apply(popup, arguments);
					$ec(ec_qadd+'.product-image-gallery a').eq(0).trigger('click');
				};

				return !popup.load(
					URLHandler.buildURL({
						target:			'quick_look',
						action:			'',
						productid:		$ec(this).parent().attr('id').replace('ip', ''),
						only_center:	1
					}),
					'product-quicklook',
					function () {
						ec_oid = 0;
						ec_qadd = '';
						$ec('.formError').hide();
					},
					50000
				);
			});
			$ec('.related-to-cart').on('click',
				function()
				{
					if ($ec(this).hasClass('no-options')) {
						var pid = $ec(this).attr('id').replace('p', '');
						var data = 'target=cart&action=add&productid='+pid+'&amount='+$ec(this).parent().find('.value').html()+'&returnURL='+$ec(ec_qadd+'[name=returnURL]').val();
						var o2 = this;
						$ec.ajax({
							type: 'POST',
							url: '/store/cart',
							data: data,
							beforeSend: function ( xhr ) {
								$ec(o2).parent().find('.cquantity').hide();
								$ec(o2).parent().find('img').hide();
								if ($ec(o2).parent().find('.progress-bar').size() > 0) {
									$ec(o2).parent().find('.progress-bar').show();
								} else {
									$ec(o2).parent().append('<div class="progress-bar"><div class="block-wait"><div></div></div></div>');
								}
							}
						}).done(function(data) {
							$ec('#status-messages ul').html('<li style="" class="status">Product has been added to cart</li>');
							$ec('#status-messages').slideDown(50);
							setTimeout(function() {$ec('#status-messages').slideUp(500);$ec('#status-messages ul').html('<li class="dump">Dump</li>');}, 10000);
							$ec.ajax({
								type: 'GET',
								url: '?productid='+pid+'&q=store/main/?productid='+pid+'/widget-XLite\\Module\\XCDev\\Medshop\\View\\GetAvail',
								data: data
							}).done(function(data) {
								core.trigger('updatecart', eval('({"items":[]})'));
								if (data != 'N') {
									var qty = data.split('|')[0];
									if (qty == 0) {
										$ec(o2).parent().find('.cquantity').remove();
										$ec(o2).parent().append('<div class="ofs">Out of stock</div>');
									} else
										$ec(o2).parent().find('.values').html(qty);
								}
								custom_quantity();
								$ec(o2).parent().find('.progress-bar').hide();
								$ec(o2).parent().find('.cquantity').show();
								if (!(data != 'N' && qty == 0))
									$ec(o2).parent().find('img').show();
							});
						});
					} else {
						popup.postprocessRequestCallback = function()
						{
							popup.postprocessRequest.apply(popup, arguments);
							$ec(ec_qadd+'.product-image-gallery a').eq(0).trigger('click');
						};

						return !popup.load(
							URLHandler.buildURL({
								target:			'quick_look',
								action:			'',
								amount:		 $ec(this).parent().find('.value').html(),
								productid:	$ec(this).attr('id').replace('p', ''),
								only_center: 1
							}),
							'product-quicklook',
							function () {
								ec_oid = 0;
								ec_qadd = '';
								$ec('.formError').hide();
							},
							50000
						);
					}
				}
			)
		}

		$ec('.customerReviews .rate img', product_base).unbind('mouseover').mouseover(function() {
			$ec('.customerReviews .rate img', product_base).removeClass('hover');
			var id = $ec(this).attr('id').replace('star-', '');
			for (var i = 0; i < 5; i++) {
				if (i <= id) {
					$ec('#star-'+i).addClass('hover');
				}
  			}
		}).unbind('click').on('click', function() {
			$ec('.customerReviews .rate img', product_base).removeClass('hover');
  			var id = parseInt($ec(this).attr('id').replace('star-', ''));
  			rate_clicked = id+1;
  			for (var i = 0; i < 5; i++) {
	  			if (i <= id) {
	  				$ec('#star-'+i).addClass('hover');
	  			}
  			}
		});

		$ec('.customerReviews .rate', product_base).unbind('mouseout').mouseout(function() {
			$ec('.customerReviews .rate img', product_base).removeClass('hover');
			if (rate_clicked > 0) {
	  			for (var i = 0; i < 5; i++) {
	  				if (i <= rate_clicked-1) {
	  					$ec('#star-'+i).addClass('hover');
		  			}
	  			}
			}
		});
/*
Check here
*/
		$ec('.r-show-more').mouseover(function() {
			$ec('.r-over').show();
		});
		$ec('.r-show-more').mouseout(function() {
			$ec('.r-over').hide();
		});
		$ec('.otfilter select').unbind('change').change(function() {
			var found = false;
			$ec('.otfilter select').each(function() {
				if ($ec(this).val()) {
					found = true;
				}
			});
			if (found) {
				$ec('.otfilter .submit').addClass('active');
			}
		});
		$ec(ec_qadd+'.otfilter .submit').on('click', function() {
			filter_variants(1);
			$ec('.otfilter .submit').removeClass('active');
		});
		$ec('.otfilter .reset').unbind('click').on('click', function() {
			if ($ec(this).hasClass('active')) {
				for (var i = 0; i < document.otfilter.elements.length; i++)
					document.otfilter.elements[i].value='';
				filter_variants(2);
				$ec(this).removeClass('active');
				$ec('.otfilter .submit').removeClass('active');
			}
		});
		$ec('.sorting li').unbind('click').on('click', function() {
			if ($ec(this).attr('id') && !$ec(this).hasClass('active')) {
				$ec(ec_qadd+'.sorting li').removeClass('active');
				$ec(this).addClass('active');
				filter_variants(0,$ec(this).attr('id'));
			}
		});

        variantsClicks();

		$ec('.getquote').on('click', function(){
			if (!option_selected())
				return false;

			var options = '';
			$ec(ec_qadd+'.product-option textarea').each(function(){
				var name = $ec(this).attr('name').replace('product_options[', '');
				name = name.replace(']', '');
				options += name+'(|,|)'+encodeURIComponent($ec(this).val())+'(|;|)';
			});

			$ec(ec_qadd+'.product-option input').each(function(){
				var name = $ec(this).attr('name').replace('product_options[', '');
				name = name.replace(']', '');
				options += name+'(|,|)'+encodeURIComponent($ec(this).val())+'(|;|)';
			});

			$ec(ec_qadd+'.product-option select').each(function(){
				var name = $ec(this).attr('name').replace('product_options[', '');
				name = name.replace(']', '');
				options += name+'(|,|)'+encodeURIComponent($ec(this).val())+'(|;|)';
			});

			popup.load(
				URLHandler.buildURL({
					target:			'get_quote',
					action:			'',
					productid:		$ec(this).attr('id').replace('gq', ''),
					only_center:	1,
					product_options:options,
					amount:			$ec(ec_qadd+'[name=amount]').val()
				}),
				'get-quote',
				function () {
					ec_oid = 0;
					ec_qadd = '';
					$ec('.formError').hide();
				},
				50000
			);
		});

		if (self.location.hash) {
//			$ec('.product-details-tabs .tabs li a#link-' + self.location.hash.substr(1), product_base).click();
		}
}

$ec('body').on('click',
	function() {
		if (!qty_clicked)
			$ec('.cquantity .values').hide();

		qty_clicked = false;

		if (!image_popup_clicked)
			$ec('.image_popup').hide();

		image_popup_clicked = false;
	}
);

$ec(function() {
	if ($ec('.related-delim .related-items').size() == 1 && $ec('.related-delim .related-exist .product-details-bottom-tabs').size() == 0) {
		$ec('.product-details-tabs .tab-container').height(427);
	}
});

function make_gallery_click_on_quick_look() {
	$ec('.product-quicklook .gallery_left, .product-quicklook .vgallery_left').unbind('click').on('click', function() {
		var visible_id = 0;
		var previous_id = 0;
		var prev_id = 0;
		if ($ec(this).hasClass('vgallery_left')) {
			$ec('.product-quicklook .variants-gallery ul').each(function() {
				var id = $ec(this).attr('id').substring(9, 10);
				if (!$ec(this).hasClass('inactive')) {
					visible_id = id;
					previous_id = prev_id;
				}

				prev_id = id;
			});

			$ec('.product-quicklook .variants-gallery ul').addClass('inactive');
			if (previous_id == 0 && visible_id == 0)
				$ec('#vgallery_'+prev_id+'_quick_look').removeClass('inactive');
			else
				$ec('#vgallery_'+previous_id+'_quick_look').removeClass('inactive');
		} else {
			$ec('.product-quicklook .product-image-gallery ul.dgallery').each(function() {
				var id = $ec(this).attr('id').substring(8, 9);
				if (!$ec(this).hasClass('inactive')) {
					visible_id = id;
					previous_id = prev_id;
				}

				prev_id = id;
			});

			$ec('.product-quicklook .product-image-gallery ul').addClass('inactive');
			if (previous_id == 0 && visible_id == 0)
				$ec('#gallery_'+prev_id+'_quick_look').removeClass('inactive');
			else
				$ec('#gallery_'+previous_id+'_quick_look').removeClass('inactive');
		}
	});

	$ec('.product-quicklook .gallery_right, .product-quicklook .vgallery_right').unbind('click').on('click', function() {
		var visible_id = 0;
		if ($ec(this).hasClass('vgallery_right')) {
			var visible_id = 0;
			$ec('.product-quicklook .variants-gallery ul').each(function() {
				var id = $ec(this).attr('id').substring(9, 10);
				if (!$ec(this).hasClass('inactive')) {
					visible_id = id;
				}
			});

			$ec('.product-quicklook .variants-gallery ul').addClass('inactive');
			var defined = false;
			$ec('.product-quicklook .variants-gallery ul').each(function() {
				var id = $ec(this).attr('id').substring(9, 10);
				if (id > visible_id && !defined) {
					$ec(this).removeClass('inactive');
					defined = true;
				}
			});

			if (!defined) {
				$ec('#vgallery_0_quick_look').removeClass('inactive');
			}
		} else {
			$ec('.product-quicklook .product-image-gallery ul.dgallery').each(function() {
				var id = $ec(this).attr('id').substring(8, 9);
				if (!$ec(this).hasClass('inactive')) {
					visible_id = id;
				}
			});

			$ec('.product-quicklook .product-image-gallery ul').addClass('inactive');

			var defined = false;
			$ec('.product-quicklook .product-image-gallery ul.dgallery').each(function() {
				var id = $ec(this).attr('id').substring(8, 9);
				if (id > visible_id && !defined) {
					$ec(this).removeClass('inactive');
					defined = true;
				}
			});

			if (!defined) {
				$ec('#gallery_0_quick_look').removeClass('inactive');
			}
		}
	});
}

function product_options(o) {
	if (ec_oid == 1) {
		var price = product_price_ql,
			weight = product_weight_ql;
	} else {
		var price = product_price,
			weight = product_weight;
	}

	var variantid = 0;
	if ($ec(ec_qadd+'#hasVariants').size() > 0) {
		$ec(ec_qadd+'.add2cart').addClass('add2cartN');
		var tmp = getVariantId(),
			idx = tmp[1];

		variantid = tmp[0];
			if (variantid > 0 && variants[ec_oid][idx][5].length > 0) {
				var html = '';
				for (var x in variants[ec_oid][idx][5]) {
					if (x == 0 || x == 4 || x == 9)
						html += '<tr>';

					html += '<td>'+variants[ec_oid][idx][5][x]+'</td>';

					if (x == 3 || x == 7)
						html += '</tr>';
				}

				html += '</tr>';
				$ec(ec_qadd+'.product .ec_photo table').html(html);
				switch_photo($ec(ec_qadd+'.product .ec_photo table a:first'));
			} else if ($ec(ec_qadd+'.variants-gallery').hasClass('isvisible')) {
				$ec(ec_qadd+'.product-image-gallery').show();
				$ec(ec_qadd+'.variants-gallery').hide();
				if ($ec(ec_qadd+'.ql-ec_zoom').size() == 0) {
					var next = $ec('#gallery_0');
				} else {
					var next = $ec('#gallery_0_quick_look');
				}
			} else {
				if (ec_oid == 0)
					$ec(ec_qadd+'.product .ec_photo table').html(default_images);
				else
					$ec(ec_qadd+'.product .ec_photo table').html(default_images_ql);
			}

		if (variantid > 0) {
			$ec(ec_qadd+'.add2cart').removeClass('add2cartN');
			if (variants[ec_oid][idx][8])
				$ec(ec_qadd+'.fn.title').html(variants[ec_oid][idx][8]);
			else
				$ec(ec_qadd+'.fn.title').html($ec(ec_qadd+'.fntitle').html());

			$ec(ec_qadd+'.product-sku').html(variants[ec_oid][idx][0]);
			if (variants[ec_oid][idx][2]) {
				$ec(ec_qadd+'.product-weight').html(price_format(variants[ec_oid][idx][2])+' <span class="weight-symbol">'+weight_symbol+'</span>');
				$ec(ec_qadd+'.product-weight').closest('tr').removeClass('hidden');
			}

			$ec(ec_qadd+'.variants-data').show();
			var html = '';
			for (var x in groups[ec_oid]) {
				if (groups[ec_oid][x][1]) {
					if (options[ec_oid][$ec('#po-'+groups[ec_oid][x][0]).val()]) {
						html += '<td nowrap><a href="javascript: void(0);" class="ec_clearOption" id="co-'+groups[ec_oid][x][0]+'">(x)</a> '+options[ec_oid][$ec('#po-'+groups[ec_oid][x][0]).val()]+'</td>';
					}
				}
			}

			html += '<td nowrap><a href="javascript: void(0);" class="ec_clearAll">Clear all</a></td>';
			$ec(ec_qadd+'.variants-data table').html(html);
			$ec('.ec_clearOption').unbind('click').on('click', function() {
				var groupid = $ec(this).attr('id').replace('co-', '');
				$ec('#pot-'+groupid).html('');
				$ec('#pot-'+groupid).hide();
				$ec('#poa-'+groupid).hide();
				$ec('#pog-'+groupid+' img.checked').remove();
				$ec('#po-'+groupid).val('');
				map_variants(o);
				product_options(o);
			});

			$ec('.ec_clearAll').unbind('click').on('click', function() {
				for (var x in groups[ec_oid]) {
					var groupid = groups[ec_oid][x][0];
					$ec('#pot-'+groupid).html('');
					$ec('#pot-'+groupid).hide();
					$ec('#poa-'+groupid).hide();
					$ec('#pog-'+groupid+' img.checked').remove();
					$ec('#po-'+groupid).val('');
				}
				map_variants(o);
				product_options(o);
			});

			price = variants[ec_oid][idx][1];
			var old_price = price;
			if (variants[ec_oid][idx][7].length > 0) {
				var item_amount = $ec(ec_qadd+'[name=amount]').val();
				var hv = [];
				var i = 0;
				for (var x in variants[ec_oid][idx][7]) {
					if (variants[ec_oid][idx][7][x][0] <= item_amount) {
						price = variants[ec_oid][idx][7][x][1];
					}

					hv[i] = variants[ec_oid][idx][7][x];
					i++;
				}

				var html = "<tr><th class='left'>Quantity</th><th>Price Per Unit</th></tr>";
				html += '<tr><th class="td left">1-'+hv[0][0]+'</th><th class="td default" id="whpr-'+price_format(old_price)+'">'+currency_symbol+price_format(old_price)+'</th></tr>';
				for (var x in hv) {
					if (x == hv.length-1) {
						html += '<tr><th class="td left">'+hv[x][0]+'+</th><th class="td right" id="whpr-'+hv[x][1]+'">'+currency_symbol+price_format(hv[x][1])+'</th></tr>';
					} else {
						html += '<tr><th class="td left">'+hv[x][0]+'-'+hv[parseInt(x)+1][0]+'</th><th class="td right" id="whpr-'+hv[x][1]+'">'+currency_symbol+price_format(hv[x][1])+'</th></tr>';
					}
				}

				$ec(ec_qadd+'.price-breaks div table').html(html);
				$ec(ec_qadd+'table.product-qty').addClass('with-p-b');
				$ec(ec_qadd+'.price-breaks').show();
				$('table.product').addClass('ec_with_ws');
				$ec(ec_qadd+'.price-breaks div').show();
				$ec(ec_qadd+'.price-breaks div').height($ec(ec_qadd+'.price-breaks div table').height());
				$ec(ec_qadd+'.price-breaks div').hide();
			} else {
				$('table.product').removeClass('ec_with_ws');
				$ec(ec_qadd+'.price-breaks').hide();
				$ec(ec_qadd+'table.product-qty').removeClass('with-p-b');
			}

			var tmp = $ec(ec_qadd+'.quantity-box-container input').attr('class').split(" ");
			var classes = '';
			for (var x in tmp) {
				if (tmp[x].indexOf('validate[') > -1) {
					classes += "min[1],max["+variants[ec_oid][idx][3].toString()+"]] ";
				} else {
					classes += tmp[x]+' ';
				}
			}

			if ($ec(ec_qadd+'.quantity-box-container input').val() > variants[ec_oid][idx][3]) {
				$ec(ec_qadd+'.quantity-box-container input').val(variants[ec_oid][idx][3]);
			}

			$ec(ec_qadd+'.quantity-box-container input').attr('class', classes);
			if (variants[ec_oid][idx][3].toString() == '0') {
				console.log(idx);
				$ec(ec_qadd+'.add2cart').addClass('add2cartN');
				$ec(ec_qadd+'#quantity').hide();
				$ec(ec_qadd+'.price-breaks').hide();
				$('table.product').removeClass('ec_with_ws');
				$ec(ec_qadd+'#out_of_stock').show();
			} else {
				$ec(ec_qadd+'#out_of_stock').hide();
				$('table.product').addClass('ec_with_ws');
				$ec(ec_qadd+'#quantity').show();
				if ($ec(ec_qadd+'#quantity input').val() < 1)
					$ec(ec_qadd+'#quantity input').val('1');
			}

			$ec(ec_qadd+'.options_container').each(function() {
				if ($ec(this).find('img.checked').size() == 0) {
					var gid = $ec(this).attr('id').replace('pog-', '');
					$ec(ec_qadd+'#pot-'+gid).html(' <b class="optional">(Optional)</b>');
					$ec(ec_qadd+'#pot-'+gid).show();
				}
			});
		} else {
			if ($ec(ec_qadd+'.fntitle').size() > 0)
				$ec(ec_qadd+'.fn.title').html($ec(ec_qadd+'.fntitle').html());

			var cnt = 0,
				cnt2 = 0;

			$ec(ec_qadd+'.options_container, '+ec_qadd+'.product-option select').each(function() {
				if (!$ec(this).hasClass('novar')) {
					cnt2++;
					if ($ec(this).get(0).tagName == 'DIV') {
						if ($ec('#po-'+$ec(this).attr('id').replace('pog-', '')).val())
							cnt++;
					} else if ($ec(this).val())
						cnt++;
				}
			});

			if (cnt == cnt2) {
				$ec('[name="options_ex"]').val(1);
				bc = false;
				ec_alert("This options combination is not available");
			} else {
				$ec('[name="options_ex"]').val(0);
			}

			$ec(ec_qadd+'.variants-data').hide();
			$ec(ec_qadd+'.price-breaks').hide();
			$('table.product').removeClass('ec_with_ws');
			$ec(ec_qadd+'table.product-qty').removeClass('with-p-b');
		}
	} else if (w_prices[ec_oid] && w_prices[ec_oid].length > 0) {
		var item_amount = $ec(ec_qadd+'[name=amount]').val();
		var hv = [];
		var i = 0;
		var old_price = price;
		for (var x in w_prices[ec_oid]) {
			if (w_prices[ec_oid][x][0] <= item_amount) {
				price = w_prices[ec_oid][x][1];
			}

			hv[i] = w_prices[ec_oid][x];
			i++;
		}

		var html = "<tr><th class='left'>Quantity</th><th>Price Per Unit</th></tr>";
		html += '<tr><th class="td left">1-'+hv[0][0]+'</th><th class="td default" id="whpr-'+price_format(old_price)+'">'+currency_symbol+price_format(old_price)+'</th></tr>';
		for (var x in hv) {
			if (x == hv.length-1) {
				html += '<tr><th class="td left">'+hv[x][0]+'+</th><th class="td right" id="whpr-'+hv[x][1]+'">'+currency_symbol+price_format(hv[x][1])+'</th></tr>';
			} else {
				html += '<tr><th class="td left">'+hv[x][0]+'-'+hv[parseInt(x)+1][0]+'</th><th class="td right" id="whpr-'+hv[x][1]+'">'+currency_symbol+price_format(hv[x][1])+'</th></tr>';
			}
		}

		$ec(ec_qadd+'.price-breaks div table').html(html);
		$ec(ec_qadd+'table.product-qty').addClass('with-p-b');
		$ec(ec_qadd+'.price-breaks').show();
		$('table.product').addClass('ec_with_ws');
		$ec(ec_qadd+'.price-breaks div').show();
		$ec(ec_qadd+'.price-breaks div').height($ec(ec_qadd+'.price-breaks div table').height());
		$ec(ec_qadd+'.price-breaks div').hide();
	}

	if (exceptions[ec_oid] && exceptions[ec_oid].length > 0) {
		var ex = exceptions[ec_oid],
			ex_ok = true;

		for (var x in ex) {
			var found = true;
			for (var c in ex[x]) {
				var value = $ec('#po-'+c).val();
				if (!value) {
					ex_ok = true;
					found = false;
					break;
				}

				if (value != ex[x][c]) {
					found = false;
					break;
				}
			}

			if (found) {
				ex_ok = false;
				break;
			}
		}

    	if (!ex_ok) {
			$ec('[name="options_ex"]').val(1);
			bc = false;
			ec_alert("This options combination is not available");
		} else
			$ec('[name="options_ex"]').val(0);
	}

	if ($ec(ec_qadd+'.quantity-box-container input').val() > product_avail[ec_oid]) {
		$ec(ec_qadd+'.quantity-box-container input').val(product_avail[ec_oid]);
	}

	if (!variantid && $ec(ec_qadd+'.product-options').size() > 0) {
		var price_modifier = 0,
			weight_modifier = 0;

		for (var x in groups[ec_oid]) {
			for (var y in groups[ec_oid][x][3]) {
				if ($ec(ec_qadd+'#po-'+x).val() == y) {
					if (groups[ec_oid][x][3][y]) {
						var modifier = groups[ec_oid][x][3][y];
						if (modifier[1] == '%') {
							price_modifier += parseFloat(price) * parseFloat(modifier[0]) / 100;
						} else {
							price_modifier += parseFloat(modifier[0]);
						}

						if (modifier[3] == '%') {
							weight_modifier += parseFloat(weight) * parseFloat(modifier[2]) / 100;
						} else {
							weight_modifier += parseFloat(modifier[2]);
						}
					}
				}
			}
		}

		$ec(ec_qadd+'[name=nongstprice]').val(parseFloat(price)+parseFloat(price_modifier));
		$ec('.price-breaks table th').each(function() {
			if ($ec(this).hasClass('right')) {
				var pr = parseFloat($ec(this).attr('id').replace('whpr-', ''));
				if (pr > 0) {
					if ($ec(this).hasClass('default')) {
						$ec(this).html(''+currency_symbol+price_format(old_price+parseFloat(price_modifier)));
						$ec(this).attr('id', 'whpr-'+price_format(old_price+parseFloat(price_modifier)));
					} else {
						$ec(this).html(''+currency_symbol+price_format(pr+parseFloat(price_modifier)));
						$ec(this).attr('id', 'whpr-'+price_format(pr+parseFloat(price_modifier)));
					}
				}
			}
		});

		$ec(ec_qadd+'.product-to-cart .product-details-price').html('<span class="currency">'+currency_symbol+'</span>'+price_format(parseFloat(price)+parseFloat(price_modifier)));
		weight = parseFloat(weight)+parseFloat(weight_modifier);
		$ec(ec_qadd+'.product-weight').html(price_format(weight)+' <span class="weight-symbol">'+weight_symbol+'</span>');
	} else {
		$ec(ec_qadd+'.product-to-cart .product-details-price').html('<span class="currency">'+currency_symbol+'</span>'+price_format(parseFloat(price)));
	}

	if (ec_oid == 0) {
		recalculate_gst();
	}
}

function getVariantId(r) {
	var variantid = 0;
	var idx = 0;
	for (var x in variants[ec_oid]) {
		var c = 0;
		for (var y in variants[ec_oid][x][4])
			c++;

		var c2 = $ec(ec_qadd+'.options_container div img.checked').size();
		$ec(ec_qadd+'.product_options').each(function(){
			if ($ec(this).val() > 0 && !$ec(this).hasClass('novar'))
				c2++;
		});

		if (c == c2) {
			variantid = variants[ec_oid][x][6];
			idx = x;
			for (var y in variants[ec_oid][x][4])
				if ($ec(ec_qadd+'#po-'+y).val() != variants[ec_oid][x][4][y]) {
					variantid = false;
					break;
				}

			if (variantid)
				break;
		}
	}

	return [variantid, idx];
}

function map_variants(o, groupid) {
	var ids = [],
		vids = [],
		cnt = 0;

	$ec(ec_qadd+'.options_container, '+ec_qadd+'.product-option select').each(function() {
		if (!$ec(this).hasClass('novar'))
			cnt++;
	});

	if (cnt > 1) {
		var ids = [];
		$ec(ec_qadd+'.options_container, '+ec_qadd+'.product-option select').each(function() {
			if (!$ec(this).hasClass('novar')) {
				var gid = $ec(this).attr('id').replace('pog-', '');
				if ($ec(this).get(0).tagName == 'DIV') {
					ids[gid] = $ec('#po-'+gid).val();
				} else {
					ids[$ec(this).attr('id').replace('po-', '')] = $ec(this).val();
				}
			}
		});

		var vids = [];
		for (var x in variants[ec_oid]) {
			var found = true;
			for (var y in variants[ec_oid][x][4]) {
				if (ids[y] > 0) {
					var found2 = false;
					for (var z in ids) {
						if (z == y && ids[z] == variants[ec_oid][x][4][y]) {
							found2 = true;
							break;
						}
					}

					if (!found2) {
						found = false;
						break;
					}
				}
			}

			if (found) {
				vids[x] = 1;
			}
		}

		var ids = [];
		for (var x in vids) {
			for (var y in variants[ec_oid][x][4]) {
				if (!ids[y]) {
					ids[y] = [];
				}

				ids[y][variants[ec_oid][x][4][y]] = 1;
			}
		}

		var ids2 = [];
		for (var x in ids) {
			for (var y in ids[x]) {
				ids2[y] = 1;
			}
		}

		remove_options(groupid, ids2);
	}

	$ec('.help-option').remove();
	$ec(ec_qadd+'.unavailable').each(function() {
		if (!$ec(this).parent().hasClass('novar')) {
			var html = '<table>',
				id = $ec(this).parent().attr('id'),
				found = false;

			$ec(ec_qadd+'.options_container img.checked').each(function() {
				if (id != $ec(this).parent().parent().attr('id')) {
					html += '<tr><td>'+$ec(this).parent().attr('data-title')+'</td><td class="ec_clear"><a href="javascript: void(0);" class="ec_clear-option" id="co-'+$ec(this).parent().parent().attr('id').replace('pog-', '')+'">Clear</a></td></tr>';
					found = true;
				}
			});

			$ec(ec_qadd+'.product_options').each(function() {
				if (id != $ec(this).attr('id').replace('po-', '')) {
					html += '<tr><td>'+$ec(this).find('option:selected').text()+'</td><td class="ec_clear"><a href="javascript: void(0);" class="ec_clear-option" id="co-'+$ec(this).attr('id').replace('po-', '')+'">Clear</a></td></tr>';
					found = true;
				}
			});
		}

		html += '</table>';
		if (found)
			$ec(this).append("<div class='help-option'>Option Not Available in Combination with"+html+'<img src="'+current_location+'/images/spacer.gif" alt="" /></div>');
		else
			$ec(this).append("<div class='help-option'>Option Not Available<img src='"+current_location+"/images/spacer.gif' alt='' /></div>");
	});

	$ec('.ec_clear-option').unbind('click').on('click', function() {
		$ec(this).parent().parent().parent().parent().parent().parent().find('.help-option').remove();
		var groupid = $ec(this).attr('id').split('-')[1];
		$ec('#pot-'+groupid).html('');
		$ec('#pot-'+groupid).hide();
		$ec('#poa-'+groupid).hide();
		$ec('#pog-'+groupid+' img.checked').remove();
		$ec('#po-'+groupid).val('');
		map_variants(o, groupid);
		product_options(o);
		clear_clicked = true;
	});
}

function remove_options(groupid, ids) {
	$ec(ec_qadd+'.options_container div').each(function() {
		if (!$ec(this).parent().hasClass('novar') && !$ec(this).hasClass('clear') && !$ec(this).hasClass('help-option')) {
			var gid = $ec(this).parent().attr('id').replace('pog-', '');
			if (gid != groupid) {
				var optid = $ec(this).attr('id').replace('poi-', '');
				if (ids[optid] == 1) {
					$ec(this).removeClass('unavailable');
				} else {
					$ec(this).addClass('unavailable');
					if ($ec(this).find('img.checked').size > 0) {
						$ec(this).find('img.checked').remove();
						$ec(ec_qadd+'#pot-'+groupid).html('');
						$ec(ec_qadd+'#pot-'+groupid).hide();
						$ec(ec_qadd+'#poa-'+groupid).hide();
						$ec(ec_qadd+'#po-'+groupid).val('');
					}
				}
			}
		}
	});

	$ec(ec_qadd+'.product-option select').each(function() {
		var gid = $ec(this).attr('id').replace('po-', '');
		if (!$ec(this).hasClass('novar') && gid != groupid) {
			for (var x = 0; x < $ec(this).find('option').length; x++) {
				var opt = $ec(this).find('option:eq('+x+')');
				var optid = opt.val();
				if (!optid || ids[optid] == 1) {
					opt.removeClass('unallowed');
					opt.attr('disabled', false);
				} else {
					opt.addClass('unallowed');
					opt.attr('disabled', true);
				}
			}
		}
	});
}

function recalculate_gst() {
	var price = $ec('[name=nongstprice]').val();
	if (price) {
		if (gst_applied) {
			$ec('.product-to-cart h3').html('' + currency_symbol+price_format(price * 1.1));
			$ec('.price-breaks table th').each(function() {
				if ($ec(this).hasClass('td')) {
					var pr = parseFloat($ec(this).attr('id').replace('whpr-', ''));
					if (pr > 0) {
						$ec(this).html(''+currency_symbol+price_format(pr * 1.1));
					}
				}
			});

		} else {
			$ec('.product-to-cart h3').html('' + currency_symbol+price_format(price));
		}
	}
}

function custom_quantity() {
	var cq_zindexes = parseInt($ec(ec_qadd+'.cquantity').size()) + 5;

	$ec(ec_qadd+'.cquantity').each(
		function() {
			var max = parseInt($ec(this).find('.values').html());
			if (!IsNumeric(max))
				return true;

			if (max == 0) {
				$ec(this).find('.value').html('0');
				$ec(this).parent().find('.related-to-cart').hide();
			} else {
				var current = parseInt($ec(this).find('.value').html());
				if (max > 50)
					max = 50;
				var html = '<ul>';
				for (var i = 1; i <= max; i++) {
					html += '<li'+(i == current?' class="selected"':'')+'>'+i+'</li>';
				}
				html += '</ul>';
				$ec(this).find('.values').html(html);
				$ec(this).zIndex(cq_zindexes);
				cq_zindexes--;
			}
		}
	).unbind('click').on('click',
		function() {
			if ($ec(this).hasClass('sbclicked')) {
				$ec(this).removeClass('sbclicked');
			} else {
				qty_clicked = true;
				var was_visible = false;
	 			if ($ec(this).find('.values').is(':visible')) {
	 				$ec(this).find('.values').hide();
	 				was_visible = true;
		 		}
				$ec('.cquantity .values').hide();
				if (!was_visible && !$ec(this).hasClass('clicked')) {
					destroy_custom_scrolls_bars($ec(this).find('.values'));
					$ec('.cquantity .values').hide();
					$ec(this).find('.values').show();
					custom_scrolls_bars($ec(this).find('.values'));
					$ec(this).find('.jspVerticalBar').on('click', function() {
						qty_clicked = true;
						$ec(this).parent().parent().parent().addClass('sbclicked');
					});
					$ec(this).find('.values li').unbind('click').on('click',
						function() {
							$ec('.values li').removeClass('selected');
							$ec(this).addClass('selected');
							$ec(this).parent().parent().parent().parent().parent().find('.value').html($ec(this).html());
							$ec(this).parent().parent().parent().parent().hide();
							$ec('.cquantity').removeClass('clicked');
							$ec(this).parent().parent().parent().parent().parent().addClass('clicked');
						}
					);
				}
				$ec('.cquantity').removeClass('clicked');
   			}
		}
	);
}

function filter_variants(f,sort) {
	var data = '';
	for (var i = 0; i < document.otfilter.elements.length; i++)
		if (document.otfilter.elements[i].name != '' && document.otfilter.elements[i].value != '')
			data += document.otfilter.elements[i].name+'='+cp_escape(document.otfilter.elements[i].value)+'&';

	if (f == 1) {
		if (data && $ec('.otfilter .submit').hasClass('active'))
			$ec('.otfilter .reset').addClass('active');
		else
			return false;
	}

	$ec.ajax({
		type: 'GET',
		url: '?productid='+$ec('form.product-details', product_base).get(0).elements.namedItem('productid').value+'&'+data+'sort='+sort+'&q=store/main/?/widget-XLite\\Module\\XCDev\\Medshop\\View\\OptionsTableFilter',
		beforeSend: function ( xhr ) {
			if ($ec('.variants-list').width() < 800)
				$ec('.Table-tab .progress-bar').css('left', '241px');
			else
				$ec('.Table-tab .progress-bar').css('left', '500px');
			$ec('.Table-tab .progress-bar').show();
			$ec('.variants-list').addClass('variants-ec_loading');
		}
	}).done(function(data) {
		$ec('.variants-list').hide();
		$ec('.Table-tab .progress-bar').hide();
		$ec('.variants-list').removeClass('variants-ec_loading');
		destroy_custom_scrolls_bars($ec('.variants-list'));
		$ec('.variants-list').html(data);
		$ec('.variants-list').html($ec('.variants-list .ajax-container-loadable').html());
		$ec('.variants-list').show();
		custom_scrolls_bars($ec('.variants-list'));
		variantsClicks();
		custom_quantity();
	});
}

function variantsClicks() {
	$ec('.sku img').unbind('click').on('click', function() {
		$ec('.otfilter .image_popup .img').remove();
		$ec('.otfilter .image_popup').append('<div class="img">'+$ec(this).parent().find('.image').html()+'</div>');
		$ec('.otfilter .image_popup').show();
		image_popup_clicked = true;
	});

	$ec('.otfilter .image_popup .close').unbind('click').on('click', function() {
		$ec('.otfilter .image_popup').hide();
	});

	$ec('.otfilter .image_popup').unbind('click').on('click', function() {
		image_popup_clicked = true;
	});

	$ec('.v2cart, .wp img').unbind('click').on('click', function() {
		if ($ec(this).hasClass('v2cart')) {
			var amount = 1;
			var vid = $ec(this).parent().attr('id').replace('v-', '');
		} else {
			var amount = $ec(this).parent().find('.value').html();
			var vid = $ec(this).parent().parent().attr('id').replace('v-', '');
		}

		var pid = $ec('.product-details [name=productid]').val();
		var data = 'target=cart&action=add&productid='+pid+'&variantid='+vid+'&amount='+amount+'&returnURL='+$ec(ec_qadd+'[name=returnURL]').val();
		var o2 = this;
		$ec.ajax({
			type: 'POST',
			url: '/store/cart',
			data: data,
			beforeSend: function ( xhr ) {
				if ($ec(o2).hasClass('v2cart')) {
					$ec(o2).parent().append('<img src="'+$ec('.spacer-src').attr('src')+'" class="ec_loading" alt="Please, wait." />');
					$ec(o2).hide();
					$ec(o2).parent().find('.wp').addClass('wphidden');
				} else {
					$ec(o2).parent().parent().append('<img src="'+$ec('.spacer-src').attr('src')+'" class="ec_loading" alt="Please, wait." />');
					$ec(o2).parent().parent().find('.v2cart').hide();
					$ec(o2).parent().addClass('wphidden');
				}
			}
		}).done(function(data) {
			$ec('#status-messages ul').html('<li style="" class="status">Product has been added to cart</li>');
			$ec('#status-messages').slideDown(50);
			setTimeout(function() {$ec('#status-messages').slideUp(500);$ec('#status-messages ul').html('<li class="dump">Dump</li>');}, 10000);
			$ec.ajax({
				type: 'GET',
				url: '?productid='+pid+'&variantid='+vid+'&q=store/main/?productid='+pid+'/widget-XLite\\Module\\XCDev\\Medshop\\View\\GetAvail',
				data: data
			}).done(function(data) {
				core.trigger('updatecart', eval('({"items":[]})'));
				var qty = -1;
				if (data != 'N') {
					qty = data.split('|')[0];
					$ec(o2).parent().find('.values').html(qty);
				}

				if (qty == 0) {
					if ($ec(o2).hasClass('v2cart')) {
						$ec(o2).parent().parent().addClass('ofs');
						$ec(o2).parent().parent().html('Out Of Stock');
					} else {
						$ec(o2).parent().parent().parent().addClass('ofs');
						$ec(o2).parent().parent().parent().html('Out Of Stock');
					}
				} else {
					custom_quantity();
					if ($ec(o2).hasClass('v2cart')) {
						$ec(o2).parent().find('.ec_loading').remove();
						$ec(o2).parent().find('.wp').removeClass('wphidden');
						$ec(o2).show();
					} else {
						$ec(o2).parent().parent().find('.ec_loading').remove();
						$ec(o2).parent().parent().find('.v2cart').show();
						$ec(o2).parent().removeClass('wphidden');
					}
				}
			});
		});
	});
}

function option_selected() {
	if ($ec(ec_qadd+'#hasVariants').size() > 0) {
		if ($ec(ec_qadd+' input.quantity').val() == 0)
			return false;
		else {
			var tmp = getVariantId();
			var variantid = tmp[0];
			if (!(variantid > 0)) {
				$ec(ec_qadd+'.options-error').show();
				setTimeout('hideOptionsError()', 1000);
				return false;
			}
		}
	} else {
		for (var x in groups[ec_oid]) {
			if (!$ec(ec_qadd+'#po-'+x).get(0)) {
				continue;
			}

			if (!($ec(ec_qadd+'#po-'+x).val() > 0)) {
				$ec(ec_qadd+'.options-error').show();
				setTimeout('hideOptionsError()', 1000);
				return false;
			}
		}
	}

	return true;
}

function validate_gq() {
	if (!document.gqform.name.value) {
		document.gqform.name.focus();
		$ec('[name=gqform] [name=name]').addClass('input-incorrect');
		return false;
	}

	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if (!document.gqform.email.value || !emailReg.test(document.gqform.email.value)) {
		document.gqform.email.focus();
		$ec('[name=gqform] [name=email]').addClass('input-incorrect');
		return false;
	}

	var data = '&';
	for (var i = 0; i < document.gqform.elements.length; i++) {
		if (document.gqform.elements[i].name != '')
			data += document.gqform.elements[i].name+'='+cp_escape(document.gqform.elements[i].value)+'&';
	}

	$ec.ajax({
		type: 'GET',
		url: '?q=store/main/?'+data+'/widget-XLite\\Module\\XCDev\\Medshop\\View\\GetQuote',
		beforeSend: function (xhr) {
			$ec('[name=gqform]').html('<div class="progress-bar"><div class="block-wait"><div></div></div></div>');
		}
	}).done(function(data) {
		$ec('[name=gqform]').html('<h2>Thank you. We will get back soon.</h2>');
	});

	return false;
}

function add_to_cart(productid, is_quick) {
//	ec_alert('1');
	aload();
	$ec('.product_popup').css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, 70)');
	setTimeout(function() {
		$ec('.product_popup').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
		setTimeout(function() {
			$ec('.product_popup').remove();
		}, 200);
	}, 200);

	if (!mobile_design)
		$ec('body').append('<div class="embed-cart-area popup no_animation cart_popup hidden"></div>');

	if (!is_quick) {
    is_quick = '';
	}
//alert($ec(ec_qadd+'form[name="product-details"]').serialize());
	$ec.ajax({
		url: current_location+'/cart/add'+'?its_ajax_page=1',
		type: 'POST',
		data: (is_quick == 'Y' ? "productid="+productid+"&amount=1" : $ec(ec_qadd+'form[name="product-details"]').serialize())
	}).done(function(r) {
//		alert(is_quick+'|'+ec_qadd);
		unload();
		if (r == "1") {
			ec_alert("Please, select options");
			return false;
		}

		if (mobile_design) {
			ec_alert("Product has been added to your cart.<br /><br /><a href='/cart'><button>View cart</button></a> &nbsp; <a href='/checkout'><button>Checkout</button></a>", 1);
		}

		var result = r.toString().split(ajax_delimiter);
		$ec('.cart_popup').html('<span class="close close-popup">x</span>'+result['1']);
		$ec('#ec_minicart').html(result['0']);
		$ec('#ec_head_mobile #ec_minicart').html(result['0']);
		unload();
		fade();
		var top = $(window).scrollTop()+100;
//console.log($ec(window).scrollTop() + '|' + $ec(window).height() + '|' + $ec('.cart_popup').height());
		$ec('.cart_popup').css('top', top + 'px');
		$ec('.cart_popup').css('opacity', 0).css('left', ($ec(window).width() / 2 - $ec('.cart_popup').width() / 2 - 20) + 'px');
		$ec('.cart_popup').removeClass('no_animation');
		$ec('.cart_popup').css('opacity', 0).css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
		setTimeout(function() {
			$ec('.cart_popup').css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, 70)');
			setTimeout(function() {
				$ec('.cart_popup').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
			}, 200);
		}, 200);

		$ec('.cart_popup').removeClass('hidden');
		$ec('.cart_popup .close, .cart_popup .close_popup').on('click', function() {
			$ec('.fade').click();
			return;
    		var e = $ec('.cart_popup');
	    	e.slideUp();
	    	unfade();
			setTimeout(function(){e.remove()}, 500);
		});

		$ec('.cart_popup').on('click', function() {
			bc = false;
			bb = true;
		});

		cart_clicks();
		ec_ajax_clicks();
	});

	return false;
}

function check_exceptions() {
  for (var x in exceptions) {
    if (!hasOwnProperty(exceptions, x) || isNaN(x))
      continue;

    var found = true;
    for (var c in exceptions[x]) {
      if (!hasOwnProperty(exceptions[x], c))
        continue;

      var value = getPOValue(c);
      if (!value)
        return true;

      if (value != exceptions[x][c]) {
        found = false;
        break;
      }
    }

    if (found)
      return false;
  }

  return true;
}

function switch_photo(a) {
	if (mobile_design) {
		$ec('#ec_zoom-mobile').html('<img src="'+a.attr('href')+'">');
	} else if ($ec('.product_popup').is(':visible')) {
		$ec('.product_popup #ec_zoom').html('<img src="'+a.attr('href')+'">');
		if ($ec(window).width() > 700)
			$ec('.product_popup #ec_zoom').ec_zoom();
	} else {
		$ec('#ec_zoom').html('<img src="'+a.attr('href')+'">');
		if ($ec(window).width() > 700)
			$ec('#ec_zoom').ec_zoom();
	}

	return false;
}

function send_to_friend() {
	if (!$ec('#send_to_friend [name="name"]').val()) {
		func_highlight($ec('#send_to_friend [name="name"]'));

		return false;
	}

	var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if (!$ec('#send_to_friend [name="email"]').val() || !r.test($ec('#send_to_friend [name="email"]').val())) {
		func_highlight($ec('#send_to_friend [name="email"]'));
		return false;
	}

	if (!$ec('#send_to_friend [name="friend"]').val() || !r.test($ec('#send_to_friend [name="friend"]').val())) {
		func_highlight($ec('#send_to_friend [name="friend"]'));
		return false;
	}

	$ec('#send_to_friend').submit();
}

function add_review() {
	if (!$ec('#tab-5 [name="rating"]').val()) {
		ec_alert('Please, select your rating.');
		return false;
	}

	if (!$ec('#tab-5 [name="name"]').val()) {
		func_highlight($ec('#tab-5 [name="name"]'));
		return false;
	}

	if (!$ec('#tab-5 [name="message"]').val()) {
		func_highlight($ec('#tab-5 [name="message"]'));
		return false;
	}

	aload();
	$ec.ajax({
		url: window.location.href,
		type: 'POST',
		data: $ec('#tab-5 form').serialize()
	}).done(function(r) {
		unload();
		if (r == "1") {
			ec_alert("Please, enter your name and message");
			return false;
		} else if (r == '2') {
			recaptchaOnload();
			ec_alert("Captcha is incorrect");
			return false;
		} else if (r == '3') {
			recaptchaOnload();
			ec_alert("Your review has been sent to moderation");
			$ec('#tab-5 [name="name"]').val('');
			$ec('#tab-5 [name="message"]').val('');
			return false;
		}
	});
}

function add_wishlist(id) {
	$ec.ajax({
		url: current_location+'/wishlist?add='+id+'&its_ajax_page=1'
	}).done(function(r) {
		ec_alert("Product has been added to your Wishlist");
	});
}

function buy_one_click(pid) {
	ec_alert("We will contact you soon<br /><input type='text' placeholder='"+lbl_buy1click+"' /> <a class='main-button'>Send</a>", 1, '', 'buy_one_click');
	$ec('.buy_one_click a.main-button').on('click', function() {
		var val = $ec('.buy_one_click input').val();
		if (!val)
			return false;
		$ec.ajax({
			url: current_location+'/buy1click?productid='+pid+'&phone='+val+'&its_ajax_page=1'
		}).done(function(r) {
			$ec('.buy_one_click').remove();
			if (r == 'N') {
				ec_alert("You can require quick sale not more than once per 10 seconds");
			} else {
				ec_alert("Please, allow us a few minutes to receive your request");
			}
		});

		return false;
	});
}

var recaptcha1, recaptcha2, recaptcha3, recaptcha4;
function recaptchaOnload() {
	if ($ec('#recaptcha_reviews').size()) {
		try {
			grecaptcha.reset(recaptcha1);
		} catch (err) {
		}
		try {
    	  var verifyCallback = function(response) {
	      };

    	    recaptcha1 = grecaptcha.render(document.getElementById('recaptcha_reviews'), {
        	  'sitekey' : $ec('#recaptcha_reviews').data('sitekey'),
	          'callback' : verifyCallback
    	    });
		} catch (err) {
		}
	}

	if ($ec('#recaptcha_s2f').size()) {
		try {
			grecaptcha.reset(recaptcha2);
		} catch (err) {
		}
		try {
    	  var verifyCallback = function(response) {
	      };

    	    recaptcha2 = grecaptcha.render(document.getElementById('recaptcha_s2f'), {
        	  'sitekey' : $ec('#recaptcha_s2f').data('sitekey'),
	          'callback' : verifyCallback
    	    });
		} catch (err) {
		}
	}

	if ($ec('#recaptcha_contact').size()) {
		try {
			grecaptcha.reset(recaptcha3);
		} catch (err) {
		}
		try {
    	  var verifyCallback = function(response) {
	      };

    	    recaptcha3 = grecaptcha.render(document.getElementById('recaptcha_contact'), {
        	  'sitekey' : $ec('#recaptcha_contact').data('sitekey'),
	          'callback' : verifyCallback
    	    });
		} catch (err) {
		}
	}
}