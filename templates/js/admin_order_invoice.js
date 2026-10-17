/**
* Embed-Cart
* Copyright (c) Oleg Khorev
*
* Released under the MIT License.
* https://github.com/olegkhorev/Embed-cart-main
*/
(function($) {
"use strict";
	$ec('.update-whs').on('click', function() {		var itemid = $ec(this).data('itemid');
		$ec('.warehouses').hide();
		$ec('#warehouses-'+itemid).fadeIn();	});})($);
