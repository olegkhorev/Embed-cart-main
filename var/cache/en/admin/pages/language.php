<form method="post" enctype="multipart/form-data" name="fpform" class="noajax">
<table width="800">
<tr>
 <td width="50%">
<table width="400" cellpadding="3" cellspacing="1">
<tr>
 <td colspan="2"><h3>Export language labels</td>
</tr>

<tr>
  <td width="100%"></td>
  <td>
  <button type="button" onclick="self.location='<?php echo $web_dir;?>/admin/language/<?php echo $get[2];?>?mode=export';">Export</button>
  </td>
</tr>

</table>
 </td>
 <td>
<table width="400" cellpadding="3" cellspacing="1">

<tr>
 <td colspan="2"><h3>Import language labels</td>
</tr>

<tr>
  <td width="100%"><input type="file" name="file" /></td>
  <td>
  <button type="submit">Import</button>
  </td>
</tr>
</table>
 </td>
</tr>
</table>
</form>