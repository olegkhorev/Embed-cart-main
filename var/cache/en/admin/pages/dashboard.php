<table class="db-stats-1" cellspacing="30">
<tr>
<td class="ec_ajax_link td-1" href='<?php echo $current_location;?>/admin/products'><span><?php echo $products;?></span><h2>Products</h2></td>
 <td class="ec_ajax_link td-2" href='<?php echo $current_location;?>/admin/orders'><span><?php echo $orders_count;?></span><h2>Orders</h2></td>
 <td class="ec_ajax_link td-3" href='<?php echo $current_location;?>/admin/users'><span><?php echo $users;?></span><h2>Customers</h2></td>
 <td class="ec_ajax_link td-4" href='<?php echo $current_location;?>/admin/categories'><span><?php echo $categories;?></span><h2>Categories</h2></td>
</tr>
</table>

<table class="db-stats-2" cellspacing="30">
<tr>
 <td class="ec_ajax_link td-2" href="<?php echo $current_location;?>/admin/subscribtions"><span><?php echo $subscribers;?></span><h2>Subscribers</h2></td>
 <td class="ec_ajax_link td-4" href="<?php echo $current_location;?>/admin/pages"><span><?php echo $static_pages;?></span><h2>Static pages</h2></td>
 <td class="ec_ajax_link td-6" href="<?php echo $current_location;?>/admin/gift_cards"><span><?php echo $gift_cards;?></span><h2>Gift Cards</h2></td>
 <td class="ec_ajax_link td-7" href="<?php echo $current_location;?>/admin/coupons"><span><?php echo $coupons;?></span><h2>Coupons</h2></td>
 <td class="ec_ajax_link td-8" href="<?php echo $current_location;?>/admin/memberships"><span><?php echo $memberships;?></span><h2>Memberships</h2></td>
</tr>
</table>

<div class="income_all_chart hidden"><?php echo json_encode($last_30_days_all); ?></div>
<div class="income_paid_chart hidden"><?php echo json_encode($last_30_days_paid); ?></div>

<h1>All orders</h1>
<div class="chart-container chart-container--line" style="max-width: calc(100% - 60px);">
<canvas id="chart-line"></canvas>
</div>
<br /><br />

<table class="db-stats-3" cellspacing="30">
<tr>
 <td>
<h3>Recommended<a class="float-right" target="_blank" href="<?php echo $current_location;?>/admin/categories">(Manage)</a></h3>
<?php 
$products = $featured_products;
$type = 'F';
?>
<?php include SITE_ROOT."/var/cache/en/admin/pages/dashboard_products.php";?>
 </td>
 <td>
<h3>New</h3>
<?php 
$products = $new_arrivals;
$type = 'N';
?>
<?php include SITE_ROOT."/var/cache/en/admin/pages/dashboard_products.php";?>
 </td>
 <td>
<h3>Bestsellers</h3>
<?php 
$products = $bestsellers;
$type = 'B';
?>
<?php include SITE_ROOT."/var/cache/en/admin/pages/dashboard_products.php";?>
 </td>
 <td>
<h3>Most viewed</h3>
<?php 
$products = $most_viewed;
$type = 'M';
?>
<?php include SITE_ROOT."/var/cache/en/admin/pages/dashboard_products.php";?>
 </td>
</tr>
</table>
