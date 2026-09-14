<table width="1000">
<tr>
 <td width="50%">
<?php if ($order['packages_result']) {?>
<h1>Коробки</h1>
<?php foreach ($order['packages_result'] as $k=>$pack) {?>
Коробка №<?php echo $k+1; ?><br />
<?php foreach ($pack as $prod) {?>
<?php echo $prod['name'];?> - <?php echo $prod['qty'];?><br />
<?php } ?>
<hr />
<?php } ?>
<?php } ?>

<h1>Shipping info</h1>
<form method="POST">
<input type="text" name="tracking" placeholder="Идентификационный номер" value="<?php echo escape($order['tracking'], 2); ?>" />
<br >
<input type="text" name="tracking_url" placeholder="URL отслеживания" value="<?php echo escape($order['tracking_url'], 2); ?>" />
<br >
<button type="submit">Сохранить</button>
</form>
 </td>
 <td>
<h1>Order #<?php  echo $order['orderid']; ?> (	<select id="status">
<?php 
		foreach ($order_statuses as $k=>$v) {
			echo '<option value="'.$k.'"'.($k == $order['status'] ? ' selected' : '').'>'.$v.'</option>';
		}
?>
</select>
<button onclick="javascript: self.location='/admin/invoice/<?php  echo $order['orderid']; ?>/status/'+$ec('#status').val();">Сохранить</button>
)</h1>
<small>Измененный статус будет отправлен клиенту</small>
<br /><br />
<div>Дата заказа: <?php  echo date($datetime_format, $order['date']); ?></div>
<div class="ec_clear"></div>
<?php if ($order['transaction_id']) {?>
Transaction #: <?php echo $order['transaction_id'];?>
<br />
<?php if ($order['payment_indent']) {?>
Payment Intent: <?php echo $order['payment_indent'];?>
<br />
<?php } ?>
<br />
<?php } ?>
 </td>
</tr>
</table>
<br /><br />
<?php include SITE_ROOT."/var/cache/ru/invoice/body.php";?>