<?php
/**
* Embed-Cart
* Copyright (c) Oleg Khorev
*
* Released under the MIT License.
* https://github.com/olegkhorev/Embed-cart-main
*/
?>
{if $cart['products']}
<a href="{$current_location}/cart" class="ec_ajax_link"><img class="cart-icon" src="{$current_location}/images/new/cart.png" alt="" /> {lng[Cart]} ({php echo count($cart['products']);})</a>
{else}
<img src="{$current_location}/images/new/cart.png" class="cart-icon" alt="" />
<span>{lng[Cart]}</span>
{/if}
