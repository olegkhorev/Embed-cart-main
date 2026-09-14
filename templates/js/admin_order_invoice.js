(function($) {
"use strict";
	$ec('.update-whs').on('click', function() {		var itemid = $ec(this).data('itemid');
		$ec('.warehouses').hide();
		$ec('#warehouses-'+itemid).fadeIn();	});})($);
