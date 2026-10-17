<?php
/**
* Embed-Cart
* Copyright (c) Oleg Khorev
*
* Released under the MIT License.
* https://github.com/olegkhorev/Embed-cart-main
*/
?>
{include="mail/ec_header.php"}
{lng[Hello]} {$userinfo['firstname']} {$userinfo['lastname']},<br /><br />
<p>{lng[You has been successfully registered on our site]}</p>
<a href="{$http_location}">{$http_location}</a>
<br /><br />
{$signature}
{include="mail/footer.php"}