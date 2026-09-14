<div class="minicart-icon"><img src="<?php echo $current_location;?>/images/cart.png" alt="" /></div>
<?php if ($cart['products']) {?>
<div class="full-cart-label">
<span class="hide4mobile">Товары: </span><?php echo count($cart['products']);; ?>
<div class="cart-links">
<a href="<?php echo $parnet_site_page;?>#!cart" class="cart-link-force ec_ajax_link">Корзина</a><span class="hide4mobile"><a href="<?php echo $parnet_site_page;?>#!checkout" class="checkout-link-force ec_ajax_link">Заказать</a></span>
</div>
</div>
<?php } else  { ?>
<span class="empty-cart-label">Корзина пуста</span>
<?php } ?>