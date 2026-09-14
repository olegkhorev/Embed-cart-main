function popup_product() {
	aload();
	$ec.ajax({url: current_location+'/admin/popup_product/'}).done(function(r) {
		fade();
		unload();
		$ec('body').append('<div class="embed-cart-area popup products_popup"><img src="'+current_location+'/images/close.png" class="close"/>'+r+'</div>');
		$ec(".products_popup img").one("load", function() {
		var top = ($ec(window).scrollTop() + $ec(window).height() / 2 - $ec('.products_popup').height() / 2);
			if (top < $ec(window).scrollTop())
						top = 30;

			$ec('.products_popup').css('top', top + 'px');
		});

		$ec('.products_popup').css('left', ($ec(window).width() / 2 - $ec('.products_popup').width() / 2 - 10) + 'px');
		$ec(window).resize(function() {
			var top = ($ec(window).scrollTop() + $ec(window).height() / 2 - $ec('.products_popup').height() / 2);
			if (top < $ec(window).scrollTop())
				top = 30;

			$ec('.products_popup').css('top', top + 'px');
			$ec('.products_popup').css('left', ($ec(window).width() / 2 - $ec('.products_popup').width() / 2 - 10) + 'px');
		});

		$ec('.products_popup .close, .products_popup .close_popup').on('click', function() {
			var e = $ec('.products_popup');
  			e.slideUp();
	    	unfade();
			setTimeout(function(){e.remove()}, 500);
		});

		$ec('.products_popup').on('click', function() {
			bc = false;
			bb = true;
		});

		$ec('#popup_product .categories select').dblclick(function() {
			aload();
			$ec.ajax({url: current_location + '/admin/popup_product/'+$ec(this).val()}).done(function(r) {
				unload();
				$ec('#popup_product .products').html(r);
				$ec('#popup_product .products select').dblclick(function() {
					popup_product_pid.value = $ec(this).val();
					popup_product_pname.value = $ec(this).find('option:selected').text();
					var e = $ec('.products_popup');
	  				e.hide();
			    	unfade();
					setTimeout(function(){e.remove()}, 500);
				});
			});
		});
	});
}