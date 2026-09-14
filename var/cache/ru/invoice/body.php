<?php if (!$pdf_invoice) {?>
<?php if ($get['2'] != 'print' && !$is_mail) {?><?php if ($userinfo['usertype'] == 'A' && $order['gift_card']) {?>
<b>Gift Card order: <?php echo $order['gift_card'];?></b><br /><br />
<?php } ?>
 <?php if ($get['2'] == 'success') {?><div class="checkout-success-message">Ваш заказ успешно размещен.</div>
 <?php } else if ($get['2'] == 'failed') {?><div class="checkout-fail-message">Мы не можем обработать ваш заказ.</div>
 <?php } ?>
<div class="print-invoice-button">
<a href="<?php echo $current_location;?>/invoice/<?php echo $order['orderid'];?>/print" target="_blank" onclick="javascript: return print_invoice($ec(this));">Распечатать счет-фактуру</a>
<a href="<?php echo $current_location;?>/invoice_pdf/<?php echo $order['orderid'];?>" target="_blank">Скачать счет-фактуру в PDF</a>
<br /><br />
</div><?php } ?>
<?php } ?>
<div style="width: 650px; margin: 0 auto; background: #fff; padding: 15px 10px; <?php if ($get['2'] != 'print' && !$is_mail) {?>border: 1px solid #ccc;<?php } ?>" class="invoice">
<h1 style="text-align: center;">Счет-фактура</h1>
<?php /* ?>
<?php if ($pdf_invoice) {?>
<table width="100%">
<tr>
 <td width="50%" style="font-size: 16px;">Заказ #<?php echo $order['orderid'];?> (<?php echo $order_statuses[$order['status']];?>)</td>
 <td align="right" style="font-size: 16px;"><?php echo date($datetime_format, $order['date']);; ?></td>
 </tr>
</table>
<?php } else  { ?>
<?php } ?>
<?php */ ?>
<table class="invoice-table" style="width: 100%; margin: 10px auto 10px auto;">
<tr>
 <td valign="top" width="50%" id="invoice-table-td-1">
<h2 style="margin: 0; padding: 10px 0; text-align: center;">Заказ #<?php echo $order['orderid'];?> (<?php echo $order_statuses[$order['status']];?>)</h1></h2>
<div>
<?php echo date($datetime_format, $order['date']);; ?>
</div>
<?php if ($order['shipping_method']) {?>
<span style="text-align:right; float: none;" class="delivery-method"><?php if ($order['local_pickup']) {?>Самовывоз:<?php if ($admin_display) {?> <?php echo $order['warehouse']['wcode'];?>,<?php } ?> <?php echo $order['warehouse']['title'];?> (<?php echo $order['warehouse']['address'];?>)<?php } else  { ?>Способ доставки: <?php echo $order['shipping_method']['shipping'];?><?php if ($order['shipping_method']['shipping_time']) {?> (<?php echo $order['shipping_method']['shipping_time'];?>)<?php } ?><?php } ?></span><br />
<?php } ?>
<?php if ($order['payment_method']) {?>
Payment method: <?php echo $order['payment_method'];?><?php if ($order['payment_details']) {?> (<?php echo $order['payment_details'];?>)<?php } ?>
<?php } ?>
<?php if ($order['tracking']) {?>
<br />
Идентификационный номер: <?php echo $order['tracking'];?>
<?php } ?>
<?php if ($order['tracking_url']) {?>
<br />
<a href="<?php echo $order['tracking_url'];?>" target="_blank">Отследить заказ</a>
<?php } ?>
 </td>
 <td valign="top" id="invoice-table-td-2">
<h2 style="margin: 0; padding: 10px 0; text-align: center;">Информация о компании</h2>
<b><?php echo $config['Company']['company_name'];?></b><br />
<a href="<?php echo $current_location;?>" target="_blank"><?php echo $current_location;?></a><br /><br />
<?php echo $config['Company']['location_address'];?>, <?php echo $config['Company']['location_city'];?><br />
<?php echo $config['Company']['location_zipcode'];?>, <?php echo $config['Company']['location_statename'];?><br />
<?php echo $config['Company']['location_countryname'];?><br />
<?php if ($config['Company']['company_phone']) {?>CALL US: <?php echo $config['Company']['company_phone'];?><br /><?php } ?>
<?php if ($config['Company']['company_phone_2']) {?>International: <?php echo $config['Company']['company_phone_2'];?><br /><?php } ?>
<?php if ($config['Company']['company_fax']) {?>Fax: <?php echo $config['Company']['company_fax'];?><br /><?php } ?>
<?php if ($config['Company']['orders_department']) {?>Email: <?php echo $config['Company']['orders_department'];?><?php } ?>
 </td>
</tr>
</table>
<table class="invoice-table" style="width: 100%; margin: 10px auto 10px auto;">
<tr>
 <td valign="top" width="50%" id="invoice-table-td-1">
 <h2 style="margin: 0; padding: 10px 0; text-align: center;">Адрес доставки</h2>
<table width="100%">
<tr>
 <td><b>Имя:</b></td>
 <td><?php echo $order['firstname'];?></td>
</tr>
<tr>
 <td><b>Фамилия:</b></td>
 <td><?php echo $order['lastname'];?></td>
</tr>
<tr>
 <td><b>Адрес:</b></td>
 <td><?php echo $order['address'];?></td>
</tr>
<tr>
 <td><b>Город:</b></td>
 <td><?php echo $order['city'];?></td>
</tr>
<tr>
 <td><b>Регион:</b></td>
 <td><?php echo $order['statename'];?></td>
</tr>
<tr>
 <td><b>Страна:</b></td>
 <td><?php echo $order['countryname'];?></td>
</tr>
<tr>
 <td><b>Почтовый индекс:</b></td>
 <td><?php echo $order['zipcode'];?></td>
</tr>
<tr>
 <td><b>Телефон:</b></td>
 <td><?php echo $order['phone'];?></td>
</tr>
<tr>
 <td><b>Электронная почта:</b></td>
 <td><?php echo $order['email'];?></td>
</tr>
</table>

 </td>
 <td valign="top" id="invoice-table-td-2">
 <h2 style="margin: 0; padding: 10px 0; text-align: center;">Платежный адрес</h2>
<table width="100%">
<tr>
 <td><b>Имя:</b></td>
 <td><?php echo $order['b_firstname'];?></td>
</tr>
<tr>
 <td><b>Фамилия:</b></td>
 <td><?php echo $order['b_lastname'];?></td>
</tr>
<tr>
 <td><b>Адрес:</b></td>
 <td><?php echo $order['b_address'];?></td>
</tr>
<tr>
 <td><b>Город:</b></td>
 <td><?php echo $order['b_city'];?></td>
</tr>
<tr>
 <td><b>Регион:</b></td>
 <td><?php echo $order['b_statename'];?></td>
</tr>
<tr>
 <td><b>Страна:</b></td>
 <td><?php echo $order['b_countryname'];?></td>
</tr>
<tr>
 <td><b>Почтовый индекс:</b></td>
 <td><?php echo $order['b_zipcode'];?></td>
</tr>
<tr>
 <td><b>Телефон:</b></td>
 <td><?php echo $order['b_phone'];?></td>
</tr>
</table>
 </td>
</tr>
</table>

<h3>Товары</h3>
<table width="100%">
<?php foreach ($products as $v) {?>
<?php if ($admin_display) {?>
 <?php $url = '/admin/products/'.$v['productid'];; ?>
<?php } else  { ?>
 <?php $url = $v['cleanurl'] ? $v['cleanurl'] .'.html' : 'product/'.$v['productid'];; ?>
<?php } ?>
	<tr>
	 <td class="image hideonmobile" valign="top" style="padding-right: 10px;"><a href="<?php echo $parent_site_location;?><?php echo $parnet_site_page;?>#!/<?php echo $url;?>" class="ec_ajax_link">
<?php if ($v['variant_photo']) {?>
<?php 
$image = $v['variant_photo'];
$image['new_width'] = 100;
$image['new_height'] = 100;
include SITE_ROOT . '/includes/variant_image.php';
?>
<?php } else if ($v['photo']) {?>
<?php 
$image = $v['photo'];
$image['new_width'] = 100;
$image['new_height'] = 100;
include SITE_ROOT . '/includes/image.php';
?>
<?php } ?>
	  </a></td>
	  <td<?php if ($pdf_invoice) {?> width="60%"<?php } else  { ?> width="100%"<?php } ?> valign="top">
<?php if ($v['gift_card']) {?>
<b>Подарочная Карта</b>
<?php if ($order['gc_generated']) {?>
<?php if ($userinfo['id'] == $order['userid']) {?>
<br />
Фраза-пароль для подарочной карты: <?php echo $v['gift_card'];?>
<?php } ?>
<?php } ?>
<?php } else  { ?>
<a href="<?php echo $parent_site_location;?><?php echo $parnet_site_page;?>#!/<?php echo $url;?>" class="ec_ajax_link"><?php echo $v['name'];?></a>
<?php /* ?>
<?php if ($v['weight']) {?>
<br />
<small>Вес: <?php echo price_format($v['weight']).' <span class="weight-symbol">грамм</span>'; ?></small>
<?php } ?>
<?php */ ?>
<?php if ($v['product_options']) {?>
<hr />
<b>Выбранные параметры:</b><br />
<table width="100%">
 <?php foreach ($v['product_options'] as $o) {?>
<tr>
 <td valign="top" width="150"><?php if ($o['fullname']) {?><?php echo $o['fullname'];?><?php } else  { ?><?php echo $o['name'];?><?php } ?>:</td>
 <td><?php echo $o['option']['name'];?></td>
</tr>
 <?php } ?>
</table>
<?php } ?>
<?php } ?>
 </td>
<?php $product_subtotal = $v['price'] * $v['quantity'];; ?>
 <td<?php if ($pdf_invoice) {?> width="25%"<?php } else  { ?> nowrap<?php } ?> align="right" valign="top">
<?php if ($v['gift_card']) {?>
<?php echo '<span class="currency">'.currency_symbol().'</span>'.price_format_currency($v['price']); ?>
<?php } else  { ?>
<?php echo '<span class="currency">'.currency_symbol().'</span>'.price_format_currency($v['price']); ?> x <?php echo $v['quantity'];?> = <?php echo '<span class="currency">'.currency_symbol().'</span>'.price_format_currency($product_subtotal); ?>
<?php } ?>
 </td>
 <?php if ($admin_display && !$order['local_pickup'] && $warehouse_enabled) {?>
 <td nowrap><span class="update-whs" data-itemid="<?php echo $v['itemid'];?>">Обновить склады</span></td>
 <?php } ?>
	</tr>
 <?php } ?>
</table>

<?php if ($admin_display) {?>
<?php foreach ($products as $v) {?>
<div class="warehouses" id="warehouses-<?php echo $v['itemid'];?>" data-itemid="<?php echo $v['itemid'];?>">
Сумма заказа: <?php echo $v['quantity'];?>
<form method="POST">
<input type="hidden" name="itemid" value="<?php echo $v['itemid'];?>" />
<div class="wh-list">
<table width="100%">
<tr>
 <th>Склад</th>
 <th>Кол-во</th>
</tr>
<?php foreach ($v['warehouses'] as $w) {?>
<tr>
 <td width="100%"><?php echo $w['wcode'];?></td>
 <td nowrap><input type="text" size="3" name="update_wh[<?php echo $v['itemid'];?>][<?php echo $w['wid'];?>]" value="<?php echo $w['spent'];?>" /> (<?php echo $w['avail'];?>)</td>
</tr>
<?php } ?>
</table>
</div>
<br />
<button class="save">Сохранить</button>
<button type="button" class="cancel">Отменить</button>
</form>
</div>
<?php } ?>
<?php } ?>

<div align="right" style="text-align: right;">
<table width="100%">
<tr>
 <td width="50%"></td>
 <td align="right">
<table class="subtotal" style="border-top: 1px solid black;" cellspacing="0" cellpadding="0">
<tr>
 <td width="250" align="right">Итого:</td>
 <td width="70" align="right"><?php echo '<span class="currency">'.currency_symbol().'</span>'.price_format_currency($order['subtotal']); ?></td>
</tr>
<?php if ($order['coupon']) {?>
<?php if ($order['coupon']) {?>
<tr>
 <td align="right">Скидка по купону(<?php echo $order['coupon'];?>):</td>
 <td align="right"><?php echo '<span class="currency">'.currency_symbol().'</span>'.price_format_currency($order['coupon_discount']); ?></td>
</tr>
<?php } ?>
<?php $discounted_subtotal = $order['subtotal'] - $order['coupon_discount'];; ?>
<tr>
 <td align="right">Итого со скидкой:</td>
 <td width="50" align="right"><?php echo '<span class="currency">'.currency_symbol().'</span>'.price_format_currency($discounted_subtotal); ?></td>
</tr>
<?php } ?>

<tr>
 <td align="right">Доставка:</td>
 <td align="right"><?php echo '<span class="currency">'.currency_symbol().'</span>'.price_format_currency($order['shipping']); ?></td>
</tr>
<?php if ($order['tax_details']['tax_name']) {?>
<tr>
 <td align="right">Налог(<?php echo $order['tax_details']['tax_name'];?>):</td>
 <td align="right"><?php echo '<span class="currency">'.currency_symbol().'</span>'.price_format_currency($order['tax']); ?></td>
</tr>
<?php } ?>
<?php if ($order['gc_discount'] > 0) {?>
<tr>
 <td align="right">Подарочная Карта:</td>
 <td align="right"><?php echo '<span class="currency">'.currency_symbol().'</span>'.price_format_currency($order['gc_discount']); ?></td>
</tr>
<?php } ?>
<tr class="totals">
 <td align="right">Итого:</td>
 <td align="right"><?php echo '<span class="currency">'.currency_symbol().'</span>'.price_format_currency($order['total']); ?></td>
</tr>
</table>
 </td>
</tr>
</table>
</div>

<?php if ($order['notes']) {?>
<br />
Комментарии:
<hr />
<?php echo $order['notes'];?>
<?php } ?>
<h2 style="padding: 20px 0; margin: 0; text-align: center;">Спасибо за ваш заказ</h2>
</div>
