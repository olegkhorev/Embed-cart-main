<form method="POST" name="vform">
<input type="hidden" name="section" value="variants">
<input type="hidden" name="mode" value="update">

Фильтр вариантов:
<?php 
foreach ($option_groups as $g) {?>
 <select name="variants_filter[<?php  echo $g['groupid']; ?>]">
 <option value=""><?php  echo $g['name']; ?></option>
<?php 
	if ($g['options']) {
		foreach ($g['options'] as $o) {
?>
 <option value="<?php  echo $o['optionid']; ?>"<?php  echo $o['selected'] == 'Y' ? ' selected="selected"' : ''; ?>><?php  echo $o['name']; ?></option>
<?php 
		}
	}
?>
 </select>
&nbsp;
<?php 
}
?>
<button type="button" onclick="javascript: submitForm(this, 'filter');">Submit</button>
<button type="button" onclick="javascript: submitForm(this, 'reset_filter');">Reset</button>
<br />
<?php 
if ($variants) {
?>
<br />
<a href="javascript: void(0);" onclick="javascript: check_all(document.vform, 'to_delete', true);">Отметить все</a> / <a href="javascript: void(0);" onclick="javascript: check_all(document.vform, 'to_delete', false);">Отменить выбор для всех</a>
  <table cellspacing="0">
    <tr>
      <th></th>
      <th>Опции</th>
      <th>Название товара</th>
      <th>Артикул</th>
<?php /* ?>
      <th><label>Код поставщика<input type="checkbox" name="show_supplier_code" value="1"{if:product.getShowSupplierCode()} checked{end:} /></label></th>
<?php */ ?>
      <th>Цена</th>
      <th>Вес</th>
<?php if ($warehouse_enabled) {?>
      <th>Склады</th>
<?php } else  { ?>
      <th>В наличии</th>
<?php } ?>
<?php /* ?>
      <th><label>Количество в коробке<input type="checkbox" name="show_qty_per_box" value="1"{if:product.getShowQtyPerBox()} checked{end:} /></label></th>
      <th><label>Поставляется как<input type="checkbox" name="show_supplied_as" value="1"{if:product.getShowSuppliedAs()} checked{end:} /></label></th>
<?php */ ?>
      <th>Оптовая продажа</th>
      <th>По умолчанию</th>
    </tr>
<?php 
foreach ($variants as $v) {
?>
    <tr>
      <td align="center"><input type="checkbox" name="to_delete[<?php  echo $v['variantid']; ?>]" value="1" /></td>
	  <td>
<table>
<tr>
<?php 
foreach ($v['options'] as $vo) {
	foreach ($option_groups as $g) {		if ($g['groupid'] == $vo['groupid'] && $g['options']) {
?>
 <td><?php  echo $g['name']; ?>:</td>
 <td>
<?php 
			foreach ($g['options'] as $o) {				if ($vo['optionid'] == $o['optionid']) {
					echo $o['name'];
				}
			}
?>
 </td>
<?php 
		}
	}
}
?>
</tr>
</table>
	  </td>
      <td><input type="input" size="40" name="posted_data[<?php  echo $v['variantid']; ?>][title]" value="<?php  echo $v['title']; ?>" /></td>
      <td><input type="input" name="posted_data[<?php  echo $v['variantid']; ?>][sku]" value="<?php  echo $v['sku']; ?>" /></td>
<?php /* ?>
      <td><input type="input" name="posted_data[<?php  echo $v['variantid']; ?>][supplier_code]" value="<?php  echo $v['supplier_code']; ?>" /></td>
<?php */ ?>
      <td><input type="input" size="10" name="posted_data[<?php  echo $v['variantid']; ?>][price]" value="<?php  echo $v['price']; ?>" /></td>
      <td><input type="input" size="10" name="posted_data[<?php  echo $v['variantid']; ?>][weight]" value="<?php  echo $v['weight']; ?>" /></td>
<?php if ($warehouse_enabled) {?>
      <td>
      <span class="define-var-wh" data-variantid="<?php echo $v['variantid'];?>">Define</span></td>
<?php } else  { ?>
      <td><input type="input" size="5" name="posted_data[<?php  echo $v['variantid']; ?>][avail]" value="<?php  echo $v['avail']; ?>" /></td>
<?php } ?>
<?php /* ?>
      <td><input type="input" size="5" name="posted_data[<?php  echo $v['variantid']; ?>][qty_per_box]" value="<?php  echo $v['quantity_per_box']; ?>" /></td>
      <td><input type="input" size="10" name="posted_data[<?php  echo $v['variantid']; ?>][supplied_as]" value="<?php  echo $v['supplied_as']; ?>" /></td>
<?php */ ?>
      <td onclick="javascript: wholetoggle(<?php  echo $v['variantid']; ?>, $ec(this).find('a'));" class="wplink"><a href="javascript: void(0);">[+]</a> (<?php  echo count($v['wholesale']); ?>)</td>
      <td align="center"><input type="radio" name="posted_data[<?php  echo $v['variantid']; ?>][def]" value="1" <?php  echo $v['def'] ? ' checked="checked"' : ''; ?> /></td>
    </tr>

	<tr id="wholesale-<?php  echo $v['variantid']; ?>" class="hidden">
		<td colspan="5"></td>
		<td colspan="5">
<table  width="100%"cellspacing="0" cellpadding="3" id="wp_table">
<tr>
	<th>Количество</th>
	<th>Цена</th>
	<th>Подписка</th>
	<th width="100%"></th>
</tr>
<?php 
if ($v['wholesale']) {	foreach ($v['wholesale'] as $w) {
?>
<tr id="wp_tr-<?php  echo $w['priceid']; ?>">
	<td id="wp_box_1"><input type="text" size="5" name="wprices[<?php  echo $v['variantid']; ?>][<?php  echo $w['priceid']; ?>][quantity]" value="<?php  echo $w['quantity']; ?>" /></td>
	<td id="wp_box_2"><input type="text" size="7" name="wprices[<?php  echo $v['variantid']; ?>][<?php  echo $w['priceid']; ?>][price]" value="<?php  echo $w['price']; ?>" /></td>
	<td id="wp_box_3">
<select name="wprices[<?php  echo $v['variantid']; ?>][<?php  echo $w['priceid']; ?>][membershipid]">
<option value="0">Все</option>
<?php 
if ($memberships)
	foreach ($memberships as $m) {		echo '<option value="'.$m['membershipid'].'"'.($m['membershipid'] == $w['membershipid'] ? ' selected="selected"' : '').'>'.$m['membership'].'</option>';	}
?>
</select>
 	</td>
	<td><div class="removed"><input type="hidden" name="wprices[<?php  echo $v['variantid']; ?>][<?php  echo $w['priceid']; ?>][removed]" value="" /><a href="javascript: void(0);" onclick="javascript: remove_wp(<?php  echo $w['priceid']; ?>);">-</a> <a href="javascript: void(0);" class="wprem" onclick="javascript: restore_wp(<?php  echo $w['priceid']; ?>);">Восстановить</a></div></td>
</tr>
<?php 
	}
}
?>
<tr id="wp_tr_<?php  echo $v['variantid']; ?>">
	<td id="wp_box_1"><input type="text" size="5" name="new_wprice[<?php  echo $v['variantid']; ?>][0][quantity]" value="1" /></td>
	<td id="wp_box_2"><input type="text" size="7" name="new_wprice[<?php  echo $v['variantid']; ?>][0][price]" value="0.00" /></td>
	<td id="wp_box_3">
<select name="new_wprice[<?php  echo $v['variantid']; ?>][0][membershipid]">
<option value="0">Все</option>
<?php 
if ($memberships)
	foreach ($memberships as $m) {
		echo '<option value="'.$m['membershipid'].'">'.$m['membership'].'</option>';
	}
?>
</select>
 	</td>
	<td><a href="javascript: void(0);" onclick="duplicate_row($ec('#wp_tr_<?php  echo $v['variantid']; ?>'), $ec(this));" class="duplicate_plus">+</a></td>
</tr>
</table>
		</td>
	</tr>
<?php 
}
?>

  </table>

<br />
    <button>Обновить</button>
    <button type="button" onclick="submitForm(this, 'delete');">Удалить выбранные</button>
<br /><br />
<?php 
}
?>

<h3>Новый вариант</h3>
<table class="new_variant">
<?php 
foreach ($option_groups as $v) {?>
<tr>
 <td width="150" valign="top"><?php  echo $v['name'];?></td>
 <td valign="top">
 <select name="new_variants[<?php  echo $v['groupid']; ?>][]" multiple size="10" id="po-<?php  echo $v['groupid']; ?>">
<?php 
if ($v['options']) {	foreach ($v['options'] as $o) {
?>
 <option value="<?php  echo $o['optionid']; ?>"><?php  echo $o['name']; ?></option>
<?php 
	}
}
?>
 </select>
 </td>
</tr>
<?php 
}
?>
<tr>
 <td colspan="2">
<button type="button" onclick="javascript: submitForm(this, 'add');">Добавить</button> <button type="button" onclick="javascript: all_possible();">Создать все возможные варианты</button>
 </td>
</tr>
</table>


</form>

<?php if ($warehouse_enabled) {?>
<?php foreach ($variants as $v) {?>
<div class="warehouses" id="warehouses-<?php echo $v['variantid'];?>">
<form method="POST">
<input type="hidden" name="variantid" value="<?php echo $v['variantid'];?>" />
<div class="wh-list">
<table width="100%">
<tr>
 <th>Склад</th>
 <th>В наличии</th>
</tr>
<?php foreach ($v['warehouses'] as $w) {?>
<tr>
 <td width="100%"><?php echo $w['wcode'];?></td>
 <td nowrap><input type="text" size="3" name="variant_wh[<?php echo $v['variantid'];?>][<?php echo $w['wid'];?>]" value="<?php echo $w['avail'];?>" /></td>
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