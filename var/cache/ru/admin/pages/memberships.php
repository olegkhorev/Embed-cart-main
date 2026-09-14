<form method="post">
<input type="hidden" name="mode" value="update" />

<table cellpadding="3" cellspacing="1" width="600">

<tr class="TableHead">
	<td width="10">&nbsp;</td>
	<td width="50%">Подписка</td>
	<td width="15%" align="center">Активна</td>
	<td width="15%" align="center">Позиция</td>
	<td width="20%" nowrap="nowrap" align="center">Назначенные пользователи</td>
</tr>

<?php 
if ($memberships) {
	foreach ($memberships as $v) {
?>
<tr>
	<td><input type="checkbox" name="to_delete[]" value="<?php  echo $v['membershipid']; ?>" /></td>
	<td><input type="text" size="30" name="posted_data[<?php  echo $v['membershipid']; ?>][membership]" value="<?php  echo escape($v['membership']); ?>" /></td>
	<td align="center"><input type="checkbox" name="posted_data[<?php  echo $v['membershipid']; ?>][active]" value="Y"<?php  echo $v['active'] == 'Y' ? ' checked="checked"' : ''; ?> /></td>
	<td align="center"><input type="text" size="5" name="posted_data[<?php  echo $v['membershipid']; ?>][orderby]" value="<?php  echo $v['orderby']; ?>" /></td>
	<td align="center"><?php  echo $v['users'] ? $v['users'] : '0'; ?></td>
</tr>
<?php 
	}
?>
<tr>
	<td colspan="5">
	<button>Обновить</button>
	<button type="button" onclick="submitForm(this, 'delete')">Удалить выбранные</button>
	</td>
</tr>
<?php 
} else  {
?>

<tr>
	<td colspan="5" align="center"><br />Членство не найдено</td>
</tr>

<?php 
}
?>

<tr>
	<td colspan="5"><br /><h3>Добавить новое</h3></td>
</tr>

<tr>
	<td>&nbsp;</td>
	<td><input type="text" size="30" name="add[membership]" /></td>
	<td align="center"><input type="checkbox" name="add[active]" value="Y" checked="checked" /></td>
	<td align="center"><input type="text" size="5" name="add[orderby]" value="" /></td>
	<td><button type="button" onclick="javascript: submitForm(this, 'add');">Добавить</button></td>
</tr>

</table>

</form>