<form method="post" name="currenciesform">
<input type="hidden" name="mode" value="update" />
<?php if ($currencies) {?>
<a href="javascript: void(0);" onclick="javascript: check_all(document.currenciesform, 'to_delete', true);">Отметить все</a> / <a href="javascript: void(0);" onclick="javascript: check_all(document.currenciesform, 'to_delete', false);">Отменить выбор для всех</a>
<?php } ?>
<table cellpadding="3" cellspacing="1" width="600">
<tr>
	<th width="10">&nbsp;</th>
	<th width="15%">Код валюты</th>
	<th width="10%">Курс</th>
	<th width="15%">Символ</th>
	<th width="20%">Активна</th>
	<th width="20%">Позиция</th>
	<th width="20%">Главная</th>
</tr>
<?php if ($currencies) {?>
<?php 
foreach ($currencies as $b) {
	echo '<tr>
	<td><input type="checkbox" name="to_delete['.$b['id'].']" value="Y" /></td>
	<td align="center"><input type="text" size="20" name="to_update['.$b['id'].'][code]" value="'.$b['code'].'" /></td>
	<td align="center"><input type="text" size="20" name="to_update['.$b['id'].'][rate]" value="'.$b['rate'].'" /></td>
	<td align="center"><input type="text" size="20" name="to_update['.$b['id'].'][symbol]" value="'.$b['symbol'].'" /></td>
	<td align="center"><input type="checkbox" name="to_update['.$b['id'].'][active]" value="1"'.($b['active'] ? ' checked="checked"' : '').' /></td>
	<td align="center"><input type="text" size="5" name="to_update['.$b['id'].'][orderby]" value="'.$b['orderby'].'" /></td>
	<td align="center"><input type="radio" name="main_currency" value="'.$b['id'].'"'.($b['main'] ? ' checked="checked"' : '').' /></td>
</tr>';
}
?>

<tr>
	<td colspan="7">
<button type="button" onclick="javascript: submitForm(this, 'update');">Обновить</button> &nbsp;
<button type="button" onclick="javascript: submitForm(this, 'delete');">Удалить выбранные</button>
	</td>
</tr>
<?php } ?>

<tr>
	<td colspan="7"><h3>Добавить новое</h3></td>
</tr>
<tr>
	<td></td>
	<td align="center"><input type="text" size="20" name="new_currency[code]" value="" /></td>
	<td align="center"><input type="text" size="20" name="new_currency[rate]" value="" /></td>
	<td align="center"><input type="text" size="20" name="new_currency[symbol]" value="" /></td>
	<td align="center"><input type="checkbox" name="new_currency[active]" value="1" checked="checked" /></td>
	<td align="center"><input type="text" size="5" name="new_currency[orderby]" value="" /></td>
	<td></td>
</tr>

<tr>
	<td colspan="7"><button type="button" onclick="javascript: submitForm(this, 'add');">Добавить</button></td>
</tr>

</table>
</form>
