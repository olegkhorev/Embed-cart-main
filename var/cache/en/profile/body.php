<div class="tabs">
<a href="<?php echo $parnet_site_page;?>#!profile" class="ec_ajax_link <?php if ($section != 'orders') {?> active<?php } ?>">Your profile</a>
<a href="<?php echo $parnet_site_page;?>#!profile/orders" class="ec_ajax_link <?php if ($section == 'orders') {?> active<?php } ?>">Orders history</a>
</div>
<br />
<?php if ($section == 'orders') {?>
 <?php if ($orders) {?>
<table cellspacing="15">
  <?php foreach ($orders as $k=>$v) {?>
<tr>
 <td><a href="<?php echo $parnet_site_page;?>#!invoice/<?php echo $v['orderid'];?>" class="ec_ajax_link">#<?php echo $v['orderid'];?></a></td>
 <td><a href="<?php echo $parnet_site_page;?>#!invoice/<?php echo $v['orderid'];?>" class="ec_ajax_link"><?php echo $order_statuses[$v['status']];?></a></td>
 <td><a href="<?php echo $parnet_site_page;?>#!invoice/<?php echo $v['orderid'];?>" class="ec_ajax_link"><?php echo date($datetime_format, $v['date']);; ?></a></td>
 <td><a href="<?php echo $parnet_site_page;?>#!invoice/<?php echo $v['orderid'];?>" class="ec_ajax_link"><?php echo '<span class="currency">'.currency_symbol().'</span>'.price_format_currency($v['total']); ?></a></td>
</tr>
  <?php } ?>
</table>
 <?php } else  { ?>
You have no orders yet.
 <?php } ?>
<?php } else  { ?>
<center>
<form method="post" action="<?php echo $current_location;?>/profile" name="user_form" class="material-form">
    <div class="group">
      <input type="text" name="posted_data[firstname]" required value="<?php echo escape($userinfo['firstname'], 2);; ?>" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>First name</label>
    </div>

    <div class="group">
      <input type="text" name="posted_data[lastname]" required value="<?php echo escape($userinfo['lastname'], 2);; ?>" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Last name</label>
    </div>
    <div class="group">
      <input type="text" name="posted_data[phone]" required value="<?php echo escape($userinfo['phone'], 2);; ?>" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Phone</label>
    </div>
    <div class="group">
      <input type="text" name="posted_data[email]" required value="<?php echo escape($userinfo['email'], 2);; ?>" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Email</label>
    </div>
    <div class="group">
      <input type="password" name="password" value="" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Password</label>
    </div>
    <div class="group">
      <input type="text" name="posted_data[address]" required value="<?php echo escape($userinfo['address'], 2);; ?>" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Address</label>
    </div>

    <div class="group">
      <input type="text" name="posted_data[city]" required value="<?php echo escape($userinfo['city'], 2);; ?>" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>City</label>
    </div>
    <div class="group group-select  group-select-input">
<label>State:</label>
<div>
<?php $found = false;; ?>
<?php foreach ($countries as $v) {?>
 <?php if ($v['code'] == $userinfo['country'] && $v['states']) {?>
  <?php $found = true;; ?>
<select name="posted_data[state]" id="state">
  <?php foreach ($v['states'] as $s) {?>
 <option value="<?php echo $s['code'];?>"<?php if ($s['code'] == $userinfo['state']) {?> selected<?php } ?>><?php echo $s['state'];?></option>
   <?php } ?>
</select>
 <?php } ?>
<?php } ?>

<?php if (!$found) {?>
<input type="text" name="posted_data[state]" id="state" value="<?php echo escape($userinfo['state'], 2);; ?>" />
<?php } ?>
</div>
    </div>

    <div class="group group-select">
 <label>Country:</label>
<select name="posted_data[country]" id="country">
<?php foreach ($countries as $v) {?>
 <option value="<?php echo $v['code'];?>"<?php if ($v['code'] == $userinfo['country'] || (!$userinfo['country'] && $v['code'] == 'US')) {?> selected<?php } ?>><?php echo $v['country'];?></option>
<?php } ?>
</select>
    </div>

    <div class="group">
      <input type="text" name="posted_data[zipcode]" required value="<?php echo escape($userinfo['zipcode'], 2);; ?>" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Zip/Postal code</label>
    </div>

<?php if ($memberships) {?>
<?php if ($userinfo['membershipid']) {?>
    <div class="group">
      <input type="text" disabled value="<?php foreach ($memberships as $v) {?><?php if ($v['membershipid'] == $userinfo['membershipid']) {?><?php echo escape($v['membership'], 2);; ?><?php } ?><?php } ?>" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Membership</label>
    </div>
<?php } ?>

<?php $name="pending_membershipid"; $value = $userinfo['pending_membershipid'];; ?>
    <div class="group group-select">
 <label>Sign up for membership:</label>
<?php include SITE_ROOT."/var/cache/en/common/membership.php";?>
    </div>
<?php } ?>

<div align="center"><button>Save</button></div>
</form>
<?php } ?>