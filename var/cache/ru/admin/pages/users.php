<a href="<?php echo $current_location;?>/admin/user/new">Create new user account</a><br /><br />
<form action="<?php echo $current_location;?>/admin/users/search" method="post" name="users_form">
<input type="hidden" name="mode" value="" />

<?php 
if ($get['2'] == 'search') {
?>
<a href="<?php echo $current_location;?>/admin/users" class="search_again">Повторный поиск</a>
<h3>Результаты поиска пользователя</h3>
<?php 
if ($users) {
?>
<?php 
if ($total_pages > 2) {
?>
<?php include SITE_ROOT."/var/cache/ru/common/navigation_admin.php";?>
<?php 
	echo '<br />';
}
?>

<table cellpadding="2" class="users_list lines-table">
<tr>
 <th width="10">&nbsp;</th>
 <th width="40%">Имя пользователя</th>
 <th width="40%">Электронная почта пользователя</th>
 <th width="10%">Роль пользователя</th>
 <th width="10%">Статус</th>
</tr>
<?php 
foreach ($users as $k=>$v) {
?>
<tr>
 <td><input type="checkbox" name="to_delete[<?php  echo $v['id']; ?>]" /></td>
 <td><a href="<?php echo $current_location;?>/admin/user/<?php  echo $v['id']; ?>"><?php  echo $v['firstname'].' '.$v['lastname']; ?></a></td>
 <td><?php  echo $v['email']; ?></a></td>
 <td align="center"><?php  if ($v['usertype'] == 'A') {?>Администратор<?php } else  {?>Клиент<?php } ?></a></td>
 <td>
<select name="status[<?php  echo $v['id']; ?>]">
<option value="1"<?php  if ($v['status'] == 1) echo ' selected="selected"'; ?>>Активна</option>
<option value="0"<?php  if (empty($v['status'])) echo ' selected="selected"'; ?>>Не активен</option>
</select>
 </td>
</tr>
<?php 
}
?>
</table>
<div class="fixed_save_button">
<button type="button" onclick="submitForm(document.users_form, 'update');">Обновить</button>
&nbsp;
<button type="button" onclick="submitForm(document.users_form, 'delete');">Удалить выбранные</button>
</div>
<?php 
} else  {
?>
Пользователи не найдены
<?php 
}
} else  {
?>
<h3>Управление пользователями</h3><br />
<table cellpadding="2" cellspacing="1" class="users_management">
<tr>
 <td class="name">Искать</td>
 <td><input type="text" name="substring" value="<?php  echo escape($users_search['substring']); ?>" size="80" /></td>
</tr>

<tr>
 <td class="name">Поиск в</td>
 <td>
<label><input type="checkbox" name="firstname" value="1"<?php  if ($users_search['firstname']) echo ' checked="checked"'; ?> /> Имя</label>
<label><input type="checkbox" name="lastname" value="1"<?php  if ($users_search['lastname']) echo ' checked="checked"'; ?> /> Фамилия</label>
<label><input type="checkbox" name="email" value="1"<?php  if ($users_search['email']) echo ' checked="checked"'; ?> /> Электронная почта</label>
 </td>
</tr>

<tr>
 <td class="name">Статус</td>
 <td>
<select name="status">
<option value="">Все</option>
<option value="1"<?php  if ($users_search['status'] == 1) echo ' selected="selected"'; ?>>Активна</option>
<option value="0"<?php  if ($users_search['status'] == '0') echo ' selected="selected"'; ?>>Не активен</option>
</select>
 </td>
</tr>

<tr>
 <td class="name">Роль</td>
 <td>
<select name="usertype">
<option value="">Все</option>
<option value="C"<?php  if ($users_search['usertype'] == 'C') echo ' selected="selected"'; ?>>Клиент</option>
<option value="A"<?php  if ($users_search['usertype'] == 'A') echo ' selected="selected"'; ?>>Администратор</option>
</select>
 </td>
</tr>

<tr>
 <td class="name">Подписка</td>
 <td>
<select name="membershipid">
<option value="0">Нет членства</option>
<?php 
if ($memberships)
	foreach ($memberships as $m) {
		echo '<option value="'.$m['membershipid'].'"'.($users_search['membershipid'] == $m['membershipid'] ? ' selected="selected"' : '').'>'.$m['membership'].'</option>';
	}
?>
</select>
 </td>
</td>

<tr>
 <td class="name">Членство на рассмотрении</td>
 <td>
<input type="checkbox" name="pending_membership" value="Y"<?php  if ($users_search['pending_membership'] == 'Y') echo ' checked="checked"'; ?> />
 </td>
</tr>

<tr>
  <td></td>
  <td><br /><button type="submit">Поиск</button></td>
</tr>

</table>
</form>
<?php 
}
?>
