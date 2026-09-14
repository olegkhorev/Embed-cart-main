var register_form = [];

register_form['firstname'] = "Prénom";

register_form['lastname'] = "Lastname";

register_form['email'] = "E-mail";

register_form['password'] = "Mot de passe";



register_form['address'] = "Adresse";

register_form['city'] = "Ville";

register_form['zipcode'] = "Zip/Postal code";

register_form['phone'] = "Téléphone";



(function($) {

"use strict";

  $ec(document).ready(function() {

	if (ec_page == 'checkout') {
		checkout_actions();

		coupon_actions();

		checkout_changes();

		$ec('#place_order *').attr('disabled', true);

	}

  });

})($);