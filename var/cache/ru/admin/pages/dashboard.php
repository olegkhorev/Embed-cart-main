<table class="db-stats-1" cellspacing="30">
<tr>
 <td class="td-1" onclick="self.location='<?php echo $current_location;?>/admin/products';"><span><?php echo $products;?></span><h2>Продукты</h2></td>
 <td class="td-2" onclick="self.location='<?php echo $current_location;?>/admin/orders';"><span><?php echo $orders_count;?></span><h2>Заказы</h2></td>
 <td class="td-3" onclick="self.location='<?php echo $current_location;?>/admin/users';"><span><?php echo $users;?></span><h2>Клиенты</h2></td>
 <td class="td-4" onclick="self.location='<?php echo $current_location;?>/admin/categories';"><span><?php echo $categories;?></span><h2>Категории</h2></td>
</tr>
</table>

<table class="db-stats-2" cellspacing="30">
<tr>
 <td class="td-2" onclick="self.location='<?php echo $current_location;?>/admin/subscribtions';"><span><?php echo $subscribers;?></span><h2>Подписчики</h2></td>
 <td class="td-4" onclick="self.location='<?php echo $current_location;?>/admin/pages';"><span><?php echo $static_pages;?></span><h2>Страницы</h2></td>
 <td class="td-6" onclick="self.location='<?php echo $current_location;?>/admin/gift_cards';"><span><?php echo $gift_cards;?></span><h2>Подарочные карты</h2></td>
 <td class="td-7" onclick="self.location='<?php echo $current_location;?>/admin/coupons';"><span><?php echo $coupons;?></span><h2>Купоны</h2></td>
 <td class="td-8" onclick="self.location='<?php echo $current_location;?>/admin/memberships';"><span><?php echo $memberships;?></span><h2>Группы</h2></td>
</tr>
</table>

<table class="db-stats-3" cellspacing="30">
<tr>
 <td>
<h3>Рекомендуемые<a class="float-right" target="_blank" href="<?php echo $current_location;?>/admin/categories">(Управление)</a></h3>
<?php 
$products = $featured_products;
$type = 'F';
?>
<?php include SITE_ROOT."/var/cache/ru/admin/pages/dashboard_products.php";?>
 </td>
 <td>
<h3>Новые</h3>
<?php 
$products = $new_arrivals;
$type = 'N';
?>
<?php include SITE_ROOT."/var/cache/ru/admin/pages/dashboard_products.php";?>
 </td>
 <td>
<h3>Бестселлеры</h3>
<?php 
$products = $bestsellers;
$type = 'B';
?>
<?php include SITE_ROOT."/var/cache/ru/admin/pages/dashboard_products.php";?>
 </td>
 <td>
<h3>По просмотрам</h3>
<?php 
$products = $most_viewed;
$type = 'M';
?>
<?php include SITE_ROOT."/var/cache/ru/admin/pages/dashboard_products.php";?>
 </td>
</tr>
</table>
