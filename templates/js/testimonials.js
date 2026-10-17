/**
* Embed-Cart
* Copyright (c) Oleg Khorev
*
* Released under the MIT License.
* https://github.com/olegkhorev/Embed-cart-main
*/
function check_new_testimonial() {	var error = false;

	if (!$ec('#testimonial_name').val()) {
		func_highlight($ec('#testimonial_name'));
		error = true;
	}

	if (!$ec('#testimonial_message').val()) {		func_highlight($ec('#testimonial_message'));		error = true;
	}

	if (error)
		return false;}