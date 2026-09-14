<div class="product-added">
{if $product['variant_photo']}
<?php
	$image = $product['variant_photo'];
	$image['new_width'] = 234;
	$image['new_height'] = 200;
	include SITE_ROOT . '/includes/variant_image.php';
?>
{elseif $product['photo']}
<?php
	$image = $product['photo'];
	$image['new_width'] = 234;
	$image['new_height'] = 200;
	include SITE_ROOT . '/includes/image.php';
?>
{/if}
<b>{$product['name']}</b> {lng[added to cart]}
</div>
<br /><br />
<table width="100%" class="product-added-table">
<tr>
 <td><button class="close_popup">{lng[Continue shopping]}</button></td>
 <td align="right">

<a href="{$parnet_site_page}#!cart" class="ec_ajax_link main-button">{lng[View cart]}</a>
<a href="{$parnet_site_page}#!checkout" class="ec_ajax_link main-button">{lng[Checkout]}</a>

 </td>
</tr>
</table>