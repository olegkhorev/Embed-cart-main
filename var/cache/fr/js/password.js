var pw_form = [];
pw_form['new_pswd'] = "Nouveau mot de passe";
pw_form['con_pswd'] = "Confirmer le mot de passe";

(function($) {

"use strict";

  $ec(document).ready(function() {

	var i = $ec('.cpsec input'),

		b = $ec('.cpsec button'),

		er = $ec('.cpsec .er');


			i.on('focus', function() {

				var n = $ec(this).attr('name');

				if (pw_form[n] == $ec(this).val()) {

					$ec(this).addClass('def');

					$ec(this).val('');

					$ec(this).attr('type', 'password');

				}



				er.hide();

			});



			i.on('blur', function() {

				var n = $ec(this).attr('name');

				if ($ec(this).val() == '') {

					$ec(this).removeClass('def');

					$ec(this).attr('type', 'text');

					$ec(this).val(pw_form[n]);

				}

			});



			i.on('keyup', function(e) {

				if (e.which == 13 || e.which == 10)

					b.trigger('click');

			});



			b.on('click', function() {

				var d = '';

				for (var x in pw_form) {

					var e = $ec('input[name='+x+']');

					var v = e.val();

					if (v == pw_form[x] || v == '') {

						ec_alert("S'il vous plaît, entrez "+pw_form[x]);

						return false;

					}



					d += x+'='+encodeURIComponent(v)+'&';

				}



				if ($ec('input[name=new_pswd]').val() != $ec('input[name=con_pswd]').val()) {
					er.show();

					ec_alert("S'il vous plaît, entrez les bonnes champ confirmer le mot de passe");

					return false;

				} else

					e.hide();



				document.cpform.submit();

			});

  });

})($);

