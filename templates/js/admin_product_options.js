/**
* Embed-Cart
* Copyright (c) Oleg Khorev
*
* Released under the MIT License.
* https://github.com/olegkhorev/Embed-cart-main
*/
(function($) {"use strict";	$ec('#data_type').change(function() {		if ($ec(this).val() == 'g') {			$ec('#data_view_type').html("<option value='s'>{lng[Select box]}</option><option value='p'>{lng[Squares]}</option>");		} else {			$ec('#data_view_type').html("<option value='t'>{lng[Text area]}</option><option value='i'>{lng[Input box]}</option>");		}	});})($);