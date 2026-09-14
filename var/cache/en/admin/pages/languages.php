<form method="post" name="languagesform">
<input type="hidden" name="mode" value="update" />
<?php if ($translate_mode) {?>
<a href="<?php echo $current_location;?>/admin/language?exit_translate_mode=1" class="mdl-button">Exit "Translate" mode</a>
<?php } else  { ?>
<a href="<?php echo $current_location;?>/admin/language?translate_mode=1" class="mdl-button">Enter "Translate" mode</a>
<?php } ?>
&nbsp; (Make sure you do it in Development mode - see settings.php)
<br /><br />

<?php if ($languages) {?>
<a href="javascript: void(0);" onclick="javascript: check_all(document.languagesform, 'to_delete', true);">Check all <b class="translate"><span class="hidden word">Check all</span><span class="hidden translate-phrase">Check all</span>(Edit)</b></a> / <a href="javascript: void(0);" onclick="javascript: check_all(document.languagesform, 'to_delete', false);">Uncheck all <b class="translate"><span class="hidden word">Uncheck all</span><span class="hidden translate-phrase">Uncheck all</span>(Edit)</b></a>
<?php } ?>
<table cellpadding="3" cellspacing="1" width="600">
<tr>
	<th width="10">&nbsp;</th>
	<th width="15%">Code <b class="translate"><span class="hidden word">Code</span><span class="hidden translate-phrase">Code</span>(Edit)</b></th>
	<th width="10%">Name <b class="translate"><span class="hidden word">Name</span><span class="hidden translate-phrase">Name</span>(Edit)</b></th>
	<th width="20%">Active <b class="translate"><span class="hidden word">Active</span><span class="hidden translate-phrase">Active</span>(Edit)</b></th>
	<th width="20%">Pos <b class="translate"><span class="hidden word">Pos</span><span class="hidden translate-phrase">Pos</span>(Edit)</b></th>
	<th width="20%">Main <b class="translate"><span class="hidden word">Main</span><span class="hidden translate-phrase">Main</span>(Edit)</b></th>
	<th width="20%">Manage <b class="translate"><span class="hidden word">Manage</span><span class="hidden translate-phrase">Manage</span>(Edit)</b></th>
</tr>
<?php if ($languages) {?>
<?php 
foreach ($languages as $b) {
	echo '<tr>
	<td><input type="checkbox" name="to_delete['.$b['id'].']" value="Y" /></td>
	<td align="center"><input type="text" size="20" name="to_update['.$b['id'].'][code]" value="'.$b['code'].'" /></td>
	<td align="center"><input type="text" size="20" name="to_update['.$b['id'].'][name]" value="'.$b['name'].'" /></td>
	<td align="center"><input type="checkbox" name="to_update['.$b['id'].'][active]" value="1"'.($b['active'] ? ' checked="checked"' : '').' /></td>
	<td align="center"><input type="text" size="5" name="to_update['.$b['id'].'][orderby]" value="'.$b['orderby'].'" /></td>
	<td align="center"><input type="radio" name="main_lang" value="'.$b['id'].'"'.($b['main'] ? ' checked="checked"' : '').' /></td>
	<td align="center"><a href="'.$current_location.'/admin/language/'.$b['code'].'">Manage</a></td>
</tr>';
}
?>

<tr>
	<td colspan="7">
<button type="button" onclick="javascript: submitForm(this, 'update');">Update <b class="translate"><span class="hidden word">Update</span><span class="hidden translate-phrase">Update</span>(Edit)</b></button> &nbsp;
<button type="button" onclick="javascript: submitForm(this, 'delete');">Delete selected <b class="translate"><span class="hidden word">Delete selected</span><span class="hidden translate-phrase">Delete selected</span>(Edit)</b></button>
	</td>
</tr>
<?php } ?>

<tr>
	<td colspan="7"><h3>Add new <b class="translate"><span class="hidden word">Add new</span><span class="hidden translate-phrase">Add new</span>(Edit)</b></h3></td>
</tr>
<tr>
	<td></td>
	<td align="center"><input type="text" size="20" name="new_language[code]" value="" /></td>
	<td align="center"><input type="text" size="20" name="new_language[name]" value="" /></td>
	<td align="center"><input type="checkbox" name="new_language[active]" value="1" checked="checked" /></td>
	<td align="center"><input type="text" size="5" name="new_language[orderby]" value="" /></td>
	<td colspan="2"></td>
</tr>

<tr>
	<td colspan="7"><button type="button" onclick="javascript: submitForm(this, 'add');">Add <b class="translate"><span class="hidden word">Add</span><span class="hidden translate-phrase">Add</span>(Edit)</b></button></td>
</tr>

</table>
</form>
