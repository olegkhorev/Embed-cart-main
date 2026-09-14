<div class="ec_padding-page gift_cards">
<h1>Подарочные карты</h1>

<h3>Купить новую подарочную карту</h3>
<input type="text" name="gift_card" id="gift_card" placeholder="Введите сумму $" />
<button>Купить</button>
<?php if ($gift_cards) {?>

<h3>Ранее приобретенные подарочные карты</h3>
<table>
<tr>
 <th>Номер</th>
 <th>Количество</th>
 <th>Осталось</th>
</tr>
<?php foreach ($gift_cards as $k=>$v) {?>
<tr>
 <td><?php echo $v['gcid'];?></td>
 <td><?php echo '<span class="currency">'.currency_symbol().'</span>'.price_format_currency($v['amount']); ?></td>
 <td><?php echo '<span class="currency">'.currency_symbol().'</span>'.price_format_currency($v['amount_left']); ?></td>
</tr>
<?php } ?>
</table>
<?php } ?>
