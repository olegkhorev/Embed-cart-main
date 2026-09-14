(function($) {
"use strict";
  $ec(document).ready(function() {
    if (ec_page == 'profile')
    	profile_clicks();
  });
})($);

function profile_popup(url_add) {
	if (ec_page != 'profile') {		var el = $ec('.profile_popup');
		el.css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, -70)');
		setTimeout(function() {
			el.css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
			setTimeout(function() {
				el.remove();
			}, 200);
		}, 200);

	if (url_add == '1') {		aload();
		delay = 1;
	} else {
		delay = 350;
	}

	setTimeout(function() {
		bc = false;
		$ec('body').append('<div class="load hidden"><span class="close close-popup">x</span></div>');
		$ec.ajax({
			dataType: 'json',
			url: '/profile/'+url_add+'?its_ajax_page=1',
			error: function() {
				ec_alert('We cannot process this request. Please, contact site administrator.');
			},
			success: function(r) {
				$ec('.load').html('<span class="close close-popup">x</span>'+r[0]);
				unload();
				fade();
				$ec('.load').addClass('embed-cart-area popup profile_popup').removeClass('load');
				var top = ($ec(window).scrollTop() + $ec(window).height() / 2 - $ec('.profile_popup').height() / 2) - 50;
				if (top < $ec(window).scrollTop())
					top = $ec(window).scrollTop() + 30;

				$ec('.profile_popup').css('top', top + 'px');
				$ec('.profile_popup').css('left', ($ec(window).width() / 2 - $ec('.profile_popup').width() / 2 - 10) + 'px');
				$ec('.profile_popup').css('opacity', 0).css('transform', 'matrix(0.1, 0, 0, 0.1, 0, 0)');
				setTimeout(function() {
					$ec('.profile_popup').css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, 70)');
					setTimeout(function() {
						$ec('.profile_popup').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
					}, 200);
				}, 200);

				$ec('.profile_popup').show();
				$ec(window).resize(function() {
					var top = ($ec(window).scrollTop() + $ec(window).height() / 2 - $ec('.profile_popup').height() / 2) - 50;
					if (top < $ec(window).scrollTop())
						top = $ec(window).scrollTop() + 30;

					$ec('.profile_popup').css('top', top + 'px');
					$ec('.profile_popup').css('left', ($ec(window).width() / 2 - $ec('.profile_popup').width() / 2 - 10) + 'px');
				});

				$ec('.profile_popup .close, .profile_popup .close_popup').on('click', function() {
					removePopups();
				});

				$ec('.profile_popup').on('click', function() {
					bc = false;
					bb = true;
				});

				profile_clicks();
			}
		});

	}, delay);
	}

	return false;
}

function profile_clicks() {
  try {  	ec_states_actions();
  } catch (e) {
  }

	$ec('form[name="user_form"]').unbind('submit').on('submit', function() {
		$ec.ajax({
           type: "POST",
           url: current_location+'/profile'+'?its_ajax_page=1',
           data: $ec('form[name="user_form"]').serialize(), // serializes the form's elements.
           success: function(data)
           {
				if (data == 'Email') {
	                ec_alert('Введенный email зарегистрирован другим пользователем');
				} else {
	                ec_alert('Ваш профиль успешно обновлен.');
				}
           }
		});

		return false;
	});
}

function actions() {
}