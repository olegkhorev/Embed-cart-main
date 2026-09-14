<form method="post">
<input type="hidden" name="mode" value="update" />

<a href="<?php echo $current_location;?>/admin/roles/new" class="ajax_link">New role</a><br />

<table cellpadding="3" cellspacing="1" width="600">
<?php 
if ($roles) {
?>
<tr>
	<th width="10">&nbsp;</th>
	<th width="80%">Title</th>
	<th width="15%" align="center">Pos</th>
</tr>

<?php 
	foreach ($roles as $v) {
?>
<tr>
	<td width="10"><input type="checkbox" name="to_delete[]" value="<?php  echo $v['roleid']; ?>" /></td>
	<td><a href="<?php echo $current_location;?>/admin/roles/<?php echo $v['roleid'];?>" class="ajax_link"><?php echo $v['title'];?></a></td>
	<td align="center"><input type="text" size="5" name="posted_data[<?php  echo $v['roleid']; ?>][pos]" value="<?php  echo $v['pos']; ?>" /></td>
</tr>
<?php 
	}
?>
<tr>
	<td colspan="3">
<div class="fixed_save_button">
	<button>Update</button>
	<button type="button" onclick="submitForm(this, 'delete')">Delete selected</button>
</div>
	</td>
</tr>
<?php 
} else  {
?>

<tr>
	<td colspan="3" align="center"><br />No Roles defined</td>
</tr>

<?php 
}
?>

</table>

</form>