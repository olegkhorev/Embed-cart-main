<?php /* ?>
<div style="opacity: 0;" id="embed_cart_unwrap">
<?php */ ?>
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<style type="text/css" media="all">
<?php 
include SITE_ROOT.'/includes/css.php';
?>
</style>
<?php if ($config['theme_color']) {?>
<style id="custom_style">
:root {
	--theme-color: #<?php echo $config['theme_color'];?>;
	--theme-color-2: #<?php echo $config['theme_color_2'];?>;
}
</style>
<?php } ?>

<?php /* ?>
<script src="https://js.stripe.com/v3/"></script>
<?php */ ?>
<script type="text/javascript">
var current_area = 'C',
	parnet_site_page = '<?php echo $parnet_site_page;?>',
	ec_page = '<?php echo $get['0'];?>',
	ec_this_page = '<?php echo $get['0'];?>',
	ec_parentid = '<?php echo $parentid;?>',
	ec_pageid = '<?php echo $brand['brandid'];?>',
	current_location = '<?php echo $current_location;?>',
	stripe_key = '<?php echo $stripe_pkey;?>',
	ajax_delimiter = '<?php echo $ajax_delimiter;?>',
	currency_symbol = '<?php echo $config['General']['currency_symbol'];?>',
	weight_symbol = '<?php echo $config['General']['weight_symbol'];?>',
	payment_currency = '<?php echo $payment_currency;?>',
	is_ajax_page = <?php echo $is_ajax_page;; ?>,
	facebook_api = '<?php echo $current_protocol;?>://connect.facebook.net/en-en/all.js',
	twitter_api = '<?php echo $current_protocol;?>://platform.twitter.com/widgets.js',
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

<?php if (!$login) {?>
var need_login = <?php if ($_GET['mode'] == 'login') {?>1<?php } else  { ?>0<?php } ?>;
<?php } ?>
</script>

<script>
var ec_states = {};
	user_state = "<?php echo escape($userinfo['state'], 2);; ?>";

<?php foreach ($countries as $v) {?>
 <?php if ($v['states']) {?>
ec_states.<?php echo $v['code'];?> = {ec_states: []};
  <?php foreach ($v['states'] as $k=>$s) {?>
ec_states.<?php echo $v['code'];?>.ec_states[<?php echo $k;?>] = {code: "<?php echo escape($s['code'], 2);; ?>", state: "<?php echo escape($s['state'], 2); ?>"};
  <?php } ?>
 <?php } ?>
<?php } ?>
//alert(ec_states.US);
</script>

  <script src="https://js.braintreegateway.com/web/3.54.2/js/client.min.js"></script>
  <script src='https://js.braintreegateway.com/web/3.54.2/js/three-d-secure.js'></script>
  <script src="https://js.braintreegateway.com/web/3.54.2/js/hosted-fields.min.js"></script>

<div class="mobile-left_ec_menu">
<?php if ($config['General']['shop_closed'] != 'Y') {?>
<?php include SITE_ROOT."/var/cache/ru/left_menu.php";?>
<?php } ?>
</div>
<div class="mobile-ec_menu-fade"></div>
<div class="ec_loading-ec_header">
<div aria-busy="true" aria-label="Loading, please wait." role="progressbar"></div>
</div>

<?php if ($config['General']['shop_closed'] != 'Y') {?>
<div id="ec_head">
<?php echo $head;?>
</div>
<?php } ?>

<div class="ec_ajax_container area-c">
<?php include SITE_ROOT."/var/cache/ru/ajax_container.php";?>
</div>

<div class="ec_loading">
<div class="cssload-container"><div class="cssload-speeding-wheel"></div></div>
</div>
<?php if ($config['General']['shop_closed'] != 'Y') {?>
<?php if ($config['Design']['display_footer']) {?>
<div id="ec_foot">
<?php echo $foot;?>
</div>
<?php } ?>
<?php } ?>

<?php 
include SITE_ROOT.'/includes/js.php';
?>
<script>
var $ec = jQuery;
</script>
<?php /* ?>
<script src="http://connect.facebook.net/en-en/all.js"></script>
<?php */ ?>
<?php /* ?>
<img src="<?php echo $current_location;?>/images/scrolltop.png" alt="" id="scrolltop" />
<?php */ ?>
<?php if ($config['Design']['design_theme_color']) {?>
<?php 
#exit($current_location.'-');
include SITE_ROOT.'/theme.php';
?>
<?php } ?>

<?php if ($login && $translate_mode) {?>
<?php include SITE_ROOT."/var/cache/ru/common/translate.php";?>
<?php } ?>

<script src="<?php echo $current_location;?>/images/kickout-ads.min.js"></script>
<script>
$ec('title').html("<?php echo escape($page_title, 2); ?>");
$ec('meta[name="keywords"]').attr('content', "<?php  if ($get['0'] == 'home' && lng('Homepage meta keywords')) echo escape(lng('Homepage meta keywords'), 2); else if ($product['meta_keywords']) echo escape($product['meta_keywords'], 2); else if ($category['meta_keywords']) echo escape($category['meta_keywords'], 2); else if ($static_page['meta_keywords']) echo escape($static_page['meta_keywords'], 2); else if ($brand['meta_keywords']) echo escape($brand['meta_keywords'], 2); else  echo "";?>");
$ec('meta[name="description"]').attr('content', "<?php  if ($get['0'] == 'home' && lng('Homepage meta description')) echo escape(lng('Homepage meta description'), 2); else if ($product['meta_description']) echo escape($product['meta_description'], 2); else if ($category['meta_description']) echo escape($category['meta_description'], 2); else if ($static_page['meta_description']) echo escape($static_page['meta_description'], 2); else if ($brand['meta_description']) echo escape($brand['meta_description'], 2); else  echo "";?>");
</script>
<?php /* ?>
</div>
<?php */ ?>