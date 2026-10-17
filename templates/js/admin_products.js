/**
* Embed-Cart
* Copyright (c) Oleg Khorev
*
* Released under the MIT License.
* https://github.com/olegkhorev/Embed-cart-main
*/
(function($) {"use strict";	$ec('.collapse').on('click', function() {		var i = $ec(this).attr('id'),			c = $ec('#'+i+'_content');		if (c.is(':visible')) {			$ec(this).removeClass('minus');			c.hide();		} else {			$ec(this).addClass('minus');			c.show();		}	});})($);