<table class="db-stats-1" cellspacing="30">
<tr>
<td class="ec_ajax_link td-1" href='{$current_location}/admin/products'><span>{$products}</span><h2>{lng[Products]}</h2></td>
 <td class="ec_ajax_link td-2" href='{$current_location}/admin/orders'><span>{$orders_count}</span><h2>{lng[Orders]}</h2></td>
 <td class="ec_ajax_link td-3" href='{$current_location}/admin/users'><span>{$users}</span><h2>{lng[Customers]}</h2></td>
 <td class="ec_ajax_link td-4" href='{$current_location}/admin/categories'><span>{$categories}</span><h2>{lng[Categories]}</h2></td>
</tr>
</table>

<table class="db-stats-2" cellspacing="30">
<tr>
 <td class="ec_ajax_link td-2" href="{$current_location}/admin/subscribtions"><span>{$subscribers}</span><h2>{lng[Subscribers]}</h2></td>
 <td class="ec_ajax_link td-4" href="{$current_location}/admin/pages"><span>{$static_pages}</span><h2>{lng[Static pages]}</h2></td>
 <td class="ec_ajax_link td-6" href="{$current_location}/admin/gift_cards"><span>{$gift_cards}</span><h2>{lng[Gift cards]}</h2></td>
 <td class="ec_ajax_link td-7" href="{$current_location}/admin/coupons"><span>{$coupons}</span><h2>{lng[Coupons]}</h2></td>
 <td class="ec_ajax_link td-8" href="{$current_location}/admin/memberships"><span>{$memberships}</span><h2>{lng[Memberships]}</h2></td>
</tr>
</table>

<div class="income_all_chart hidden">{php echo json_encode($last_30_days_all)}</div>
<div class="income_paid_chart hidden">{php echo json_encode($last_30_days_paid)}</div>

<h1>{lng[All orders]}</h1>
<div class="chart-container chart-container--line" style="max-width: calc(100% - 60px);">
<canvas id="chart-line"></canvas>
</div>
<br /><br />

<table class="db-stats-3" cellspacing="30">
<tr>
 <td>
<h3>{lng[Recommended]}<a class="float-right" target="_blank" href="{$current_location}/admin/categories">({lng[Manage]})</a></h3>
<?php
$products = $featured_products;
$type = 'F';
?>
{include="admin/pages/dashboard_products.php"}
 </td>
 <td>
<h3>{lng[New]}</h3>
<?php
$products = $new_arrivals;
$type = 'N';
?>
{include="admin/pages/dashboard_products.php"}
 </td>
 <td>
<h3>{lng[Bestsellers]}</h3>
<?php
$products = $bestsellers;
$type = 'B';
?>
{include="admin/pages/dashboard_products.php"}
 </td>
 <td>
<h3>{lng[Most viewed]}</h3>
<?php
$products = $most_viewed;
$type = 'M';
?>
{include="admin/pages/dashboard_products.php"}
 </td>
</tr>
</table>
