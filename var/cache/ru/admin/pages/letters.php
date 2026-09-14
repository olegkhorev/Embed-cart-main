<a href="<?php  echo $current_location; ?>/admin/subscribtions/<?php  echo $get['2']; ?>/new">Добавить новое</a>
<br /><br />
Общее количество подписчиков: <?php  echo $subscribers ? $subscribers : '0';?> <a href="<?php echo $current_location;?>/admin/subscribtions/<?php  echo $get['2']; ?>/export">Экспорт</a>
<br /><br />
<form method="post" name="newsform">
<input type="hidden" name="mode" value="delete" />

<?php 
if ($total_pages > 2) {
?>
<?php include SITE_ROOT."/var/cache/ru/common/navigation_admin.php";?>
<?php 
	echo '<br />';
}
?>

<a href="javascript: void(0);" onclick="javascript: check_all(document.newsform, 'to_delete', true);">Отметить все</a> / <a href="javascript: void(0);" onclick="javascript: check_all(document.newsform, 'to_delete', false);">Отменить выбор для всех</a>

<table cellpadding="3" cellspacing="1" width="600" class="lines-table">
<tr>
	<th width="10">&nbsp;</th>
	<th width="70%">Тема</th>
	<th width="30%">Дата</th>
</tr>

<?php 
foreach ($letters as $l) {
	echo '<tr>
	<td><input type="checkbox" name="to_delete['.$l['id'].']" value="Y" /></td>
	<td><a href="'.$current_location.'/admin/subscribtions/'.$get['2'].'/'.$l['id'].'">'.$l['subject'].'</a></td>
	<td align="center">'.date($datetime_format, $l['date'])."</td>
</tr>";
}
?>

</table>
<div class="fixed_save_button">
<button type="button" onclick="javascript: if (confirmed || confirm('Эта команда удалит выбранные письма.', $ec(this))) submitForm(this, 'delete');">Удалить выбранные</button>
</div>
</form>