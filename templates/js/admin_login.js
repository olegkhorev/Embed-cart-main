(function($) {
"use strict";
	$ec(document).ready(function() {
		login_clicks();
	});})($);

function restore_password() {	$ec('.alert_message').remove();	ec_alert("Your E-mail: <input type='text'><div></div>", 1, '', 'res_p');
	$ec('.res_p input').on('keyup', function() {		$ec.ajax({url: '/res_p?e='+$ec(this).val()}).done(function(r) {			$ec('.res_p div').html('<br />'+r);
			$ec('.res_p button').addClass('mdl-button mdl-button--colored mdl-button--raised mdl-js-button mdl-js-ripple-effect');
			reinitialize_mdl();
			$ec('.res_p button').on('click', function() {				$ec.ajax({url: '/res_p?r='+$ec('.res_p input').val()});
				$ec('.res_p').remove();
				bc = false;
				ec_alert("{lng[Link to change password sent to your email]}");
			});		});	});

	return false;
}

function login_clicks() {		var i = $ec('form[name=login] input');
		i.on('focus', function() {
			var n = $ec(this).attr('name');
			if (login_form[n] == $ec(this).val()) {
				$ec(this).addClass('def');
				$ec(this).val('');
				if (n == 'password')
					$ec(this).attr('type', 'password');
			}
		});

		i.on('blur', function() {
			var n = $ec(this).attr('name');
			if ($ec(this).val() == '') {
				if (n == 'password')
					$ec(this).attr('type', 'password');
			}
		});

		i.on('keyup', function(e) {
			if (e.which == 13 || e.which == 10)
				$ec('form[name=login] button').trigger('click');

			$ec('.login_error').hide();
		});

		$ec('form[name=login] button').unbind('click').on('click', function() {
			var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
			for (var x in login_form) {
				var e = $ec('form[name=login] input[name='+x+']');
				var v = e.val();
				if (v == login_form[x] || v == '' || (x == 'email' && !r.test(v))) {
					$ec('.login_error').show();
					return false;
				}
			}

			$ec('form[name=login]').submit();
		});
}