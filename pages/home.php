<?php
$products = $db->all("SELECT p.* FROM products p, featured_products fp WHERE fp.productid=p.productid AND fp.categoryid=0 AND fp.enabled=1 AND p.status=1 ORDER BY fp.orderby");
foreach ($products as $k=>$v) {
	if ($v['photoid'])
		$products[$k]['photo'] = $db->row("SELECT * FROM products_photos WHERE photoid='".$v['photoid']."'");
}

$template['featured_products'] = $products;
/*
$bestsellers = $db->all("SELECT * FROM products WHERE status=1 AND sales_stats>0 ORDER BY sales_stats DESC LIMIT 8");
foreach ($bestsellers as $k=>$v) {
	if ($v['photoid'])
		$bestsellers[$k]['photo'] = $db->row("SELECT * FROM products_photos WHERE photoid='".$v['photoid']."'");
}

$template['bestsellers'] = $bestsellers;

$most_viewed = $db->all("SELECT * FROM products WHERE status=1 AND views_stats>0 ORDER BY views_stats DESC LIMIT 8");
foreach ($most_viewed as $k=>$v) {
	if ($v['photoid'])
		$most_viewed[$k]['photo'] = $db->row("SELECT * FROM products_photos WHERE photoid='".$v['photoid']."'");
}

$template['most_viewed'] = $most_viewed;

$new_arrivals = $db->all("SELECT * FROM products WHERE status=1 ORDER BY add_date DESC LIMIT 8");
foreach ($new_arrivals as $k=>$v) {
	if ($v['photoid'])
		$new_arrivals[$k]['photo'] = $db->row("SELECT * FROM products_photos WHERE photoid='".$v['photoid']."'");
}

$template['new_arrivals'] = $new_arrivals;
*/
$banners = $db->all("SELECT * FROM category_banners WHERE categoryid=0 ORDER BY pos, bannerid");
if ($banners) {
	foreach ($banners as $k=>$v) {
		$banners[$k]['image_url'] = $current_location.'/photos/banners/'.$v['categoryid'].'/'.$v['bannerid'].'/'.$v['file'];
	}

	$template['banners'] = $banners;
}

$template['page'] = get_template_contents('home/body.php');