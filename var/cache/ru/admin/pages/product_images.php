<div class="drag">
<center><div class="pbar"><img src="<?php echo $current_location;?>/images/spacer.gif" /></div></center>
<form name="upload" method="POST" enctype='multipart/form-data' class="noajax">
<input type="hidden" name="albumid" value="<?php  echo $album['albumid']; ?>" />
<div class="upsec">
<div class="fileButton">
Перетащите сюда файлы для загрузки.<br /><br />Или нажмите, чтобы выбрать
<input type="file" name="file" multiple accept="image/*" />
</div>
</div>
</form>
</div>
<div class="product-images">
<?php 
if ($photos) {
	foreach ($photos as $v) {		echo '<div data-id="'.$v['photoid'].'"><img src="'.$current_location.'/images/close.gif" class="remove" alt="" />';		$image = $v;		$image['new_width'] = 100;
		$image['new_height'] = 100;
		$image['center'] = 1;
		$image['is_admin'] = 1;

		include 'includes/image.php';
		echo '</div>';
	}
}
?>


<?php /* ?>
<form method="POST" enctype='multipart/form-data'>
<input type="hidden" name="section" value="images">
<table width="800">
<?php 
if ($photos) {
?>
<tr>
 <td class="name">Фотографии</td>
 <td class="value">
<table>
<tr>
 <th>Удалить</th>
 <th>Фото</th>
 <th>Позиция</th>
</tr>
<?php 
foreach ($photos as $v) {
	echo '
<tr>
 <td><input type="checkbox" name="to_delete_photos['.$v['photoid'].']"></td>
 <td><a href="'.$current_location.'/photos/product/'.$product['productid'].'/'.$v['photoid'].'/'.$v['file'].'" target="_blank"><img src="/photos/product/'.$product['productid'].'/'.$v['photoid'].'/'.$v['file'].'" height="100"></a></td>
 <td><input size="5" type="text" name="update_photos['.$v['photoid'].']" value="'.$v['pos'].'"></td>
</tr>
	';
}
?>
</table>
 </td>
</tr>
<?php 
}
?>
<tr>
 <td class="name">Загрузить новое</td>
 <td>
<input type="file" name="file1"><br>
<input type="file" name="file2"><br>
<input type="file" name="file3"><br>
<input type="file" name="file4"><br>
<input type="file" name="file5">
 </td>
</tr>
<tr>
 <td colspan="2"><br><button>Сохранить</button></td>
</tr>
</table>
</form>
<?php */ ?>