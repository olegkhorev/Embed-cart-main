<form method="POST" name="poform">
<input type="hidden" name="section" value="options">
<input type="hidden" name="mode" value="update">
  <table cellspacing="1" cellpadding="3" width="400" class="normal-table">

    <tr>
      <td>Имя</td>
      <td class="star">*</td>
      <td><input type="text" name="posted_data[name]" value="<?php  echo $option_group['name']; ?>" />
    </tr>

    <tr>
      <td>Текст</td>
      <td></td>
      <td><input type="text" size="40" name="posted_data[fullname]" value="<?php  echo $option_group['fullname']; ?>" />
    </tr>

    <tr>
      <td>Тип</td>
      <td></td>
      <td>
      <select name="posted_data[type]" id="data_type">
        <option value="g">Группа опций</option>
		<option value="t"<?php  if ($option_group['type'] == 't') echo ' selected'; ?>>Параметр текста</option>
      </select>
      </td>
    </tr>

    <tr>
      <td nowrap>Тип отображения</td>
      <td></td>
      <td>
      <select name="posted_data[view_type]" id="data_view_type">
<?php 
if ($option_group['type'] == 'g' || !$option_group) {
?>
        <option value="s">Поле выбора</option>
        <option value="p"<?php  if ($option_group['view_type'] == 'p') echo ' selected'; ?>>Квадраты</option>
<?php /* ?>
        <option value="r"<?php  if ($option_group['view_type'] == 'r') echo ' selected'; ?>>Список кнопок для выбора опций</option>-->
<?php */ ?>
<?php 
} else  {
?>
        <option value="t">Текстовая область</option>
        <option value="i"<?php  if ($option_group['view_type'] == 'i') echo ' selected'; ?>>Поле ввода</option>
<?php 
}
?>
      </select>
      </td>
    </tr>

    <tr>
      <td>Позиция</td>
      <td></td>
      <td><input size="5" type="text" name="posted_data[orderby]" value="<?php  echo $option_group['orderby']; ?>" /></td>
    </tr>

    <tr>
      <td>Вариант</td>
      <td></td>
      <td><input type="checkbox" name="posted_data[variant]" value="1"<?php  if ($option_group['variant']) echo ' checked'; ?> /></td>
    </tr>

    <tr>
      <td>Включено</td>
      <td></td>
      <td><input type="checkbox" name="posted_data[enabled]" value="1"<?php  if (!$option_group || $option_group['enabled']) echo ' checked'; ?> /></td>
    </tr>

  </table>
<br />
    <h3>Групповые опции</h3>
<?php 
if ($options) {
?>
<a href="javascript: void(0);" onclick="javascript: check_all(document.poform, 'to_delete', true);">Отметить все</a> / <a href="javascript: void(0);" onclick="javascript: check_all(document.poform, 'to_delete', false);">Отменить выбор для всех</a>
<?php 
}
?>
<table cellspacing="1" width="100%">
<tr>
 <th width="10"></th>
 <th width="100%">Имя</th>
 <th colspan="2">Модификатор цены</th>
 <th colspan="2">Модификатор веса</th>
 <th>Позиция</th>
 <th>Включено</th>
</tr>
<?php 
if ($options) {	foreach ($options as $k=>$v) {		echo '<tr>
 <td><input type="checkbox" name="to_delete['.$v['optionid'].']" /></td>
 <td><input type="text" class="width-95p" name="options_data['.$v['optionid'].'][name]" value="'.escape($v['name']).'" /></td>
 <td><input size="5" type="text" name="options_data['.$v['optionid'].'][price_modifier]" value="'.escape($v['price_modifier']).'" /></td>
 <td>
  <select name="options_data['.$v['optionid'].'][price_modifier_type]">
   <option value="%">Процент</option>
   <option value="$"'.($v['price_modifier_type'] == '$' ? ' selected="selected"' : '').'>Абсолютный</option>
  </select>
 </td>
 <td><input size="5" type="text" name="options_data['.$v['optionid'].'][weight_modifier]" value="'.escape($v['weight_modifier']).'" /></td>
 <td>
  <select name="options_data['.$v['optionid'].'][weight_modifier_type]">
   <option value="%">Процент</option>
   <option value="$"'.($v['weight_modifier_type'] == '$' ? ' selected="selected"' : '').'>Абсолютный</option>
  </select>
 </td>
 <td><input size="5" type="text" name="options_data['.$v['optionid'].'][orderby]" value="'.$v['orderby'].'" /></td>
 <td align="center"><input type="checkbox" name="options_data['.$v['optionid'].'][enabled]" value="1" '.($v['enabled'] ? ' checked' : '').'></td>
</tr>';
	}
}
?>
<tr id="add_new">
 <td><a href="javascript: void(0);" onclick="duplicate_row($ec('#add_new'), $ec(this));" class="duplicate_plus">+</a></td>
 <td><input type="text" class="width-95p" name="new_option[0][name]" /></td>
 <td><input size="5" type="text" name="new_option[0][price_modifier]" /></td>
 <td>
  <select name="new_option[0][price_modifier_type]">
   <option value="%">Процент</option>
   <option value="$">Абсолютный</option>
  </select>
 </td>
 <td><input size="5" type="text" name="new_option[0][weight_modifier]" /></td>
 <td>
  <select name="new_option[0][weight_modifier_type]">
   <option value="%">Процент</option>
   <option value="$">Абсолютный</option>
  </select>
 </td>
 <td><input size="5" type="text" name="new_option[0][orderby]" /></td>
 <td align="center"><input type="checkbox" name="new_option[0][enabled]" checked value="1" /></td>
</tr>
</table>
<br />
<?php 
if ($option_group) {
?>
<button type="submit">Обновить</button> <button type="button" onclick="submitForm(this, 'delete');">Удалить выбранные</button>
<?php 
} else  {
?>
<button type="submit">Добавить группу опций</button>
<?php 
}
?>
</form>