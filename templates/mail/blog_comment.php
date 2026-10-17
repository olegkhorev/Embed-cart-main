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
{lng[Hello]},<br /><br />
<p>{lng[New blog comment has been posted]}</p>
<a href="{$current_location}/admin/blog/{$blog['blogid']}">{$current_location}/admin/blog/{$blog['blogid']}</a>
<br /><br />
{$signature}
{include="mail/footer.php"}