<div class="ec_head-line">

<div class="ec_head-line-links">
<?php if ($login) {?>
<a href="<?php echo $parnet_site_page;?>#!wishlist" class="ec_ajax_link wishlist-link-force">Желаемое</a>
<a href="<?php echo $parnet_site_page;?>#!gift_cards" class="ec_ajax_link">Подарочные карты</a>
<a href="<?php echo $parnet_site_page;?>#!profile" class="ec_ajax_link">Аккаунт</a>
<a href="<?php echo $parnet_site_page;?>#!logout" class="ec_ajax_link head-top-border-link">Выход</a>
<?php } else  { ?>
<a href="<?php echo $parnet_site_page;?>#!login" class="ec_ajax_link">Желаемое</a>
<a href="<?php echo $parnet_site_page;?>#!login" class="ec_ajax_link">Подарочные карты</a>
<a href="<?php echo $parnet_site_page;?>#!login" class="ec_ajax_link">Вход</a>
<a href="<?php echo $parnet_site_page;?>#!register" class="ec_ajax_link head-top-border-link">Регистрация</a>
<?php } ?>
</div>

</div>


<div class="ec_header ec_desktop_head">
<div class="ec_menu-container">
<ul id="ec_menu">
 <li id="ec_menu-home"<?php if ($get['0'] == 'home') {?> class="active"<?php } ?>><a href="<?php echo $parnet_site_page;?>#!" class="parent-link">Главная</a></li>
<?php if ($categories_top_menu) {?>
 <?php foreach ($categories_top_menu as $k=>$v) {?>
 <li id="ec_menu-<?php echo $v['categoryid'];?>"<?php if ($v['categoryid'] == $parentid) {?> class="active"<?php } ?>><a class="parent-link" href="<?php echo $parnet_site_page;?>#!<?php if ($v['cleanurl']) {?><?php echo $v['cleanurl'];?><?php } else  { ?><?php echo $v['categoryid'];?><?php } ?>"><?php echo $v['title'];?></a>
  <?php if ($v['subcategories']) {?>
<?php /* ?><div class="subec_menu-fade"></div><?php */ ?>
  <ul>
<?php /* ?>	<li class="top-part"></li><?php */ ?>
   <?php foreach ($v['subcategories'] as $s) {?>
   <li><a href="<?php echo $parnet_site_page;?>#!/<?php if ($s['cleanurl']) {?><?php echo $s['cleanurl'];?><?php } else  { ?><?php echo $s['categoryid'];?><?php } ?>"><?php echo $s['title'];?></a>
	<?php if ($s['subcategories']) {?><div>
	 <?php foreach ($s['subcategories'] as $s2) {?>
<a href="<?php echo $parnet_site_page;?>#!/<?php if ($s2['cleanurl']) {?><?php echo $s2['cleanurl'];?><?php } else  { ?><?php echo $s2['categoryid'];?><?php } ?>"><?php echo $s2['title'];?></a>
	 <?php } ?>
	 </div>
	<?php } ?>
   </li>
   <?php } ?>
  </ul>
  <?php } ?>
 </li>
 <?php } ?>
<?php } ?>
  <li id="ec_menu-brands"<?php if ($get['0'] == 'brands') {?> class="active"<?php } ?>><a class="parent-link" href="<?php echo $parnet_site_page;?>#!/brands">Бренды</a>
<?php if ($brands_menu) {?>
<ul>
 <?php foreach ($brands_menu as $v) {?>
 <li><a href="<?php echo $parnet_site_page;?>#!/brands/<?php if ($v['cleanurl']) {?><?php echo $v['cleanurl'];?><?php } else  { ?><?php echo $v['brandid'];?><?php } ?>"><?php echo $v['name'];?></a></li>
 <?php } ?>
</ul>
<?php } ?>
  </li>
<?php /* ?>
  <li id="ec_menu-blog"<?php if ($get['0'] == 'blog') {?> class="active"<?php } ?>><a class="parent-link" href="<?php echo $parnet_site_page;?>#!/blog">Блог</a></li>
  <li id="ec_menu-page"<?php if ($get['0'] == 'page') {?> class="active"<?php } ?>><a class="parent-link" href="<?php echo $parnet_site_page;?>#!page/about.html">CMS</a>
<ul>
 <li><a href="<?php echo $parnet_site_page;?>#!/page/scripts-structure.html">Scripts structure</a></li>
 <li><a href="<?php echo $parnet_site_page;?>#!/page/templages-engine.html">Templates engine</a></li>
 <li><a href="<?php echo $parnet_site_page;?>#!/page/MySQL-standards.html">MySQL standards</a></li>
</ul>
  </li>
  <li id="ec_menu-news"<?php if ($get['0'] == 'news') {?> class="active"<?php } ?>><a class="parent-link" href="<?php echo $parnet_site_page;?>#!news">Новости</a>
<?php */ ?>
  <li class="search-dd"><img src="<?php echo $current_location;?>/images/search.png" alt="Поиск" width="20" /></svg>
<form method="POST" action="/search" class="searchform">
<div class="search">
<input type="text" name="substring" value="<?php if ($substring) {?><?php echo escape($substring, 2);; ?><?php } ?>" placeholder="Поиск" autocomplete="off" />
<input type="image" src="<?php echo $current_location;?>/images/spacer.gif"/>
<div class="instant-search"><div class='enter-3-chars'>Введите 2 символа</div></div>
</div>
</form>
  </li>
</ul>
</div>

<div class="ec_menu_right_part">
<div class="mrp-row mrp-row-cart">
<div id="ec_minicart">
<?php echo $minicart;?>
</div>
</div>

</div>
</div>

<div id="ec_head_mobile">
<?php /* ?><div class="ec_header-phone">Свяжитесь с нами <?php echo $config['Company']['company_phone'];?></div><?php */ ?>
<div id="ec_minicart">
<?php echo $minicart;?>
</div>

<div class="navigation-toggle"><div class="toggle-box"><div class="toggle-inner"></div></div></div>

<form method="POST" action="/search" class="searchform">
<div class="search">
<input type="text" name="substring" value="<?php if ($substring) {?><?php echo escape($substring, 2);; ?><?php } ?>" placeholder="Поиск" autocomplete="off" />
<input type="image" src="<?php echo $current_location;?>/images/new/search.png"/>
<div class="instant-search"></div>
</div>
</form>

</div>