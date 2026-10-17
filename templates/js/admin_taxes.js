/**
* Embed-Cart
* Copyright (c) Oleg Khorev
*
* Released under the MIT License.
* https://github.com/olegkhorev/Embed-cart-main
*/
function submitTaxForm(name) {	if (name == 'rate') {		if (!$ec('[name="rate_value"]').val()) {			func_highlight($ec('[name="rate_value"]'));			return false;		}	} else {		if (!$ec('[name="tax_service_name"]').val()) {			func_highlight($ec('[name="tax_service_name"]'));			return false;		}	}	return true;}