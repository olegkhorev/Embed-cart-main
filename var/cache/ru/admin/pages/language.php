<?php if ($translate_mode) {?>
<a href="<?php echo $current_location;?>/admin/language?exit_translate_mode=1" class="mdl-button">Выйти из режима перевода</a>
<?php } else  { ?>
<a href="<?php echo $current_location;?>/admin/language?translate_mode=1" class="mdl-button">Войти в режим перевода</a>
<?php } ?>
&nbsp; (Убедитесь что включено "Development mode" в settings.php и вы редактируете в закрытом магазине)
<br /><br />
<form method="post" enctype="multipart/form-data" name="fpform" class="noajax">
<table width="800">
<tr>
 <td width="50%">
<table width="400" cellpadding="3" cellspacing="1">
<tr>
 <td colspan="2"><h3>Экспортировать языковые метки</td>
</tr>

<tr>
  <td width="100%"></td>
  <td>
  <button type="button" onclick="self.location='<?php echo $web_dir;?>/admin/language/<?php echo $get[2];?>?mode=export';">Экспорт</button>
  </td>
</tr>

</table>
 </td>
 <td>
<table width="400" cellpadding="3" cellspacing="1">

<tr>
 <td colspan="2"><h3>Импортировать языковые метки</td>
</tr>

<tr>
  <td width="100%"><input type="file" name="file" /></td>
  <td>
  <button type="submit">Импорт</button>
  </td>
</tr>
</table>
 </td>
</tr>
</table>
</form>