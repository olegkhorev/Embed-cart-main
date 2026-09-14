<?php if ($v['gift_card']) {?>
<b>Подарочная Карта</b><br />
Вы увидите фразу-пароль для подарочной карты в оплаченной счет-фактуре
<?php } else  { ?>
	  <a href="<?php echo $url;?>"><?php echo $v['name'];?></a>
<?php } ?>
<?php if ($v['weight']) {?>
<br /><small>Вес: <?php echo price_format($v['weight']).' <span class="weight-symbol">грамм</span>'; ?></small>
<?php } ?>
<?php if ($v['product_options']) {?>
<hr />
<b>Выбранные параметры:</b><br />
<table width="100%">
<?php foreach ($v['product_options'] as $o) {?>
<tr>
	<td width="100" valign="top"><?php echo $o['name'];?>:</td>
	<td><?php echo $o['option']['name'];?></td>
</tr>
<?php } ?>
</table>
<?php } ?>