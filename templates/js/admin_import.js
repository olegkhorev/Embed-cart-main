/**
* Embed-Cart
* Copyright (c) Oleg Khorev
*
* Released under the MIT License.
* https://github.com/olegkhorev/Embed-cart-main
*/
function import_checkboxes(val) {	if (val == 'Y')		$ec('[name=exportForm] input').attr('checked', true);
	else		$ec('[name=exportForm] input').attr('checked', false);
}