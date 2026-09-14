<div class="responsive-columns products"<?php if ($tag_id) {?> id="<?php echo $tag_id;?>"<?php } ?>>
<?php foreach ($products as $v) {?>
<div class="ec_res-item">
<div class="res-ec_zoom">
<?php /* ?>
<div data-productid="<?php echo $v['productid'];?>" class="quick-look main-button">Быстрый просмотр</div>
<?php */ ?>
</div>
<div class="ec_photo">
<?php if ($v['list_price'] > $v['price']) {?>
<span class="ec_discount">
<?php 
$percent = (($v['list_price'] - $v['price'])*100) / $v['list_price'];
echo '-'.round($percent).'%';
 ?>
</span>
<?php } ?>

<a class="ec_save2wl" onclick="javascript: return <?php if ($login) {?>add_wishlist(<?php echo $v['productid'];?>);<?php } else  { ?>ec_alert('Пожалуйста войдите сначала');<?php } ?>" href="javascript: void(0);"><img src="<?php echo $current_location;?>/images/favorite.png" width="23" alt="Добавить в избранное" /></a>

<a class="ec_ajax_link"<?php /* ?><?php if ($device != 'mobile') {?> title="Move product to cart to add it"<?php } ?><?php */ ?> href="<?php echo $parnet_site_page;?>#!/<?php if ($v['cleanurl']) {?><?php echo $v['cleanurl'];?>.html<?php } else  { ?>product/<?php echo $v['productid'];?><?php } ?>">
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
<span class="move2cart">Добавь меня в корзину</span>
<?php } ?>
<?php */ ?>
</div>
 <div class="res-rating">
 <div class="rating-votes"><div style="width: <?php func_average_rating($v); ?>%;"></div></div>
 </div>
 <div class="ec_res-name"><a class="ec_ajax_link" href="<?php echo $parnet_site_page;?>#!/<?php if ($v['cleanurl']) {?><?php echo $v['cleanurl'];?>.html<?php } else  { ?>product/<?php echo $v['productid'];?><?php } ?>"><?php echo $v['name'];?></a></div>
 <div class="ec_res-price">
 <?php echo '<span class="currency">'.currency_symbol().'</span>'.price_format_currency($v['price']); ?>
<?php if ($v['list_price']) {?><s><?php echo '<span class="currency">'.currency_symbol().'</span>'.price_format_currency($v['list_price']); ?></s><?php } ?>
 </div>
 <div class="ec_res-buttons">
<?php if ($v['avail'] > 0) {?>
<button id="pid<?php echo $v['productid'];?>"><span><img src="<?php echo $current_location;?>/images/spacer.gif" alt="Добавить в корзину" /></span>Купить</button>
<?php } else  { ?>
<div class="out-of-stock">
Out of stock
</div>
<?php } ?>
<?php /* ?>
<br />
<a class="main-button" onclick="javascript: return <?php if ($login) {?>add_wishlist(<?php echo $v['productid'];?>);<?php } else  { ?>login_popup();<?php } ?>" href="javascript: void(0);">В список желаний</a>
<?php */ ?>
 </div>
</div>
<?php } ?>
</div>
<div class="ec_clear"></div>