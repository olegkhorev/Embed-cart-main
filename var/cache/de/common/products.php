<div class="responsive-columns products"<?php if ($tag_id) {?> id="<?php echo $tag_id;?>"<?php } ?>>
<?php foreach ($products as $v) {?>
<div class="res-item">
<div class="res-zoom"><div data-productid="<?php echo $v['productid'];?>" class="quick-look main-button">Produktinfo</div></div>
<div class="photo">
<a class="ajax_link"<?php /* ?><?php if ($device != 'mobile') {?> title="Move product to cart to add it"<?php } ?><?php */ ?> href="<?php echo $current_location;?>/<?php if ($v['cleanurl']) {?><?php echo $v['cleanurl'];?>.html<?php } else  { ?>product/<?php echo $v['productid'];?><?php } ?>">
<?php if ($v['photo']) {?>
<?php 
$image = $v['photo'];
$image['new_width'] = 234;
$image['class'] = 'product-image';
$image['id'] = 'pid-'.$v['productid'];
$image['new_height'] = 200;
$image['center'] = 1;
include SITE_ROOT . '/includes/image.php';
?>
<?php } ?>
</a>
<?php /* ?>
<?php if ($device != 'mobile') {?>
<span class="move2cart">Bewege mich zum Warenkorb</span>
<?php } ?>
<?php */ ?>
</div>
 <div class="res-name"><a class="ajax_link" href="<?php echo $current_location;?>/<?php if ($v['cleanurl']) {?><?php echo $v['cleanurl'];?>.html<?php } else  { ?>product/<?php echo $v['productid'];?><?php } ?>"><?php echo $v['name'];?></a></div>
 <div class="res-price"><?php echo '<span class="currency">'.currency_symbol().'</span>'.price_format_currency($v['price']); ?><?php if ($v['list_price']) {?> <span class="list-price">(<s><?php echo '<span class="currency">'.currency_symbol().'</span>'.price_format_currency($v['list_price']); ?></s>)<?php } ?></span></div>
 <div class="res-buttons">
<?php if ($v['avail'] > 0) {?>
<button id="pid<?php echo $v['productid'];?>">Zum Warenkorb hinzufügen</button>
<?php } else  { ?>
<div class="out-of-stock">
<span><?php echo '<span class="currency">'.currency_symbol().'</span>'.price_format_currency($v['price']); ?><?php if ($v['list_price']) {?> (<s><?php echo '<span class="currency">'.currency_symbol().'</span>'.price_format_currency($v['list_price']); ?></s>)<?php } ?></span>
Out of stock
</div>
<?php } ?>
<br />
<a class="main-button" onclick="javascript: return <?php if ($login) {?>add_wishlist(<?php echo $v['productid'];?>);<?php } else  { ?>login_popup();<?php } ?>" href="javascript: void(0);">Zur Wunschliste hinzufügen</a>
 </div>
</div>
<?php } ?>
</div>
<div class="clear"></div>