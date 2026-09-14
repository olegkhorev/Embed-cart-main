<div class="product-added">
<?php if ($product['variant_photo']) {?>
<?php 
	$image = $product['variant_photo'];
	$image['new_width'] = 234;
	$image['new_height'] = 200;
	include SITE_ROOT . '/includes/variant_image.php';
?>
<?php } else if ($product['photo']) {?>
<?php 
	$image = $product['photo'];
	$image['new_width'] = 234;
	$image['new_height'] = 200;
	include SITE_ROOT . '/includes/image.php';
?>
<?php } ?>
<b><?php echo $product['name'];?></b> added to cart
</div>
<br /><br />
<table width="100%" class="product-added-table">
<tr>
 <td><button class="close_popup">Continue shopping</button></td>
 <td align="right">

<a href="<?php echo $parnet_site_page;?>#!cart" class="ec_ajax_link main-button">View cart</a>
<a href="<?php echo $parnet_site_page;?>#!checkout" class="ec_ajax_link main-button">Checkout</a>

 </td>
</tr>
</table>