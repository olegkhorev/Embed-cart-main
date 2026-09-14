<a href="<?php echo $current_location;?>/admin/user/new">Создать нового пользователя</a><br /><br />
<form method="post" name="user_form"<?php /* ?><?php if (!$user['id']) {?> class="noajax"<?php } ?><?php */ ?>>
<table cellpadding="2" class="user_table normal-table">
<tr>
 <td class="name">Имя</td>
 <td><input type="text" name="posted_data[firstname]" value="<?php  echo escape($user['firstname']); ?>" /></td>
</td>
<tr>
 <td class="name">Фамилия</td>
 <td><input type="text" name="posted_data[lastname]" value="<?php  echo escape($user['lastname']); ?>" /></td>
</td>
<tr>
 <td class="name">Телефон</td>
 <td><input type="text" name="posted_data[phone]" value="<?php  echo escape($user['phone']); ?>" /></td>
</td>
<tr>
 <td class="name">Электронная почта</td>
 <td><input type="text" name="posted_data[email]" value="<?php  echo escape($user['email']); ?>" /></td>
</td>
<tr>
 <td class="name">Пароль</td>
 <td><input type="password" name="password" value="" /></td>
</td>

<?php if ($userinfo['usertype'] == 'A' && $root_admin) {?>
<tr>
 <td class="name">Роль</td>
 <td>
<select name="posted_data[usertype]">
<option value="C"<?php  if ($user['usertype'] == 'C') echo ' selected'; ?>>Клиент</option>
<option value="A"<?php  if ($user['usertype'] == 'A') echo ' selected'; ?>>Администратор</option>
</select>
 </td>
</td>
<?php } ?>

<?php if ($userinfo['usertype'] == 'A' && $root_admin) {?>
<tr>
 <td class="name">Роль</td>
 <td>
<select name="posted_data[roleid]">
<option value="0"></option>
<?php foreach ($roles as $v) {?>
<option value="<?php echo $v['roleid'];?>"<?php  if ($user['roleid'] == $v['roleid']) echo ' selected'; ?>><?php echo $v['title'];?></option>
<?php } ?>
</select>
 </td>
</td>
<?php } ?>

<tr>
 <td class="name">Статус</td>
 <td>
<select name="posted_data[status]">
<option value="1"<?php  if ($user['status'] == 1) echo ' selected'; ?>>Активна</option>
<option value="0"<?php  if (empty($user['status'])) echo ' selected'; ?>>Не активен</option>
</select>
 </td>
</tr>

<tr>
 <td class="name">Адрес</td>
 <td><input type="text" name="posted_data[address]" value="<?php  echo escape($user['address']); ?>" /></td>
</td>

<tr>
 <td class="name">Город</td>
 <td><input type="text" name="posted_data[city]" value="<?php  echo escape($user['city']); ?>" /></td>
</td>

<script>
var ec_states = {};
	user_state = "<?php  echo escape($user['state']); ?>";
<?php 
foreach ($countries as $v) {
	if (!empty($v['states'])) {
		echo 'ec_states.'.$v['code'].' = {ec_states: []};'."\n";
		foreach ($v['states'] as $k=>$s) {
			echo 'ec_states.'.$v['code'].'.ec_states['.$k.'] = {code: "'.escape($s['code']).'", state: "'.escape($s['state']).'"};'."\n";
		}
	}
}
?>
</script>

<tr>
 <td class="name">Регион</td>
 <td>
<?php 
$found = false;
foreach ($countries as $v)
	if ($v['code'] == $user['country'] && !empty($v['states'])) {
		$found = true;
		echo '<select name="posted_data[state]" id="state">';
		foreach ($v['states'] as $s)
			echo '<option value="'.escape($s['code']).'"'.($s['code'] == $user['state'] ? ' selected' : '').'>'.$s['state'].'</option>';

		echo '</select>';
	}
if (!$found) {
?>
 <input type="text" name="posted_data[state]" id="state" value="<?php  echo escape($user['state']); ?>" /></td>
<?php 
}
?>
</td>

<tr>
 <td class="name">Страна</td>
 <td>
<select name="posted_data[country]" id="country">
<option value=""></option>
<?php 
foreach ($countries as $v) {
	echo '<option value="'.$v['code'].'"'.(($v['code'] == $user['country']) ? ' selected' : '').'>'.$v['country'].'</option>';
}
?>
</select>
 </td>
</td>

<tr>
 <td class="name">Почтовый индекс</td>
 <td><input type="text" name="posted_data[zipcode]" value="<?php  echo escape($user['zipcode']); ?>" /></td>
</td>

<tr>
 <td class="name">Членство на рассмотрении</td>
 <td>
<select name="posted_data[pending_membershipid]">
<option value="0">Нет членства</option>
<?php 
if ($memberships)
	foreach ($memberships as $m) {
		echo '<option value="'.$m['membershipid'].'"'.($user['pending_membershipid'] == $m['membershipid'] ? ' selected="selected"' : '').'>'.$m['membership'].'</option>';
	}
?>
</select>
 </td>
</td>

<tr>
 <td class="name">Подписка</td>
 <td>
<select name="posted_data[membershipid]">
<option value="0">Нет членства</option>
<?php 
if ($memberships)
	foreach ($memberships as $m) {
		echo '<option value="'.$m['membershipid'].'"'.($user['membershipid'] == $m['membershipid'] ? ' selected="selected"' : '').'>'.$m['membership'].'</option>';
	}
?>
</select>
 </td>
</td>
</table>

<div class="fixed_save_button">
<button>Сохранить</button>
</div>

</form>