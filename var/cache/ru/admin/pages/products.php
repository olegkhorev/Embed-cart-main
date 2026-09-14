<?php 
if (!isset($_GET['direction']) || $_GET['direction'])
	$direction = "&direction=0";
else 
	$direction = "&direction=1";
?>
<h3>Товары</h3>
<form method="POST" name="psform" href="<?php echo $current_location;?>/admin/products">
<input type="hidden" name="mode" value="search" />
<table class="search_table">
<tr>
 <td class="data-name">Поиск по подстроке:</td>
 <td><input type="text" name="substring" value="<?php  echo escape($search_products['substring'], 2); ?>" size="40" />
&nbsp;
<button>Поиск</button>
 </td>
</tr>
<tr>
 <td colspan="2"><a href="javascript: void(0);" onclick="$ec(this).hide(); $ec('#advanced_search').show();">Расширенный поиск</a></td>
</tr>
</table>

<table id="advanced_search" class="search_table">
<tr>
 <td class="data-name top">Поиск в категории:</td>
 <td><?php  echo $categories_tree; ?><br />
как <label><input type="checkbox" name="main_category" value="1"<?php  if (!$search_products || $search_products['main_category']) echo 'checked="checked"'; ?> /> Основная категория</label>
&nbsp; <label><input type="checkbox" name="additional_category" value="1"<?php  if ($search_products['additional_category']) echo ' checked="checked"'; ?> /> Дополнительная категория</label><br />
<label><input type="checkbox" name="in_subcategories" value="1"<?php  if ($search_products['in_subcategories']) echo ' checked="checked"'; ?> /> также искать в подкатегориях</label><br />
 </td>
</tr>
<?php 
if ($brands) {
?>
<tr>
 <td class="data-name">Поиск по бренду:</td>
 <td><select name="brandid">
 <option value=""></option>
<?php 
	foreach ($brands as $b) {
		echo '<option value="'.$b['brandid'].'"'.($search_products['brandid'] == $b['brandid'] ?  ' selected="selected"' : '').'>'.$b['name'].'</option>';
	}
?>

 </select></td>
</tr>
<?php 
}
?>
<tr>
 <td class="data-name">Артикул:</td>
 <td><input type="text" name="sku" value="<?php  echo escape($search_products['sku'], 2); ?>" /></td>
</tr>
<tr>
 <td class="data-name">Идентификатор товара:</td>
 <td><input type="text" name="productid" value="<?php  echo escape($search_products['productid'], 2); ?>" /></td>
</tr>
<tr>
 <td class="data-name">Цена:</td>
 <td><input type="text" size="8" name="price_min" value="<?php  echo escape($search_products['price_min'], 2); ?>" /> - <input type="text" size="8" name="price_max" value="<?php  echo escape($search_products['price_max'], 2); ?>" /></td>
</tr>
<tr>
 <td class="data-name">Цена по прейскуранту:</td>
 <td><input type="text" size="8" name="list_price_min" value="<?php  echo escape($search_products['list_price_min'], 2); ?>" /> - <input type="text" size="8" name="list_price_max" value="<?php  echo escape($search_products['list_price_max'], 2); ?>" /></td>
</tr>
<tr>
 <td class="data-name">Количество:</td>
 <td><input type="text" size="8" name="avail_min" value="<?php  echo escape($search_products['avail_min'], 2); ?>" /> - <input type="text" size="8" name="avail_max" value="<?php  echo escape($search_products['avail_max'], 2); ?>" /></td>
</tr>
<tr>
 <td class="data-name">Вес (кг):</td>
 <td><input type="text" size="8" name="weight_min" value="<?php  echo escape($search_products['weight_min'], 2); ?>" /> - <input type="text" size="8" name="weight_max" value="<?php  echo escape($search_products['weight_max'], 2); ?>" /></td>
</tr>
<tr>
 <td class="data-name">Доступность:</td>
 <td><select name="status">
 <option value=""></option>
 <option value="1"<?php  if ($search_products['status'] == 1) echo ' selected="selected"'; ?>>Доступно для продажи</option>
 <option value="2"<?php  if ($search_products['status'] == 2) echo ' selected="selected"'; ?>>Нет в наличии</option>
 <option value="3"<?php  if ($search_products['status'] == 3) echo ' selected="selected"'; ?>>Скрыт, но доступен для продажи</option>
 </select></td>
</tr>
<tr>
 <td></td>
 <td><br /><button>Поиск</button></td>
</tr>
</table>
<br /><br />
<?php 
if (empty($products)) {
?>
Товары не найдены
<?php 
} else  {
?>

<?php 
if ($total_pages > 2) {
?>
<?php include SITE_ROOT."/var/cache/ru/common/navigation_admin.php";?>
<br />
<?php 
}
?>
<br /><a href="javascript: void(0);" onclick="javascript: check_all(document.psform, 'to_delete', true);">Отметить все</a> / <a href="javascript: void(0);" onclick="javascript: check_all(document.psform, 'to_delete', false);">Отменить выбор для всех</a>

<table width="100%" class="lines-table">
<tr>
 <th width="10"></th>
 <th><a href="<?php echo $current_location;?>/admin/products?sort=sku<?php  echo $direction; ?>">Артикул</a></th>
 <th width="100%"><a href="<?php echo $current_location;?>/admin/products?sort=name&direction=<?php if ($_GET['direction']) {?>0<?php } else  { ?>1<?php } ?>">Название товара</a></th>
 <th><a href="<?php echo $current_location;?>/admin/products?sort=price<?php  echo $direction; ?>">Цена</a></th>
 <th><a href="<?php echo $current_location;?>/admin/products?sort=avail<?php  echo $direction; ?>">В наличии</a></th>
 <th>Статус</th>
</tr>
<?php 
	foreach ($products as $v) {		echo '
<tr>
 <td><input type="checkbox" pid="'.$v['productid'].'" name="to_delete['.$v['productid'].']" value="1" /></td>
 <td nowarp>'.$v['sku'].'</td>
 <td><a href="'.$current_location.'/admin/products/'.$v['productid'].'">'.$v['name'].'</a></td>
 <td><input type="text" size="10" name="posted_data['.$v['productid'].'][price]" value="'.$v['price'].'"></td>
 <td><input type="text" size="10" name="posted_data['.$v['productid'].'][avail]" value="'.$v['avail'].'"></td>
 <td>
<select name="posted_data['.$v['productid'].'][status]">
 <option value="1">Доступно для продажи</option>
 <option value="2"'.($v['status'] == 2 ? ' selected' : '').'>Нет в наличии</option>
 <option value="3"'.($v['status'] == 3 ? ' selected' : '').'>Скрыт, но доступен для продажи</option>
</select>
 </td>
</tr>
		';	}
?>
</table>
<br />

<div class="fixed_save_button">
<button type="button" onclick="submitForm(this, 'update');">Сохранить</button>
&nbsp; <button type="button" onclick="export_selected();">Экспортировать выбранное</button>
&nbsp;
<button type="button" onclick="if (confirm('Are you sure?', $ec(this)) || confirmed) submitForm(this, 'delete_products');">Удалить выбранные</button>
</div>

<?php 
}
?>
</form>

<script>
function export_selected() {
	var selected = '';
	$ec('.lines-table input').each(function() {
		if ($ec(this).is(':checked'))
			selected += $ec(this).attr('pid')+',';
	});

	if (selected)
		self.location='/admin/export?product='+selected;
	else 
		ec_alert('You not selected any products');
}
</script>