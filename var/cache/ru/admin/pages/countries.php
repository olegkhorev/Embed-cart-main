<table cellpadding="2" cellspacing="1" class="countries">

<tr>
  <th>Код</th>
  <th>Страна</th>
  <th>Регионы</th>
</tr>

<?php 
foreach ($countries as $v) {
	echo '<tr>
  <td width="5%" align="center">'.$v['code'].'</td>
  <td>'.$v['country'].'</td>
  <td align="left"><a href="'.$current_location.'/admin/countries/'.$v['code'].'">Управление</a> '.($v['states'] ? '('.$v['states'].')' : '').'</td>
</tr>';
}
?>

</table>