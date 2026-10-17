<?php
/**
* Embed-Cart
* Copyright (c) Oleg Khorev
*
* Released under the MIT License.
* https://github.com/olegkhorev/Embed-cart-main
*/
?>
<?php
$_SESSION['login'] = $_SESSION['userinfo'] = '';
func_setcookie('remember', '');
#if (!$login) {
	redirect($current_location.'/?original=1&its_ajax_page=1', true);
#}
