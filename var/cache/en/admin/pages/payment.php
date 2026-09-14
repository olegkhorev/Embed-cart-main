<h1>Payment methods</h1>

<form method="post">
<table cellpadding="2" cellspacing="1" width="700">

<tr class="TableHead">
  <th>Payment method</th>
  <th>Comment</th>
  <th>Mode</th>
  <th>Params</th>
  <th>Order by</th>
  <th>Enabled</th>
</tr>
<?php 
foreach ($payment_methods as $m) {
  if ($m['paymentid'] == '9')
    continue;
	echo '
<tr>
  <td align="center"><input type="text" name="data['.$m['paymentid'].'][name]" size="20" value="'.escape($m['name'], 2).'" /></td>
  <td align="center"><input type="text" name="data['.$m['paymentid'].'][details]" size="20" value="'.escape($m['details'], 2).'" /></td>
  <td align="center">'.(($m['paymentid'] == 7 || $m['paymentid'] == 2 || $m['paymentid'] == 8 || $m['paymentid'] == 9) ? '<select name="data['.$m['paymentid'].'][live]"'.(DEMO ? ' disabled' : '').'>
    <option value="0">Test</option>
    <option value="1"'.($m['live'] == 1 ? ' selected="selected"' : '').'>Live</option>
  </select>' : 'Офлайн').'</td>
  <td align="left" nowrap>';
	if ($m['paymentid'] == '7') {
		echo '
		<input type="text" name="data['.$m['paymentid'].'][param1]" size="20" placeholder="Secret key"'.(DEMO ? ' disabled' : '').' value="'.escape($m['param1'], 2).'" /><br /><input type="text" name="data['.$m['paymentid'].'][param2]" size="20" placeholder="Publisher key"'.(DEMO ? ' disabled' : '').' value="'.escape($m['param2'], 2).'" />
		';
	} else if ($m['paymentid'] == '2') {
		echo '
		<input type="text" name="data['.$m['paymentid'].'][param1]" size="20" placeholder="Merchant ID"'.(DEMO ? ' disabled' : '').' value="'.escape($m['param1'], 2).'" /><br /><input type="text" name="data['.$m['paymentid'].'][param2]" size="20" placeholder="Public key"'.(DEMO ? ' disabled' : '').' value="'.escape($m['param2'], 2).'" /><br /><input type="text" name="data['.$m['paymentid'].'][param3]" size="20" placeholder="Private key"'.(DEMO ? ' disabled' : '').' value="'.escape($m['param3'], 2).'" />
		';
	} else if ($m['paymentid'] == '8') {
		echo '
		<input type="text" name="data['.$m['paymentid'].'][param1]" size="20" placeholder="Paypal Email"'.(DEMO ? ' disabled' : '').' value="'.escape($m['param1'], 2).'" />
		';
	} else if ($m['paymentid'] == '9') {
		echo '
		<input type="text" name="data['.$m['paymentid'].'][param1]" size="20" placeholder="Секретный ключ"'.(DEMO ? ' disabled' : '').' value="'.escape($m['param1'], 2).'" /><br />
    <input type="text" name="data['.$m['paymentid'].'][param2]" size="20" placeholder="Shop #ID"'.(DEMO ? ' disabled' : '').' value="'.escape($m['param2'], 2).'" /><br />
    <input type="text" name="data['.$m['paymentid'].'][param3]" size="20" placeholder="ИНН"'.(DEMO ? ' disabled' : '').' value="'.escape($m['param3'], 2).'" /><br />
		';
	}
  echo '</td>
  <td align="center"><input type="text" name="data['.$m['paymentid'].'][orderby]" size="4" value="'.$m['orderby'].'" /></td>
  <td nowrap="nowrap" align="center"><input type="checkbox" name="data['.$m['paymentid'].'][enabled]" value="1"'.($m['enabled'] ? ' checked="checked"' : '').' /></td>
</tr>';
}
?>

<tr>
  <td colspan="6"><br />
<div class="fixed_save_button">
    <button type="submit">Apply changes</button>
</div>
  </td>
</tr>


</table>

</form>