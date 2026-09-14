<div id="dcart"><img src="<?php echo $current_location;?>/images/dcart.png" alt="" /><br />Переместить товар сюда</div>

<h1><?php echo $category['title'];?></h1>
<?php if ($banners) {?><?php $categoryid = $category['categoryid'];; ?><?php include SITE_ROOT."/var/cache/ru/common/banners.php";?>
<div class="category-banners-descr">
<?php echo $category['description'];;?>
</div>
<div class="ec_clear"></div>
<?php } else  { ?>
<table class="ec_category-details">
<tr>
<?php if ($category_icon) {?>
	<td>
<?php 
$image = $category_icon;
$image['new_width'] = 500;
$image['new_height'] = 300;
include SITE_ROOT . '/includes/icon.php';
?>
</td>
<?php } ?>

<td width="100%"><?php echo $category['description'] ? '<p>'.$category['description'].'</p>' : '';; ?></td></tr></table>
<?php } ?>

<?php if ($subcategories) {?>
<br />
<h2>Подкатегории</h2>
<div id="ec_subcategories" class="ec_responsive-sub">
<?php foreach ($subcategories as $v) {?>
<div class="ec_res-sub-item">
<div class="ec_photo">
<?php $url = $v['cleanurl'] ? $v['cleanurl'] : $v['categoryid'];; ?>
<?php if ($v['icon']) {?>
<a href="<?php echo $parnet_site_page;?>#!<?php echo $url;?>">
<?php 
$image = $v['icon'];
$image['new_width'] = 234;
$image['new_height'] = 200;
include SITE_ROOT . '/includes/icon.php';
?>
<?php } ?>
</div>
<div class="ec_res-name"><a href="<?php echo $parnet_site_page;?>#!<?php echo $url;?>"><?php echo $v['title'];?></a></div>
</div>
<?php } ?>
</div>
<div class="ec_clear"></div>
<?php } ?>

<?php if ($featured_products) {?>
<?php $tag_id = "featured_products"; $products = $featured_products; $per_row = 4; $sort_by = '';; ?>
<h3>Рекомендуемые товары</h3>
<?php include SITE_ROOT."/var/cache/ru/common/products.php";?>
<br />
<?php } ?>

<?php if ($category_products) {?>
<?php $tag_id = "products"; $products = $category_products; $per_row = 4;; ?>
<h3>Товары</h3>
<div class="products-results">
<?php echo $products_results_html;?>
</div>
<?php } else if (!$subcategories) {?><br />
<center>Нет товаров в этой категории</center><?php } ?>
