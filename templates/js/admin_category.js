/**
* Embed-Cart
* Copyright (c) Oleg Khorev
*
* Released under the MIT License.
* https://github.com/olegkhorev/Embed-cart-main
*/
function submit_category() {	if (!document.category_form.title.value) {		ec_alert("{lng[Please, enter category title]}");
		bc = false;		document.category_form.title.focus();
	} else
		document.category_form.submit();}