/**
* Embed-Cart
* Copyright (c) Oleg Khorev
*
* Released under the MIT License.
* https://github.com/olegkhorev/Embed-cart-main
*/
function submitBrand() {	if (document.brandform.name.value == '') {		document.brandform.name.focus();		bc = false;		ec_alert("{lng[Brand name cannot be empty]}");	} else		document.brandform.submit();}