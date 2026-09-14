<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8" />

<link rel="shortcut icon" href="{$current_location}/favicon.png" type="image/vnd.microsoft.icon" />
<title><?php echo $head_title; ?></title>

<link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
{*
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
*}
<link rel="stylesheet" href="{$current_location}/materialize/material.orange-amber.min.css" />
<link rel="stylesheet" href="{$current_location}/images/bootstrap-datepicker.standalone.css" />
<script defer src="{$current_location}/materialize/material.min.js"></script>
<script defer src="{$current_location}/images/chart.umd.js"></script>

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
	ec_page = '<?php echo $get['1']; ?>',
	ec_this_page = '<?php echo $get['1']; ?>',
	ec_pageid = '',
	browser = <?php echo $browser; ?>,
	stripe_key = '{$stripe_pkey}',
	current_location = '<?php echo $current_location;?>',
	ajax_delimiter = '<?php echo $ajax_delimiter; ?>',
	currency_symbol = '{$config['General']['currency_symbol']}',
	weight_symbol = '{$config['General']['weight_symbol']}',
	payment_currency = '{$payment_currency}',
	is_ajax_page = {php echo $is_ajax_page;},
	facebook_api = '{$current_protocol}://connect.facebook.net/en-en/all.js',
	twitter_api = '{$current_protocol}://platform.twitter.com/widgets.js',
	ec_states = [],
	w_prices = [],
	ec_qadd = '',
	ec_oid = 0,
	parent_site_page = '{$parnet_site_page}',
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

{if !$login}
var need_login = {if $_GET['mode'] == 'login'}1{else}0{/if};
{/if}

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
<script src="{$current_location}/ckeditor/ckeditor.js"></script>

<?php
if (!empty($js)) {
	include 'includes/js.php';
}
?>
<script src="{$current_location}/images/bootstrap-datepicker.min.js"></script>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/themes/smoothness/jquery-ui.css" />
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/jquery-ui.min.js"></script>
<script src="{$current_location}/images/jquery.flot.js"></script>
<script src="{$current_location}/images/jquery.flot.time.js"></script>
</head>
<body class="admin-area{if !$login} no-logged{/if}">
  <?php
	if ($alerts) {
		echo '<div class="alerts"><span class="close-alerts"><b>X</b> Close</span>';
		foreach ($alerts as $v) {
			if ($v['type'] == 'e') {
?>
<div class="error">{lng[Error]}:
<?php
				echo ' '.$v['content'].'</div>';
			} else {
				echo ' '.$v['content'].'<br>';
			}

			echo '<br>';
		}

		echo '</div>';
	}
  ?>

{if !$login}
{include="admin/pages/login_new.php"}
{else}

	<div class="container">
		<div class="navigation-admin">
{if $login && $userinfo['usertype'] == 'A'}
			<ul>
				<li>
					<a href="{$current_location}/" class="logo-link no-ajax" target="_blank">
						<span class="icon"><img src="{$current_location}/images/logo_admin.png" alt="" /></span>
						<span class="title">Embed-Cart</span>
					</a>
				</li>
				<li>
					<a href="{$current_location}/admin">
						<span class="icon"><ion-icon name="home-outline"></ion-icon></span>
						<span class="title">{lng[Dashboard]}</span>
					</a>
				</li>
{if $allow_pages['pages_1']['allow']}
				<li>
					<a href="javascript: void(0);" class="no-ajax">
						<span class="icon"><ion-icon name="bag-handle-outline"></ion-icon></span>
						<span class="title">{lng[Orders and discounts]}</span>
					</a>
<div>
{if in_array('orders', $allow_pages_ids) || $root_admin}
<a href="{$current_location}/admin/orders/recent">{lng[Recent orders]}</a>
{/if}
{if in_array('orders', $allow_pages_ids) || $root_admin}
<a href="{$current_location}/admin/orders">{lng[Search orders]}</a>
<a href="{$current_location}/admin/statistic">{lng[Statistic]}</a>
{/if}
{if in_array('coupons', $allow_pages_ids) || $root_admin}
<a href="{$current_location}/admin/coupons">{lng[Discount coupons]}</a>
{/if}
{if in_array('gift_cards', $allow_pages_ids) || $root_admin}
<a href="{$current_location}/admin/gift_cards">{lng[Gift Cards]}</a>
{/if}
</div>
 </li>
{/if}

{if $allow_pages['pages_2']['allow']}
				<li>
					<a href="javascript: void(0);" class="no-ajax">
						<span class="icon"><ion-icon name="people-outline"></ion-icon></span>
						<span class="title">{lng[Users]}</span>
					</a>
<div>
{if in_array('users', $allow_pages_ids) || $root_admin}
<a href="{$current_location}/admin/users">{lng[Browse users]}</a>
{/if}
{if in_array('users', $allow_pages_ids) || $root_admin}
<a href="{$current_location}/admin/user/new">{lng[Create new user]}</a>
{/if}
{if in_array('memberships', $allow_pages_ids) || $root_admin}
<a href="{$current_location}/admin/memberships">{lng[Membership levels]}</a>
{/if}
{if $root_admin}
<a href="{$current_location}/admin/roles">{lng[Roles]}</a>
{/if}
</div>
				</li>
{/if}

{if $allow_pages['pages_3']['allow']}
 <li>
					<a href="javascript: void(0);" class="no-ajax">
						<span class="icon"><ion-icon name="apps-outline"></ion-icon></span>
						<span class="title">{lng[Catalog]}</span>
					</a>
<div>
{if in_array('products', $allow_pages_ids) || $root_admin}
<a href="{$current_location}/admin/products">{lng[Products]}</a>
{/if}
{if in_array('products', $allow_pages_ids) || $root_admin}
<a href="{$current_location}/admin/products/add">{lng[Add new product]}</a>
{/if}
{if in_array('reviews', $allow_pages_ids) || $root_admin}
<a href="{$current_location}/admin/reviews">{lng[Reviews]}</a>
{/if}
{if in_array('categories', $allow_pages_ids) || $root_admin}
<a href="{$current_location}/admin/categories">{lng[Categories]}</a>
{/if}
{if in_array('brands', $allow_pages_ids) || $root_admin}
<a href="{$current_location}/admin/brands">{lng[Brands]}</a>
{/if}
{if in_array('import', $allow_pages_ids) || $root_admin}
<a href="{$current_location}/admin/import">{lng[Import catalog]}</a>
{/if}
{if in_array('export', $allow_pages_ids) || $root_admin}
<a href="{$current_location}/admin/export">{lng[Export catalog]}</a>
{/if}
</div>
 </li>
{/if}

{if $allow_pages['pages_4']['allow']}
 <li>
					<a href="javascript: void(0);" class="no-ajax">
						<span class="icon"><ion-icon name="copy-outline"></ion-icon></span>
						<span class="title">{lng[Content]}</span>
					</a>
<div>
{if in_array('subscribtions', $allow_pages_ids) || $root_admin}
<a href="{$current_location}/admin/subscribtions">{lng[Newsletter]}</a>
{/if}
{if in_array('pages', $allow_pages_ids) || $root_admin}
<a href="{$current_location}/admin/pages">{lng[Static pages]}</a>
{/if}
{if in_array('homepage', $allow_pages_ids) || $root_admin}
<a href="{$current_location}/admin/homepage">{lng[Homepage]}</a>
{/if}
</div>
 </li>
{/if}
{if $allow_pages['pages_5']['allow']}
 <li>
					<a href="javascript: void(0);" class="no-ajax">
						<span class="icon"><ion-icon name="card-outline"></ion-icon></span>
						<span class="title">{lng[Shipping and payment]}</span>
					</a>
<div>
{if in_array('shipping', $allow_pages_ids) || $root_admin}
<a href="{$current_location}/admin/shipping">{lng[Shipping methods]}</a>
{/if}
{if in_array('shipping_charges', $allow_pages_ids) || $root_admin}
<a href="{$current_location}/admin/shipping_charges">{lng[Shipping charges]}</a>
{/if}
{if in_array('payment', $allow_pages_ids) || $root_admin}
<a href="{$current_location}/admin/payment">{lng[Payment methods]}</a>
{/if}
{if in_array('taxes', $allow_pages_ids) || $root_admin}
<a href="{$current_location}/admin/taxes">{lng[Taxes]}</a>
{/if}
{if in_array('zones', $allow_pages_ids) || $root_admin}
<a href="{$current_location}/admin/zones">{lng[Destination zones]}</a>
{/if}
{if in_array('countries', $allow_pages_ids) || $root_admin}
<a href="{$current_location}/admin/countries">{lng[Countries/States]}</a>
{/if}
</div>
 </li>
{/if}

{if $allow_pages['pages_6']['allow']}
 <li>
					<a href="javascript: void(0);" class="no-ajax">
						<span class="icon"><ion-icon name="settings-outline"></ion-icon></span>
						<span class="title">{lng[Configuration]}</span>
					</a>
<div>
{if in_array('configuration', $allow_pages_ids) || $root_admin}
<a href="{$current_location}/admin/configuration/General">{lng[General settings]}</a>
{/if}
{if in_array('configuration', $allow_pages_ids) || $root_admin}
<a href="{$current_location}/admin/configuration/Company">{lng[Company information]}</a>
{/if}
{*
{if in_array('configuration', $allow_pages_ids) || $root_admin}
<a href="{$current_location}/admin/configuration/CDek">{lng[CDek]}</a>
{/if}
*}
{if in_array('configuration', $allow_pages_ids) || $root_admin}
<a href="{$current_location}/admin/configuration/Design">{lng[Design]}</a>
{/if}
{if in_array('language', $allow_pages_ids) || $root_admin}
<a href="{$current_location}/admin/language">{lng[Languages]}</a>
{/if}
{if in_array('currencies', $allow_pages_ids) || $root_admin}
<a href="{$current_location}/admin/currencies">{lng[Currencies]}</a>
{/if}
</div>
 </li>
{/if}


{if $allow_pages['pages_7']['allow']}
 <li>
					<a href="javascript: void(0);" class="no-ajax">
						<span class="icon"><ion-icon name="people-circle-outline"></ion-icon></span>
						<span class="title">{lng[Support desk]}</span>
					</a>
<div>
{if in_array('support_desk', $allow_pages_ids) || $root_admin}
<a href="{$current_location}/admin/support_desk">{lng[Support desk]}</a>
{/if}
{if in_array('configuration', $allow_pages_ids) || $root_admin}
<a href="{$current_location}/admin/configuration/Tickets">{lng[Support desk settings]}</a>
{/if}
</div>
 </li>
{/if}
 </li>
{if $allow_pages['pages_8']['allow']}
 <li>
					<a href="javascript: void(0);" class="no-ajax">
						<span class="icon"><ion-icon name="search-circle-outline"></ion-icon></span>
						<span class="title">{lng[SEO]}</span>
					</a>
<div>
{if in_array('sitemap', $allow_pages_ids) || $root_admin}
<a href="{$current_location}/admin/sitemap">{lng[Google Sitemap]}</a>
{/if}
</div>
 </li>
{/if}
{else}
{/if}
			</ul>
		</div>

		<!-- main -->
		<div class="main">
			<div class="topbar">
{*
				<div class="toggle">
					<ion-icon name="menu-outline"></ion-icon>
				</div>
*}
				<div class="header-links">
<div id="quick_search_form">
<label>{lng[Search]}: </label>
<select>
<option value="1">{lng[Products]}</option>
<option value="2">{lng[Customers]}</option>
<option value="3">{lng[Orders]}</option>
</select>
<input type="text" placeholder="Start typing" class="custom-element" />
<div class="instant-search"></div>
</div>
<a class="no-ajax" href="/{$parent_site_page}" target="_blank">{lng[Open site]}</a>
<a class="ec_ajax_link" href="{$current_location}/admin/user/{$login}">{lng[Profile]}</a>
<a href="{$current_location}/logout">{lng[Log out]}</a>
				</div>
			</div>

			<div class="mainBox">
  <div class="content">
<div class="ec_ajax_container">
{include="admin/ajax_container.php"}
</div>
  </div>

			</div>
		</div>
	</div>
{/if}
<div class="ec_loading"><img src="{$current_location}/images/spacer.gif" alt="..."/></div>
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
			} else {
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
			} else {
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
{*
		list.forEach((item) => 
		item.addEventListener('click',activeLinkClick));
*}
  </script>
{if $login && $translate_mode}
{include="common/translate.php"}
{/if}

<script src="{$current_location}/images/kickout-ads.min.js"></script>
</body>
</html>