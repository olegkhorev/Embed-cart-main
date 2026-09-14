{*
<div style="opacity: 0;" id="embed_cart_unwrap">
*}
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<style type="text/css" media="all">
<?php
include SITE_ROOT.'/includes/css.php';
?>
</style>
{if $config['theme_color']}
<style id="custom_style">
:root {
	--theme-color: #{$config['theme_color']};
	--theme-color-2: #{$config['theme_color_2']};
}
</style>
{/if}

{*
<script src="https://js.stripe.com/v3/"></script>
*}
<script type="text/javascript">
var current_area = 'C',
	parnet_site_page = '{$parnet_site_page}',
	ec_page = '{$get['0']}',
	ec_this_page = '{$get['0']}',
	ec_parentid = '{$parentid}',
	ec_pageid = '{$brand['brandid']}',
	current_location = '{$current_location}',
	stripe_key = '{$stripe_pkey}',
	ajax_delimiter = '{$ajax_delimiter}',
	currency_symbol = '{$config['General']['currency_symbol']}',
	weight_symbol = '{$config['General']['weight_symbol']}',
	payment_currency = '{$payment_currency}',
	is_ajax_page = {php echo $is_ajax_page;},
	facebook_api = '{$current_protocol}://connect.facebook.net/en-en/all.js',
	twitter_api = '{$current_protocol}://platform.twitter.com/widgets.js',
	w_prices = [],
	ec_qadd = '',
	ec_oid = 0,
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

variants[0] = [];
variants[1] = [];
groups[0] = [];
groups[1] = [];
options[0] = [];
options[1] = [];
exceptions[0] = [];
exceptions[1] = [];
w_prices[0] = [];
w_prices[1] = [];

{if !$login}
var need_login = {if $_GET['mode'] == 'login'}1{else}0{/if};
{/if}
</script>

<script>
var ec_states = {ldelim}{rdelim};
	user_state = "{php echo escape($userinfo['state'], 2);}";

{foreach $countries as $v}
 {if $v['states']}
ec_states.{$v['code']} = {ec_states: []};
  {foreach $v['states'] as $k=>$s}
ec_states.{$v['code']}.ec_states[{$k}] = {code: "{php echo escape($s['code'], 2);}", state: "{php echo escape($s['state'], 2)}"};
  {/foreach}
 {/if}
{/foreach}
//alert(ec_states.US);
</script>

  <script src="https://js.braintreegateway.com/web/3.54.2/js/client.min.js"></script>
  <script src='https://js.braintreegateway.com/web/3.54.2/js/three-d-secure.js'></script>
  <script src="https://js.braintreegateway.com/web/3.54.2/js/hosted-fields.min.js"></script>

<div class="mobile-left_ec_menu">
{if $config['General']['shop_closed'] != 'Y'}
{include="left_menu.php"}
{/if}
</div>
<div class="mobile-ec_menu-fade"></div>
<div class="ec_loading-ec_header">
<div aria-busy="true" aria-label="Loading, please wait." role="progressbar"></div>
</div>

{if $config['General']['shop_closed'] != 'Y'}
<div id="ec_head">
{$head}
</div>
{/if}

<div class="ec_ajax_container area-c">
{include="ajax_container.php"}
</div>

<div class="ec_loading">
<div class="cssload-container"><div class="cssload-speeding-wheel"></div></div>
</div>
{if $config['General']['shop_closed'] != 'Y'}
{if $config['Design']['display_footer']}
<div id="ec_foot">
{$foot}
</div>
{/if}
{/if}

<?php
include SITE_ROOT.'/includes/js.php';
?>
<script>
var $ec = jQuery;
</script>
{*
<script src="http://connect.facebook.net/en-en/all.js"></script>
*}
{*
<img src="{$current_location}/images/scrolltop.png" alt="" id="scrolltop" />
*}
{if $config['Design']['design_theme_color']}
<?php
#exit($current_location.'-');
include SITE_ROOT.'/theme.php';
?>
{/if}

{if $login && $translate_mode}
{include="common/translate.php"}
{/if}

<script src="{$current_location}/images/kickout-ads.min.js"></script>
<script>
$ec('title').html("{php echo escape($page_title, 2)}");
$ec('meta[name="keywords"]').attr('content', "<?php if ($get['0'] == 'home' && lng('Homepage meta keywords')) echo escape(lng('Homepage meta keywords'), 2); elseif ($product['meta_keywords']) echo escape($product['meta_keywords'], 2); elseif ($category['meta_keywords']) echo escape($category['meta_keywords'], 2); elseif ($static_page['meta_keywords']) echo escape($static_page['meta_keywords'], 2); elseif ($brand['meta_keywords']) echo escape($brand['meta_keywords'], 2); else echo "";?>");
$ec('meta[name="description"]').attr('content', "<?php if ($get['0'] == 'home' && lng('Homepage meta description')) echo escape(lng('Homepage meta description'), 2); elseif ($product['meta_description']) echo escape($product['meta_description'], 2); elseif ($category['meta_description']) echo escape($category['meta_description'], 2); elseif ($static_page['meta_description']) echo escape($static_page['meta_description'], 2); elseif ($brand['meta_description']) echo escape($brand['meta_description'], 2); else echo "";?>");
</script>
{*
</div>
*}