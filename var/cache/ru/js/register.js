var register_form = [];

register_form['firstname'] = "Имя";

register_form['lastname'] = "Фамилия";

register_form['email'] = "Электронная почта";

if (ec_page == 'register')

	register_form['password'] = "Пароль";



register_form['address'] = "Адрес";

register_form['city'] = "Город";

register_form['zipcode'] = "Почтовый индекс";

register_form['phone'] = "Телефон";



(function($) {

"use strict";

  $ec(document).ready(function() {

	if (ec_page == 'register')
		register_actions();

  });

})($);



function register_actions() {

	$ec('form[name=register] button').on('click', function() {

		if (!$ec('form[name=register] [name="firstname"]').val()) {

			func_highlight($ec('form[name=register] [name="firstname"]'));

			return false;

		}



		if (!$ec('form[name=register] [name="lastname"]').val()) {

			func_highlight($ec('form[name=register] [name="lastname"]'));

			return false;

		}



		var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,

			email = $ec('form[name=register] [name="email"]').val();



		if (!email || !r.test(email)) {

			func_highlight($ec('form[name=register] [name="email"]'));

			return false;

		}



		if (!$ec('form[name=register] [name="password"]').val()) {

			func_highlight($ec('form[name=register] [name="password"]'));

			return false;

		}



		$ec.ajax({

        	type: "POST",

           	url: current_location+'/register'+'?its_ajax_page=1',

           	data: $ec('form[name=register]').serialize(), // serializes the form's elements.

           	success: function(data)

           	{

            	if (data == 'E') {

					$ec('.register-email-error').fadeIn();

            	} else {

            		self.location = parnet_site_page;

            	}

           	}

		});

	});

}



function register_popup() {

	if (mobile_screen > $ec(window).width())

		return false;



	if (ec_page != 'register') {

		$ec('.login_alert').css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, -70)');

		setTimeout(function() {

			$ec('.login_alert').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');

			setTimeout(function() {

				$ec('.login_alert').remove();

			}, 200);

		}, 200);



		bc = false;

		if ($ec('.register_alert').size() != 0) {

			fade();

			$ec('.register_alert').css('opacity', 0).show();

			$ec('.register_alert').css('opacity', 0).css('transform', 'matrix(0.1, 0, 0, 0.1, 0, 0)');

			setTimeout(function() {

				$ec('.register_alert').css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, 70)');

				setTimeout(function() {

					$ec('.register_alert').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');

				}, 200);

			}, 200);

		} else {

			var id = ec_alert('<div class="register_screen"></div>', 1, '', 'register_alert not_remove2 hidden');

			$ec('.register_screen').load('/register', function(r) {

				unload();

				register_actions();

				$ec('.register_alert').css('opacity', 0).show();

				$ec('.register_alert').css('opacity', 0).css('transform', 'matrix(0.1, 0, 0, 0.1, 0, 0)');

				setTimeout(function() {

					$ec('.register_alert').css('opacity', 1).css('transform', 'matrix(1.1, 0, 0, 1.1, 0, 70)');

					setTimeout(function() {

						$ec('.register_alert').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');

					}, 200);

				}, 200);

			});

		}

	}



	return false;

}