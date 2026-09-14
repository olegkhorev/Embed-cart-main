<div class="minicart-icon"><img src="{$current_location}/images/cart.png" alt="" /></div>
{if $cart['products']}
<div class="full-cart-label">
<span class="hide4mobile">{lng[Products]}: </span>{php echo count($cart['products']);}
<div class="cart-links">
<a href="{$parnet_site_page}#!cart" class="cart-link-force ec_ajax_link">{lng[View cart]}</a><span class="hide4mobile"><a href="{$parnet_site_page}#!checkout" class="checkout-link-force ec_ajax_link">{lng[Checkout]}</a></span>
</div>
</div>
{else}
<span class="empty-cart-label">{lng[Cart is empty]}</span>
{/if}