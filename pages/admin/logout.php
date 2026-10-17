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
redirect($current_location.'/admin', true);
