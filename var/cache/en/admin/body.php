<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8" />

<link rel="shortcut icon" href="<?php echo $current_location;?>/favicon.png" type="image/vnd.microsoft.icon" />
<title><?php  echo $head_title; ?></title>

<link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
<?php /* ?>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<?php */ ?>
<link rel="stylesheet" href="<?php echo $current_location;?>/materialize/material.orange-amber.min.css" />
<link rel="stylesheet" href="<?php echo $current_location;?>/images/bootstrap-datepicker.standalone.css" />
<script defer src="<?php echo $current_location;?>/materialize/material.min.js"></script>
<script defer src="<?php echo $current_location;?>/images/chart.umd.js"></script>

<style type="text/css" media="all">
<?php 
if (!empty($css)) {
	include 'includes/css.php';
}
?>
</style>
<script type="text/javascript">
var custId = 0;
var current_area = 'A',
	ec_page = '<?php  echo $get['1']; ?>',
	ec_this_page = '<?php  echo $get['1']; ?>',
	ec_pageid = '',
	browser = <?php  echo $browser; ?>,
	stripe_key = '<?php echo $stripe_pkey;?>',
	current_location = '<?php  echo $current_location;?>',
	ajax_delimiter = '<?php  echo $ajax_delimiter; ?>',
	currency_symbol = '<?php echo $config['General']['currency_symbol'];?>',
	weight_symbol = '<?php echo $config['General']['weight_symbol'];?>',
	payment_currency = '<?php echo $payment_currency;?>',
	is_ajax_page = <?php echo $is_ajax_page;; ?>,
	facebook_api = '<?php echo $current_protocol;?>://connect.facebook.net/en-en/all.js',
	twitter_api = '<?php echo $current_protocol;?>://platform.twitter.com/widgets.js',
	ec_states = [],
	w_prices = [],
	ec_qadd = '',
	ec_oid = 0,
	parent_site_page = '<?php echo $parnet_site_page;?>',
	variants = [],
	groups = [],
	options = [],
	exceptions = [],
	w_prices = [],
	product_base,
	product_price,
	product_weight,
	product_price_ql,
	product_weight_ql,
	default_images,
	default_images_ql,
	product_avail = [];

<?php if (!$login) {?>
var need_login = <?php if ($_GET['mode'] == 'login') {?>1<?php } else  { ?>0<?php } ?>;
<?php } ?>

<?php 
if ($userinfo['usertype'] != 'A') {
?>
var login_form = [];
login_form['email'] = "E-mail";
login_form['password'] = "Password";
<?php 
}
?>
</script>
<script src="<?php echo $current_location;?>/ckeditor/ckeditor.js"></script>

<?php 
if (!empty($js)) {
	include 'includes/js.php';
}
?>
<script src="<?php echo $current_location;?>/images/bootstrap-datepicker.min.js"></script>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/themes/smoothness/jquery-ui.css" />
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/jquery-ui.min.js"></script>
<script src="<?php echo $current_location;?>/images/jquery.flot.js"></script>
<script src="<?php echo $current_location;?>/images/jquery.flot.time.js"></script>
</head>
<body class="admin-area<?php if (!$login) {?> no-logged<?php } ?>">
  <?php 
	if ($alerts) {
		echo '<div class="alerts"><span class="close-alerts"><b>X</b> Close</span>';
		foreach ($alerts as $v) {
			if ($v['type'] == 'e') {
?>
<div class="error">Error:
<?php 
				echo ' '.$v['content'].'</div>';
			} else  {
				echo ' '.$v['content'].'<br>';
			}

			echo '<br>';
		}

		echo '</div>';
	}
  ?>

<?php if (!$login) {?>
<?php include SITE_ROOT."/var/cache/en/admin/pages/login_new.php";?>
<?php } else  { ?>

	<div class="container">
		<div class="navigation-admin">
<?php if ($login && $userinfo['usertype'] == 'A') {?>
			<ul>
				<li>
					<a href="<?php echo $current_location;?>/" class="logo-link no-ajax" target="_blank">
						<span class="icon"><img src="<?php echo $current_location;?>/images/logo_admin.png" alt="" /></span>
						<span class="title">Embed-Cart</span>
					</a>
				</li>
				<li>
					<a href="<?php echo $current_location;?>/admin">
						<span class="icon"><ion-icon name="home-outline"></ion-icon></span>
						<span class="title">Dashboard</span>
					</a>
				</li>
<?php if ($allow_pages['pages_1']['allow']) {?>
				<li>
					<a href="javascript: void(0);" class="no-ajax">
						<span class="icon"><ion-icon name="bag-handle-outline"></ion-icon></span>
						<span class="title">Orders and discounts</span>
					</a>
<div>
<?php if (in_array('orders', $allow_pages_ids) || $root_admin) {?>
<a href="<?php echo $current_location;?>/admin/orders/recent">Recent orders</a>
<?php } ?>
<?php if (in_array('orders', $allow_pages_ids) || $root_admin) {?>
<a href="<?php echo $current_location;?>/admin/orders">Search orders</a>
<a href="<?php echo $current_location;?>/admin/statistic">Statistic</a>
<?php } ?>
<?php if (in_array('coupons', $allow_pages_ids) || $root_admin) {?>
<a href="<?php echo $current_location;?>/admin/coupons">Discount coupons</a>
<?php } ?>
<?php if (in_array('gift_cards', $allow_pages_ids) || $root_admin) {?>
<a href="<?php echo $current_location;?>/admin/gift_cards">Gift Cards</a>
<?php } ?>
</div>
 </li>
<?php } ?>

<?php if ($allow_pages['pages_2']['allow']) {?>
				<li>
					<a href="javascript: void(0);" class="no-ajax">
						<span class="icon"><ion-icon name="people-outline"></ion-icon></span>
						<span class="title">Users</span>
					</a>
<div>
<?php if (in_array('users', $allow_pages_ids) || $root_admin) {?>
<a href="<?php echo $current_location;?>/admin/users">Browse users</a>
<?php } ?>
<?php if (in_array('users', $allow_pages_ids) || $root_admin) {?>
<a href="<?php echo $current_location;?>/admin/user/new">Create new user</a>
<?php } ?>
<?php if (in_array('memberships', $allow_pages_ids) || $root_admin) {?>
<a href="<?php echo $current_location;?>/admin/memberships">Membership levels</a>
<?php } ?>
<?php if ($root_admin) {?>
<a href="<?php echo $current_location;?>/admin/roles">Roles</a>
<?php } ?>
</div>
				</li>
<?php } ?>

<?php if ($allow_pages['pages_3']['allow']) {?>
 <li>
					<a href="javascript: void(0);" class="no-ajax">
						<span class="icon"><ion-icon name="apps-outline"></ion-icon></span>
						<span class="title">Catalog</span>
					</a>
<div>
<?php if (in_array('products', $allow_pages_ids) || $root_admin) {?>
<a href="<?php echo $current_location;?>/admin/products">Products</a>
<?php } ?>
<?php if (in_array('products', $allow_pages_ids) || $root_admin) {?>
<a href="<?php echo $current_location;?>/admin/products/add">Add new product</a>
<?php } ?>
<?php if (in_array('reviews', $allow_pages_ids) || $root_admin) {?>
<a href="<?php echo $current_location;?>/admin/reviews">Reviews</a>
<?php } ?>
<?php if (in_array('categories', $allow_pages_ids) || $root_admin) {?>
<a href="<?php echo $current_location;?>/admin/categories">Categories</a>
<?php } ?>
<?php if (in_array('brands', $allow_pages_ids) || $root_admin) {?>
<a href="<?php echo $current_location;?>/admin/brands">Brands</a>
<?php } ?>
<?php if (in_array('import', $allow_pages_ids) || $root_admin) {?>
<a href="<?php echo $current_location;?>/admin/import">Import catalog</a>
<?php } ?>
<?php if (in_array('export', $allow_pages_ids) || $root_admin) {?>
<a href="<?php echo $current_location;?>/admin/export">Export catalog</a>
<?php } ?>
</div>
 </li>
<?php } ?>

<?php if ($allow_pages['pages_4']['allow']) {?>
 <li>
					<a href="javascript: void(0);" class="no-ajax">
						<span class="icon"><ion-icon name="copy-outline"></ion-icon></span>
						<span class="title">Content</span>
					</a>
<div>
<?php if (in_array('subscribtions', $allow_pages_ids) || $root_admin) {?>
<a href="<?php echo $current_location;?>/admin/subscribtions">Newsletter</a>
<?php } ?>
<?php if (in_array('pages', $allow_pages_ids) || $root_admin) {?>
<a href="<?php echo $current_location;?>/admin/pages">Static pages</a>
<?php } ?>
<?php if (in_array('homepage', $allow_pages_ids) || $root_admin) {?>
<a href="<?php echo $current_location;?>/admin/homepage">Homepage</a>
<?php } ?>
</div>
 </li>
<?php } ?>
<?php if ($allow_pages['pages_5']['allow']) {?>
 <li>
					<a href="javascript: void(0);" class="no-ajax">
						<span class="icon"><ion-icon name="card-outline"></ion-icon></span>
						<span class="title">Shipping and payment</span>
					</a>
<div>
<?php if (in_array('shipping', $allow_pages_ids) || $root_admin) {?>
<a href="<?php echo $current_location;?>/admin/shipping">Shipping methods</a>
<?php } ?>
<?php if (in_array('shipping_charges', $allow_pages_ids) || $root_admin) {?>
<a href="<?php echo $current_location;?>/admin/shipping_charges">Shipping charges</a>
<?php } ?>
<?php if (in_array('payment', $allow_pages_ids) || $root_admin) {?>
<a href="<?php echo $current_location;?>/admin/payment">Payment methods</a>
<?php } ?>
<?php if (in_array('taxes', $allow_pages_ids) || $root_admin) {?>
<a href="<?php echo $current_location;?>/admin/taxes">Taxes</a>
<?php } ?>
<?php if (in_array('zones', $allow_pages_ids) || $root_admin) {?>
<a href="<?php echo $current_location;?>/admin/zones">Destination zones</a>
<?php } ?>
<?php if (in_array('countries', $allow_pages_ids) || $root_admin) {?>
<a href="<?php echo $current_location;?>/admin/countries">Countries/States</a>
<?php } ?>
</div>
 </li>
<?php } ?>

<?php if ($allow_pages['pages_6']['allow']) {?>
 <li>
					<a href="javascript: void(0);" class="no-ajax">
						<span class="icon"><ion-icon name="settings-outline"></ion-icon></span>
						<span class="title">Configuration</span>
					</a>
<div>
<?php if (in_array('configuration', $allow_pages_ids) || $root_admin) {?>
<a href="<?php echo $current_location;?>/admin/configuration/General">General settings</a>
<?php } ?>
<?php if (in_array('configuration', $allow_pages_ids) || $root_admin) {?>
<a href="<?php echo $current_location;?>/admin/configuration/Company">Company information</a>
<?php } ?>
<?php /* ?>
<?php if (in_array('configuration', $allow_pages_ids) || $root_admin) {?>
<a href="<?php echo $current_location;?>/admin/configuration/CDek">CDek</a>
<?php } ?>
<?php */ ?>
<?php if (in_array('configuration', $allow_pages_ids) || $root_admin) {?>
<a href="<?php echo $current_location;?>/admin/configuration/Design">Design</a>
<?php } ?>
<?php if (in_array('language', $allow_pages_ids) || $root_admin) {?>
<a href="<?php echo $current_location;?>/admin/language">Languages</a>
<?php } ?>
<?php if (in_array('currencies', $allow_pages_ids) || $root_admin) {?>
<a href="<?php echo $current_location;?>/admin/currencies">Currencies</a>
<?php } ?>
</div>
 </li>
<?php } ?>


<?php if ($allow_pages['pages_7']['allow']) {?>
 <li>
					<a href="javascript: void(0);" class="no-ajax">
						<span class="icon"><ion-icon name="people-circle-outline"></ion-icon></span>
						<span class="title">Support desk</span>
					</a>
<div>
<?php if (in_array('support_desk', $allow_pages_ids) || $root_admin) {?>
<a href="<?php echo $current_location;?>/admin/support_desk">Support desk</a>
<?php } ?>
<?php if (in_array('configuration', $allow_pages_ids) || $root_admin) {?>
<a href="<?php echo $current_location;?>/admin/configuration/Tickets">Support desk settings</a>
<?php } ?>
</div>
 </li>
<?php } ?>
 </li>
<?php if ($allow_pages['pages_8']['allow']) {?>
 <li>
					<a href="javascript: void(0);" class="no-ajax">
						<span class="icon"><ion-icon name="search-circle-outline"></ion-icon></span>
						<span class="title">SEO</span>
					</a>
<div>
<?php if (in_array('sitemap', $allow_pages_ids) || $root_admin) {?>
<a href="<?php echo $current_location;?>/admin/sitemap">Google sitemap</a>
<?php } ?>
</div>
 </li>
<?php } ?>
<?php } else  { ?>
<?php } ?>
			</ul>
		</div>

		<!-- main -->
		<div class="main">
			<div class="topbar">
<?php /* ?>
				<div class="toggle">
					<ion-icon name="menu-outline"></ion-icon>
				</div>
<?php */ ?>
				<div class="header-links">
<div id="quick_search_form">
<label>Search: </label>
<select>
<option value="1">Products</option>
<option value="2">Customers</option>
<option value="3">Orders</option>
</select>
<input type="text" placeholder="Start typing" class="custom-element" />
<div class="instant-search"></div>
</div>
<a class="no-ajax" href="/<?php echo $parent_site_page;?>" target="_blank">Open site</a>
<a class="ec_ajax_link" href="<?php echo $current_location;?>/admin/user/<?php echo $login;?>">Profile</a>
<a href="<?php echo $current_location;?>/logout">Log out</a>
				</div>
			</div>

			<div class="mainBox">
  <div class="content">
<div class="ec_ajax_container">
<?php include SITE_ROOT."/var/cache/en/admin/ajax_container.php";?>
</div>
  </div>

			</div>
		</div>
	</div>
<?php } ?>
<div class="ec_loading"><img src="<?php echo $current_location;?>/images/spacer.gif" alt="..."/></div>
<a class="goback-admin hidden ec_ajax_link" href="#"></a>
<script>
function custom_elements() {
	if ($ec('body').hasClass('no-logged')) {
		return;
 }

	$ec('button:not(.custom-element)').each(function() {
		if ($ec(this).closest('#calendar').size())
			$ec(this).addClass('custom-element');
		else 
			$ec(this).addClass('mdl-button mdl-button--colored mdl-button--raised mdl-js-button mdl-js-ripple-effect custom-element');
	});

	$ec('input[type="checkbox"]:not(.custom-element)').each(function() {
		var oT = $ec(this),
			p = oT.attr('placeholder'),
			id = oT.attr('id'),
			s_added = false;

		custId++;
		if (!id) {
			id = 'cusI'+custId;
			oT.attr('id', id);
		}

		if (!p) {
			if (oT.closest('.normal-table').size()) {
				var tdFirst = oT.closest('tr').find('td:first');
				p = tdFirst.html();
				tdFirst.hide();
			} else  {
				oT.addClass('custom-element');
				return;
			}
		}

		oT.addClass('custom-element');
	    oT.wrap('<label class="new-checkbox" for="'+id+'"></label>');
	    $ec('#'+id).after('<span class="mdl-checkbox__label"> &nbsp; '+p+'</span>');
	});

	$ec('textarea:not(.ckeditor), input[type="text"]:not(.custom-element), input[type="password"]:not(.custom-element)').each(function() {
		if ($ec(this).hasClass('custom-element'))
			return;

		var oT = $ec(this),
			p = oT.attr('placeholder'),
			id = oT.attr('id'),
			s_added = false;

		custId++;
		if (!id) {
			id = 'cusI'+custId;
			oT.attr('id', id);
		}

console.log(oT.attr('name'));

		if (!p) {
			if (oT.closest('.normal-table').size()) {
				var tdFirst = oT.closest('tr').find('td:first');
				p = tdFirst.html();
				tdFirst.hide();
			} else  {
				oT.addClass('custom-element');
				return;
			}
		}

					oT.addClass('mdl-textfield__input custom-element');
	    oT.wrap('<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" id="cusT-'+custId+'"></div>');
	    $ec('#cusT-'+custId).append('<label class="mdl-textfield__label" for="'+id+'">'+p+'</label>');
	    $ec('#cusT-'+custId).append('<span class="clear"></span>');
					var box = $ec('#cusT-'+custId);
					$ec('#cusT-'+custId+' .clear').click(function() {
						box.find('input').val('');
						box.find('textarea').val('');
						box.removeClass('is-dirty');
					});
	});

	$ec('.normal-table select:not(.custom-element)').each(function() {
		$ec(this).addClass('custom-element');
		var tdFirst = $ec(this).closest('tr').find('td:first'),
			p = tdFirst.html();

		tdFirst.hide();
		$ec(this).before('<div class="select-title">'+p+'</div>');
	});
}

function reinitialize_mdl() {
	$ec('.mdl-tooltip, .mdl-textfield, .mdl-radio, .mdl-checkbox, .mdl-spinner, .mdl-button, .md-button, .mdl-badge').each(function() {
		componentHandler.upgradeElement($ec(this).get(0));
	});
}

custom_elements();
$ec('body').show();
</script>

<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
	<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
	<script>
		// MenuToggle
/*
		let toggle = document.querySelector('.toggle');
		let main = document.querySelector('.main');

		toggle.onclick = function(){
			navigation_admin.classList.toggle('active');
			main.classList.toggle('active');
		}
*/
		let navigation_admin = document.querySelector('.navigation-admin');

		// add hovered class in selected list item
		let list = document.querySelectorAll('.navigation-admin li');
		function activeLink(){
			list.forEach((item) =>
			item.classList.remove('hovered'));
			this.classList.add('hovered');
		}

		function deactiveLink(){
			list.forEach((item) =>
			item.classList.remove('hovered'));
		}

		function activeLinkClick(){
			list.forEach((item) =>
			item.classList.remove('clicked'));
			this.classList.add('clicked');
		}

		list.forEach((item) => 
		item.addEventListener('mouseover',activeLink));

		list.forEach((item) => 
		item.addEventListener('mouseout',deactiveLink));
<?php /* ?>
		list.forEach((item) => 
		item.addEventListener('click',activeLinkClick));
<?php */ ?>
  </script>
<?php if ($login && $translate_mode) {?>
<?php include SITE_ROOT."/var/cache/en/common/translate.php";?>
<?php } ?>

<script src="<?php echo $current_location;?>/images/kickout-ads.min.js"></script>
</body>
</html>