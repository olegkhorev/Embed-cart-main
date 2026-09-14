<script>
stripe_key = '<?php echo $stripe_pkey;?>';
</script>
<form id="checkoutform" method="POST" stripeid="<?php echo $stripe_id;?>">
<input type="hidden" name="stripe_token" id="stripe_token" />
<input type="hidden" name="order_total" id="order_total" value="<?php  echo price_format($cart['total']); ?>" />
<?php if ($cart['need_shipping']) {?>
<h3>Способ доставки </h3>
<?php if ($shipping_methods) {?>
<select name="shippingid" onchange="javascript: recalculate_shipping(this.value);"<?php if ($cart['shippingid'] == 'L') {?> class="hidden"<?php } ?>>
<?php foreach ($shipping_methods as $v) {?>
<option value="<?php echo $v['shippingid'];?>"<?php if ($cart['shippingid'] == $v['shippingid']) {?> selected<?php } ?>><?php echo $v['shipping'];?><?php if ($v['shipping_time']) {?> (<?php echo $v['shipping_time'];?>)<?php } ?> - <?php echo '<span class="currency">'.currency_symbol().'</span>'.price_format_currency($v['rate']); ?></option>
<?php } ?>
</select>
<?php } else if (!$userinfo['firstname'] || $get['1'] != 'user_form') {?>
Пожалуйста, введите Ваш адрес
<?php } else if (!$cart['local_pickup']) {?>
Нет доступных способов доставки в ваш город
<?php } ?>

<?php if ($cart['local_pickup']) {?>
<br />
<label><input type="checkbox" name="local_pickup" id="local_pickup" value="1"<?php if ($cart['shippingid'] == 'L') {?> checked<?php } ?> />Самовывоз (бесплатная доставка)</label>
<div class="choose-warehouse<?php if ($cart['shippingid'] != 'L') {?> hidden<?php } ?>"><h2>Выберите склад</h2>
<table>
<?php foreach ($cart['warehouses'] as $k=>$w) {?>
<tr<?php if (!$k) {?> class="active"<?php } ?>>
 <td width="10"><input type="radio" id="wid-<?php echo $w['wid'];?>" name="wid" value="<?php echo $w['wid'];?>"<?php if (!$k) {?> checked<?php } ?> /></td>
 <td><label for="wid-<?php echo $w['wid'];?>"><?php echo $w['title'];?>, <?php echo $w['address'];?></label> <a href="http://maps.google.com/?q=<?php echo escape($w['address'], 2);; ?>" target="_blank">Открыть на карте</a></td>
</tr>
<?php } ?>
</table>
</div>
<br /><br />
<?php } ?>
<?php } ?>

<h3>Способ оплаты</h3>
<?php if ($cart['total'] == "0.00") {?>
Free
<?php } else  { ?>
<?php $display_cc_stripe = false;; ?>
<?php $display_cc_bt = false;; ?>
<select name="paymentid" id="paymentid">
<?php foreach ($payment_methods as $k=>$v) {?>
<option value="<?php echo $v['paymentid'];?>"><?php echo $v['name'];?></option>
<?php if (!$k && $v['paymentid'] == 7) {?>
<?php $display_cc_stripe = true;; ?>
<?php } ?>
<?php if (!$k && $v['paymentid'] == 2) {?>
<?php $display_cc_bt = true;; ?>
<?php } ?>
<?php } ?>
</select>
<?php } ?>
<?php if ($clientSecret) {?>
  <div id="cc-info-stripe"<?php if (!$display_cc_stripe) {?> style="display: none;"<?php } ?> secret="<?php echo $clientSecret;?>">
<table cellspacing="5" cellpadding="0" style="margin-left: -5px;">
<tr>
 <td colspan="2" style="padding: 5px; border: 1px solid #ccc;">
    <label>Card Number *</label>
    <div style="height: 30px;" id="card_number_stripe"></div>
    <div id="card-image"></div>
 </td>
</tr>
<tr>
 <td style="padding: 5px; border: 1px solid #ccc;"><label>Expiry Date *</label>
      <div style="width: 115px; height: 30px;"  id="ex_date_stripe">
 </td>
 <td style="padding: 5px; border: 1px solid #ccc;"><label>Security Code *</label>
  <div style="width: 115px; height: 30px;" id="cv_code_stripe"></div>
 </td>
</tr>
</table>
</div>

<?php } ?>
<?php if ($client_token) {?>
  <div id="cc-info" class="display-none"<?php if (!$display_cc_bt) {?> style="display: none;"<?php } ?>>
    <input hidden name="payment_method_nonce" id="payment-method-nonce">
<table>
<tr>
 <td colspan="2">
    <label>Номер карты</label>
    <div class="height-50p" id="card_number"></div>
    <div id="card-image"></div>
 </td>
</tr>
<tr>
 <td><label>Срок действия</label>
      <div class="cc-input" id="ex_date">
 </td>
 <td><label>CVV</label>
      <div class="cc-input" id="cv_code"></div>
 </td>
</tr>
</table>
</div>
<?php } ?>

<br /><br />
    <div class="group">
      <textarea class="width-95p" cols="30" rows="4" name="notes"></textarea>
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Ваши комментарии</label>
    </div>

<br /><br />
<div align="right">
<table class="subtotal" cellspacing="0" cellpadding="0" width="100%">
<tr>
 <td align="right">Итого:</td>
 <td width="50" align="right"><?php echo '<span class="currency">'.currency_symbol().'</span>'.price_format_currency($cart['subtotal']); ?></td>
</tr>
<?php if ($cart['coupon']) {?>
<tr>
 <td align="right">Скидка по купону(<?php echo $cart['coupon']['coupon'];?>) <span class="remove_coupon">(x)</span>:</td>
 <td align="right"><?php echo '<span class="currency">'.currency_symbol().'</span>'.price_format_currency($cart['coupon_discount']); ?></td>
</tr>
<?php /* ?><?php $discounted_subtotal = $cart['subtotal'] - $cart['coupon_discount'];; ?><?php */ ?>
<tr>
 <td align="right">Итого со скидкой:</td>
 <td width="50" align="right"><?php echo '<span class="currency">'.currency_symbol().'</span>'.price_format_currency($cart['discounted_subtotal']); ?></td>
</tr>
<?php } ?>
<tr>
 <td align="right">Доставка:</td>
 <td align="right"><?php echo '<span class="currency">'.currency_symbol().'</span>'.price_format_currency($cart['shipping_cost']); ?></td>
</tr>
<?php if ($cart['tax_details']) {?>
<tr>
 <td align="right">Налог(<?php echo $cart['tax_details']['tax_name'];?>):</td>
 <td align="right"><?php echo '<span class="currency">'.currency_symbol().'</span>'.price_format_currency($cart['tax']); ?></td>
</tr>
<?php } ?>
<?php if ($cart['gift_card']) {?>
<tr>
 <td align="right">Оплачено подарочной картой <span class="remove_gc">(x)</span>:</td>
 <td align="right"><?php echo '<span class="currency">'.currency_symbol().'</span>'.price_format_currency($cart['gc_discount']); ?></td>
</tr>
<?php } ?>
<tr class="totals">
 <td align="right">Итого:</td>
 <td align="right"><?php echo '<span class="currency">'.currency_symbol().'</span>'.price_format_currency($cart['total']); ?></td>
</tr>
</table>
</div>
<?php if (!$cart['coupon']) {?><div class="apply_coupon">У вас есть купон на скидку?</div>
<?php } ?>
<?php if (!$cart['gift_card']) {?>
<br />
<div class="apply_gc">Есть подарочная карта?</div>
<?php } ?>
<br />
<div class="register_error"></div>
<?php if ($shipping_methods || (!$cart['need_shipping'] && $get['1'] == 'user_form')) {?>
<center>
<button type="button" class="add2cart-product" id="card-submit">Разместить заказ</button>
</center>
<?php } ?>
</form>

<?php if ($client_token) {?>
<script>
var form = document.querySelector('#checkoutform');
var submit = document.querySelector('#card-submit');
var client_token = "<?php echo $client_token;?>",
	threeDSecure = '';
if (!braintree) {
    var braintree = '';
}
if (braintree) {
 braintree.client.create({
   authorization: client_token
 }, function (err, clientInstance) {
   if (err) {
     console.error(err);
     return;
   }

   braintree.hostedFields.create({
     client: clientInstance,
     styles: {
       'input': {
         'color': '#282c37',
         'font-size': '16px',
         'transition': 'color 0.1s',
         'line-height': '3'
       },
       'input.invalid': {
         'color': '#E53A40'
       },
       '::-webkit-input-placeholder': {
         'color': 'rgba(0,0,0,0.6)'
       },
       ':-moz-placeholder': {
         'color': 'rgba(0,0,0,0.6)'
        },
       '::-moz-placeholder': {
         'color': 'rgba(0,0,0,0.6)'
       },
       ':-ms-input-placeholder': {
         'color': 'rgba(0,0,0,0.6)'
       }
 
     },
     fields: {
       number: {
         selector: '#card_number',
         placeholder: '1111 1111 1111 1111'
       },
       cvv: {
         selector: '#cv_code',
         placeholder: '123'
       },
       expirationDate: {
         selector: '#ex_date',
         placeholder: '10 / 2022'
       }
     }
   }, function (err, hostedFieldsInstance) {
     if (err) {
       console.error(err);
       return;
     }
 
     hostedFieldsInstance.on('validityChange', function (event) {
       var formValid = Object.keys(event.fields).every(function (key) {
         return event.fields[key].isValid;
       });
 
       if (formValid) {
         $ec('#button-pay').addClass('show-button');
       } else  {
         $ec('#button-pay').removeClass('show-button');
       }
     });
 
     hostedFieldsInstance.on('empty', function (event) {
       $ec('ec_header').removeClass('ec_header-slide');
       $ec('#card-image').removeClass();
       $ec(form).removeClass();
     });
 
     hostedFieldsInstance.on('cardTypeChange', function (event) {
       if (event.cards.length === 1) {
         $ec(form).removeClass().addClass(event.cards[0].type);
         $ec('#card-image').removeClass().addClass(event.cards[0].type);
         $ec('ec_header').addClass('ec_header-slide');
 
         if (event.cards[0].code.size === 4) {
           hostedFieldsInstance.setAttribute({
             field: 'cvv',
             attribute: 'placeholder',
             value: '1234'
           });
         }
       } else  {
         hostedFieldsInstance.setAttribute({
           field: 'cvv',
           attribute: 'placeholder',
           value: '123'
         });
       }
     });
 
 	hostedFieldsInstance_obj = hostedFieldsInstance;
<?php /* ?>
    braintree.threeDSecure.create({
      authorization: client_token,
      version: 2
	}, function (createError, threeDSecure_obj) {  		threeDSecure = threeDSecure_obj;
 
     });
 <?php */ ?>
   });
 });
}
</script>
<?php } ?>