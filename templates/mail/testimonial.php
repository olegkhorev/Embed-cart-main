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
{$email_ec_header}
{lng[Hello]},
<br /><br />
<p>{lng[New testimonial is here]}</p>
<br />
<a href="{$http_location}/admin/testimonials">{$http_location}/admin/testimonials</a>
<br /><br />
{$signature};
{include="mail/footer.php"}