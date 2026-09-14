<form method="POST" name="poform">
<input type="hidden" name="section" value="options">
<input type="hidden" name="mode" value="update">
<?php 
if ($option_groups) {
?>
<a href="javascript: void(0);" onclick="javascript: check_all(document.poform, 'to_delete', true);">Отметить все</a> / <a href="javascript: void(0);" onclick="javascript: check_all(document.poform, 'to_delete', false);">Отменить выбор для всех</a>
<?php 
}
?>
<table width="800">
<?php 
if ($option_groups) {
?>
<tr>
 <th width="10">&nbsp;</th>
 <th width="100%" colspan="2">Группа опций</th>
 <th>Позиция</th>
 <th>Вариант</th>
 <th>Включено</th>
</tr>
<?php 
foreach ($option_groups as $v) {
	echo '
<tr>
 <td><input type="checkbox" name="to_delete['.$v['groupid'].']"></td>
 <td width="100%"><a href="'.$current_location.'/admin/products/'.$v['productid'].'/options/'.$v['groupid'].'">'.$v['name'].' ('.($v['options'] ? count($v['options']) : '0').')</a></td>
 <td nowrap>';

	if ($v['view_type'] == 's') {
 		echo "Поле выбора";
	} else if ($v['view_type'] == 'p') {
 		echo "Квадраты";
	} else if ($v['view_type'] == 'r') {
 		echo "Список кнопок для выбора опций";
	} else if ($v['view_type'] == 't') {
 		echo "Текстовая область";
	} else  {
 		echo "Поле ввода";
 	}

 echo '</td>
 <td><input type="input" size="5" name="posted_data['.$v['groupid'].'][orderby]" value="'.$v['orderby'].'" /></td>
 <td align="center"><input type="checkbox" name="posted_data['.$v['groupid'].'][variant]" value="1" '.($v['variant'] ? ' checked="checked"' : '').' /></td>
 <td align="center"><input type="checkbox" name="posted_data['.$v['groupid'].'][enabled]" value="1" '.($v['enabled'] ? ' checked="checked"' : '').' /></td>
</tr>
	';
}
?>
<tr>
 <td colspan="6"><br><button type="submit">Обновить</button> <button type="button" onclick="submitForm(this, 'delete');">Удалить выбранные</button></td>
</tr>
<?php 
}
?>
<tr>
 <td colspan="6"><br /><a href="<?php echo $current_location;?>/admin/products/<?php  echo $get['2']; ?>/options/add">Добавить новое</a></td>
</tr>
</table>
<?php 

if ($option_groups) {
?>
<br /><br />
<h2>Исключения опций</h2>
<small>You can set not available options combinations here.</small>
<?php 
	if ($options_ex) {?>
<br /><br />
<table>
<?php 
		foreach ($options_ex as $k=>$v) {			echo '<tr><td><input type="checkbox" name="to_delete['.$k.']" /></td><td>';
			foreach ($v as $k2=>$v2) {
				foreach ($option_groups as $g) {					if ($g['options'])
						foreach ($g['options'] as $o) {							if ($o['optionid'] == $v2)
								echo $g['name'].': '.$o['name'].' &nbsp; ';
						}				}
			}

			echo '</td></tr>';
		}
?>
</table>
<br />
<button type="button" onclick="submitForm(this, 'delete_ex');">Удалить выбранные</button>
<?php 
	}
?>
<br /><br />
<h3>Добавить исключение</h3>
<table>
<?php 
	foreach ($option_groups as $v) {		echo '<tr><td nowrap>'.$v['name'].':</td><td>';
		if ($v['options']) {			echo '<select name="new_exception['.$v['groupid'].']">';
			foreach ($v['options'] as $o)
				echo '<option value="'.$o['optionid'].'">'.$o['name'].'</option>';
			echo '</select>';
		}

		echo '</td></tr>';
    }
?>
<tr>
 <td colspan="2"><button type="button" onclick="submitForm(this, 'add_exception')">Добавить</button></td>
</tr>
</table>
<?php 
}
?>

</form>