<?php  echo $category_location; ?>

<br /><br />

<a href="<?php echo $current_location;?>/admin/category/<?php  echo $category['categoryid']; ?>">Изменить категорию</a>

<br /><br />

<form action="<?php echo $current_location;?>/admin/category/<?php  echo $category['categoryid']; ?>" method="post">
<input type="hidden" name="mode" value="category_products" />

<?php 
if (!isset($_GET['direction']) || $_GET['direction'])
	$direction = "&direction=0";
else 
	$direction = "&direction=1";
?>

<h3>Товары категории</h3>
<?php 
if ($products) {
?>

<table width="100%">
<tr>
 <th>Артикул</th>
 <th>Название товара</th>
 <th>Позиция</th>
</tr>
<?php 
	foreach ($products as $v) {
		echo '
<tr>
 <td nowrap><a href="'.$current_location.'/admin/products/'.$v['productid'].'">'.$v['sku'].'</a></td>
 <td><a href="'.$current_location.'/admin/products/'.$v['productid'].'">'.$v['name'].'</a></td>
 <td><input type="text" size="10" name="posted_data['.$v['productid'].'][orderby]" value="'.$v['orderby'].'"></td>
</tr>
		';
	}
?>
</table>
<br />
<button>Сохранить</button>
</form>
<?php 
} else  {?>
<center>Нет товаров в этой категории</center>
<?php }
?>
