<div class="ec_page-container<?php if ($banners) {?> withbanners<?php } ?><?php if (($get['0'] == 'brands' && $get['1']) || $get['0'] == 'search' || $get['0'] == 'category') {?> ec_catalog-margin<?php } ?>">
<div class="withleftec_menu">
<div class="left_filter">
<h2>Narrow selection</h2>
<div id="left_filter">
<div class="cssload-container"><div class="cssload-speeding-wheel"></div></div>

</div>
</div>

<div class="main-container<?php if ($get['0'] == 'brands' && !$get['1']) {?> ec_brands-margin<?php } ?>">
<div class="filter_switcher"><img src="<?php echo $current_location;?>/images/filter.png" alt="" /></div>
<div id="bread_crumbs_container"><?php echo $bread_crumbs_html;?></div>

<div class="ec_content" align="left">
<?php if (false && !$no_left_ec_menu) {?>
<?php echo $left_ec_menu;;?>
<?php } ?>
	<div id="ec_center"<?php if (true || $no_left_ec_menu == 'Y') {?> class="no_left_ec_menu"<?php } ?>>
<?php echo $page;?>

<?php if ($recently && $get['0'] != 'checkout' && $config['General']['shop_closed'] != 'Y') {?>
<?php if ($get['0'] != 'product' && $get['0'] != 'home') {?>
</div></div>
<?php } ?>
</div>
</div>
<div class="ec_clear"></div>
</div>
<br /><br />
<div id="ec_home-tabs">
<ul class="ec_home-tabs">
 <li class="tab-1 active" data-tab="1">Recently viewed</li>
</ul>
</div>

<?php /* ?> Start page container <?php */ ?>
<div class="ec_page-container ec_page-container-2">
<div class="ec_content">
	<div id="ec_center" class="no_left_ec_menu">

 <?php $tag_id = "recently_viewed"; $products = $recently; $per_row = 4;; ?>
<div id="tab-7">
<div class="carousel-pr" id="carousel-5">
  <div class="controls">
    <div class="ec_button-left">
      <div class="ec_icon">
        <span></span>
      </div>
    </div>
    <div class="ec_button-right">
      <div class="ec_icon">
        <span></span>
      </div>
    </div>
  </div>
  <div class="ec_carousel-wrapper">
    <div class="ec_content-pr">
 <?php include SITE_ROOT."/var/cache/en/common/products.php";?>
     </div>
  </div>
</div>

</div>
<?php } ?>

	</div>
</div>

<div class="ec_clear"></div>
</div>
</div>
</div>
</div>
<div class="ec_clear"></div>
<?php if ($alerts) {?>
 <div class="alerts"><span onclick="javascript: $ec('.alerts').slideUp();"><b>X</b></span>
 <?php foreach ($alerts as $v) {?>
  <?php if ($v['type'] == 'e') {?><div class="error">Error: <?php echo $v['content'];?></div><?php } else  { ?><?php echo $v['content'];?><br><?php } ?><br>
 <?php } ?>
 </div>
<?php } ?>
