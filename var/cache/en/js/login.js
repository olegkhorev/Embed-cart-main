(function($) {

"use strict";

  $ec(document).ready(function() {

	if (ec_page == 'login')

		login_clicks();
  });

})($);



function login_popup() {

	if (mobile_screen > $ec(window).width()) {

		return false;

  }


	if (ec_page != 'login') {
		$ec('.register_alert').css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, -70)');

		setTimeout(function() {

			$ec('.register_alert').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');

			setTimeout(function() {

				$ec('.register_alert').remove();

			}, 200);

		}, 200);

		bc = false;

		if ($ec('.login_alert').size() != 0) {
			fade();

			$ec('.login_alert').show();

			$ec('.login_alert').css('opacity', 0).css('transform', 'matrix(0.1, 0, 0, 0.1, 0, 0)');

			setTimeout(function() {

				$ec('.login_alert').css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, 70)');

				setTimeout(function() {

					$ec('.login_alert').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');

				}, 200);

			}, 200);

		} else {
			var id = ec_alert('<div class="login_screen"></div>', 1, '', 'login_alert not_remove2 hidden');

			$ec('.login_screen').load(current_location+'/login'+'?its_ajax_page=1', function(r) {
				unload();
				login_clicks();
				$ec('.login_alert').css('opacity', 0).show();

				$ec('.login_alert').css('opacity', 0).css('transform', 'matrix(0.1, 0, 0, 0.1, 0, 0)');

				setTimeout(function() {

					$ec('.login_alert').css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, 70)');

					setTimeout(function() {

						$ec('.login_alert').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');

					}, 200);

				}, 200);

			});

		}

	}



	return false;

}



function restore_password() {
	bc = false;

	$ec('.alert_message').remove();
	ec_alert("Your E-mail: <input placeholder=\"Type your email first\" type='text'><div></div>", 1, '', 'res_p');

	$ec('.res_p input').on('keyup', function() {
		$ec.ajax({url: current_location+'/res_p?e='+$ec(this).val()+'&its_ajax_page=1'}).done(function(r) {
			$ec('.res_p div').html(r);

			$ec('.res_p button').on('click', function() {
				$ec.ajax({url: current_location+'/res_p?r='+$ec('.res_p input').val()+'&its_ajax_page=1'});

				$ec('.res_p').remove();

				bc = false;

				ec_alert("Link to change password sent to your email");
			});
		});
	});

}



function login_clicks() {
	$ec('form[name=login] button').unbind('click').on('click', function() {

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



		$ec.ajax({

        	type: "POST",

           	url: current_location+'/login'+'?its_ajax_page=1',

           	data: $ec('form[name=login]').serialize(), // serializes the form's elements.

           	success: function(data)

           	{

            	if (data == 'E') {

					$ec('.register-email-error').fadeIn();

            	} else if (data == 'P') {

					$ec('.register-email-error-2').fadeIn();

            	} else {

            		self.location = parnet_site_page;

            	}

           	}

		});

	});

}