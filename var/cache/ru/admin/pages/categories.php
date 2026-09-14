<?php 
if ($category_location)
	echo $category_location.'<hr />';
if ($category) {
	if ($category['enabled'] != 1)
		echo "<font color='#c60'>Категория отключена</font><br /><br />";

	echo '<a href="'.$current_location.'/admin/category/'.$category['categoryid'].'" class="ec_ajax_link">'."Изменить категорию".'</a> | ';
	echo '<a href="'.$current_location.'/admin/category/'.$category['categoryid'].'/products" class="ec_ajax_link">'."Товары категории".'</a> | ';
	echo '<a href="javascript: void(0);" onclick="javascript: confirm(\'\', $ec(\'#delete_category\'), \'/admin/category/'.escape($category['categoryid'], 3).'/delete\'); return false;">'."Удалить категорию".'</a><br /><br />';
?>
<h3>Список подкатегорий</h3><br />
<?php 
}
?>
<form action="<?php echo $current_location;?>/admin/categories/<?php  echo $category['categoryid']; ?>" method="post" name="categories_form">
<input type="hidden" name="mode" value="" />

<table cellpadding="2" cellspacing="1" class="categories lines-table">

<tr>
  <th>Включено</th>
  <th>Позиция</th>
  <th colspan="2">Название категории</th>
  <th align="center">Товары</th>
  <th align="center">Подкатегории</th>
</tr>

<?php 

if (empty($categories)) {
?>
<tr>
 <td colspan="6" align="center" class="submit-row"><br />Нет категорий<br /><br /></td>
</tr>
<?php 
} else  {
	foreach ($categories as $v) {
		echo '<tr>
  <td width="1%"><input type="checkbox" size="3" name="posted_data['.$v['categoryid'].'][enabled]" maxlength="3" value="1"'.($v['enabled'] ? ' checked="checked"' : '').'" /></td>
  <td width="1%"><input type="text" size="3" name="posted_data['.$v['categoryid'].'][orderby]" maxlength="3" value="'.$v['orderby'].'" /></td>
  <td width="1%"><input type="radio" name="cat" value="'.$v['categoryid'].'" /></td>
  <td><a href="'.$current_location.'/admin/categories/'.$v['categoryid'].'">'.$v['title'].'</a> (<a href="'.$current_location.'/admin/category/'.$v['categoryid'].'">'."Редактировать".'</a>)</td>
  <td align="center"><a href="'.$current_location.'/admin/category/'.$v['categoryid'].'/products">'.$v['products'].'</a> ('.$v['products_global'].')</td>
  <td align="center"><a href="'.$current_location.'/admin/categories/'.$v['categoryid'].'">'.$v['subcategories'].'</a></td>
		</tr>';
	}
?>
</table>
<br />
<button type="button" onclick="javascript: submitForm(this, '');">Обновить</button>
<br /><br />
<button type="button" onclick="javascript: self.location='/admin/category/'+document.categories_form.cat.value;">Изменить выбранную категорию</button>
<button type="button" onclick="javascript: submitForm(this, 'delete');">Удалить выбранные</button>
<?php 
}
?>
<button type="button" onclick="self.location='<?php echo $current_location;?>/admin/category?parentid=<?php  echo $category['categoryid']; ?>'">Добавить новую категорию</button>
</form>

<br /><br />

<a name="featured"></a>

<h3>Рекомендуемые товары</h3>

<a href="javascript: void(0);" onclick="javascript: check_all(document.fpform, 'to_delete', true);">Отметить все</a> / <a href="javascript: void(0);" onclick="javascript: check_all(document.fpform, 'to_delete', false);">Отменить выбор для всех</a>
<form action="<?php echo $current_location;?>/admin/categories/<?php  echo $category['categoryid'];?>" method="post" name="fpform">
<input type="hidden" name="mode" value="update" />
<input type="hidden" name="action" value="featured_products" />

<table cellpadding="3" cellspacing="1" width="100%" class="lines-table">

<tr>
  <th width="10">&nbsp;</th>
  <th width="70%">Название товара</th>
  <th width="15%" align="center">Позиция</th>
  <th width="15%" align="center">Активна</th>
</tr>

<?php 
if ($featured_products) {
	foreach ($featured_products as $v) {
?>

<tr>
  <td><input type="checkbox" name="to_delete[<?php  echo $v['productid']; ?>]" /></td>
  <td><b><a href="<?php echo $current_location;?>/admin/products/<?php  echo $v['productid']; ?>" target="_blank"><?php  echo $v['name']; ?></a></b></td>
  <td align="center"><input type="text" name="posted_data[<?php  echo $v['productid']; ?>][orderby]" size="5" value="<?php  echo $v['orderby']; ?>" /></td>
  <td align="center"><input type="checkbox" name="posted_data[<?php  echo $v['productid']; ?>][enabled]"<?php  if ($v['enabled']) echo ' checked="checked"'; ?> /></td>
</tr>
<?php 
	}
?>
<tr>
  <td colspan="4">
  <button type="button" onclick="javascript: document.fpform.mode.value = 'delete'; document.fpform.submit();">Удалить выбранные</button>
  <button type="submit">Обновить</button>
  </td>
</tr>

<?php 
} else  {
?>

<tr>
	<td colspan="4" align="center">В этой категории нет рекомендуемых товаров</td>
</tr>

<?php 
}
?>

<tr>
<td colspan="4"><br /><h3>Добавить товар</td>
</tr>

<tr>
  <td>&nbsp;</td>
  <td>
    <input type="hidden" name="newproductid" />
    <input type="text" size="35" name="newproduct" disabled="disabled" />
<script>
var popup_product_pid = document.fpform.newproductid,
	popup_product_pname = document.fpform.newproduct;
</script>
    <button type="button" onclick="javascript: popup_product();">Загрузить...</button>
  </td>
  <td align="center"><input type="text" name="neworderby" size="5" /></td>
  <td align="center"><input type="checkbox" name="newenabled" checked="checked" /></td>
</tr>

<tr>
  <td colspan="4" class="SubmitBox">
  <button type="button" onclick="javascript: document.fpform.mode.value = 'add'; document.fpform.submit();">Добавить новое</button>
  </td>
</tr>

</table>
</form>