<script src="<?php echo $current_location;?>/ckeditor/ckeditor.js"></script>

<?php  if ($get['2'] == 'add') { ?>
<h3>Добавить товар</h3>
<?php  } ?>

<form method="POST" enctype='multipart/form-data' name="pform"<?php /* ?>if $get['2'] == 'add'} class="noajax"{/if<?php */ ?>>
<input type="hidden" name="mode" value="" />
<table width="800" class="normal-table">
<tr>
 <td>Артикул</td>
 <td><input type="text" size="10" name="sku" value="<?php  echo escape($product['sku']);?>" /></td>
</tr>
<tr>
 <td>Имя</td>
 <td><input type="text" size="80" name="name" value="<?php  echo escape($product['name']);?>" onchange="javascript: if (this.form.cleanurl.value == '') copy_clean_url(this, this.form.cleanurl);" /></td>
</tr>
<tr>
 <td>Чистый URL</td>
 <td><input type="text" size="80" name="cleanurl" value="<?php  echo escape($product['cleanurl']);?>" /></td>
</tr>
<?php if (!$warehouse_enabled) {?>
<tr>
 <td>В наличии</td>
 <td><input type="text" size="10" name="avail" value="<?php  echo $product['name'] ? $product['avail'] : '1000'; ?>" />
 </td>
</tr>
<?php } ?>
<tr>
 <td>Цена (<?php echo $config['General']['currency_symbol'];?>)</td>
 <td><input type="text" size="10" name="price" value="<?php  echo $product['price'] ? $product['price'] : '0.00'; ?>" /></td>
</tr>
<tr>
 <td>Цена по прейскуранту (<?php echo $config['General']['currency_symbol'];?>)</td>
 <td><input type="text" size="10" name="list_price" value="<?php  echo $product['list_price'] ? $product['list_price'] : '0.00'; ?>" /></td>
</tr>
<tr>
 <td>Вес (<?php echo $config['General']['weight_symbol'];?>)</td>
 <td><input type="text" size="10" name="weight" value="<?php  echo $product['weight'] ? $product['weight'] : '0.00'; ?>" /></td>
</tr>
<tr>
 <td>Длина (см)</td>
 <td><input type="text" size="10" name="dim_x" value="<?php  echo $product['dim_x'] ? $product['dim_x'] : '0.00'; ?>" /></td>
</tr>
<tr>
 <td>Ширина (см)</td>
 <td><input type="text" size="10" name="dim_y" value="<?php  echo $product['dim_y'] ? $product['dim_y'] : '0.00'; ?>" /></td>
</tr>
<tr>
 <td>Высота (см)</td>
 <td><input type="text" size="10" name="dim_z" value="<?php  echo $product['dim_z'] ? $product['dim_z'] : '0.00'; ?>" /></td>
</tr>
<tr>
 <td>Категория</td>
 <td>
<?php  echo $categories_tree; ?>
 </td>
</tr>
<tr>
 <td>Дополнительные категории</td>
 <td>
<?php  echo $categories_tree_m; ?>
 </td>
</tr>
<tr>
 <td class="data-name">Бренд:</td>
 <td><select name="brandid">
 <option value=""></option>
<?php 
if ($brands) {
	foreach ($brands as $b) {
		echo '<option value="'.$b['brandid'].'"'.($product['brandid'] == $b['brandid'] ?  ' selected="selected"' : '').'>'.$b['name'].'</option>';
	}
}
?>
 </select></td>
</tr>
<tr>
 <td>Статус</td>
 <td>
<select name="status">
<option value="1">Доступно</option>
<option value="2"<?php  if ($product['status'] == 2) echo ' selected';?>>Нет в наличии</option>
<option value="3"<?php  if ($product['status'] == 3) echo ' selected';?>>Скрыт, но доступен для продажи</option>
</select>
 </td>
</tr>
<tr>
 <td>Ключевые слова</td>
 <td><input type="text" size="80" name="keywords" value="<?php  echo escape($product['keywords']);?>" /></td>
</tr>
<tr>
 <td colspan="2"><br />Описание<br />
	<script>
		var editor;
		// The instanceReady event is fired, when an instance of CKEditor has finished
		// its initialization.
		CKEDITOR.on( 'instanceReady', function( ev ) {
			editor = ev.editor;
		    $ec('*').removeAttr("title");
		});
	</script>
	<textarea class="ckeditor" id="ck_editor" name="descr" cols="100" rows="10"><?php  echo $product['descr'];?></textarea><br />
 </td>
</tr>
<tr>
 <td>Мета-тег title</td>
 <td><input type="text" size="80" name="title_tag" value="<?php  echo escape($product['title_tag']);?>" /></td>
</tr>
<tr>
 <td>Мета-тег keywords</td>
 <td><input type="text" size="80" name="meta_keywords" value="<?php  echo escape($product['meta_keywords']);?>" /></td>
</tr>
<tr>
 <td>Мета-описание</td>
 <td><input type="text" size="80" name="meta_description" value="<?php  echo escape($product['meta_description']);?>" /></td>
</tr>
<tr>
 <td colspan="2"><br>

<div class="fixed_save_button">
<button>Сохранить</button>
<?php if ($product) {?>
&nbsp; <button type="button" onclick="self.location='/admin/export?product=<?php echo $product['productid'];?>';">Экспорт</button>
&nbsp; <button type="button" onclick="if (confirm('Are you sure?', $ec(this)) || confirmed) { document.pform.mode.value='clone'; document.pform.submit(); }">Клонировать продукт</button>
&nbsp; <button type="button" onclick="window.open('<?php echo $parnet_site_page;?>#!<?php if ($product['cleanurl']) {?><?php echo $product['cleanurl'];?><?php } else  { ?>product/<?php echo $product['productid'];?><?php } ?>', '');">Посмотреть продукт</button>
&nbsp; &nbsp; &nbsp; &nbsp;
&nbsp; &nbsp; &nbsp; &nbsp;
&nbsp; &nbsp; &nbsp; &nbsp;
<button type="button" onclick="if (confirm('Are you sure?', $ec(this)) || confirmed) { document.pform.mode.value='delete'; document.pform.submit(); }">Удалить</button>
<?php } ?>
</div>
 </td>
</tr>
</table>
</form>