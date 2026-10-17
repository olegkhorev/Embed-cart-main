/**
* Embed-Cart
* Copyright (c) Oleg Khorev
*
* Released under the MIT License.
* https://github.com/olegkhorev/Embed-cart-main
*/
(function($) {
"use strict";
	$ec('#wenabled').change(function() {		var checked = $ec(this).is(':checked') ? 1 : 0;		$ec('.warehouses-area').fadeToggle();
		console.log('1');
		$ec.ajax({			method: 'POST',			data: 'wenabled='+checked
		});	});})($);
