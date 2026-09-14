<div class="header desktop_head">
<div class="top-line">
<div class="free-shipping">
<?php /* ?>
<img src="/images/new/icons/shipping.png" alt="" />
<?php */ ?>
<svg><use xlink:href="/images/sprite.svg#delivery"></use></svg>
 Kostenloser Versand für Bestellungen über $100 (nur USA)</div>
<div class="social-icons">
<a href="http://facebook.com" target="_blank"><svg><use xlink:href="/images/sprite.svg#facebook"></use></svg></a>
<a href="http://twitter.com" target="_blank"><svg><use xlink:href="/images/sprite.svg#twitter"></use></svg></a>
<a href="http://facebook.com" target="_blank"><svg><use xlink:href="/images/sprite.svg#pin"></use></svg></a>
<?php /* ?>
<img src="/images/new/icons/social.png" alt="" />
<?php */ ?>
</div>
<div class="links">
<?php if ($login) {?>
<a href="/profile" onclick="javascript: return profile_popup(1);">Konto</a>
<a href="/wishlist" class="wishlist-link">Wunschzettel</a>
<a href="/logout">Abmelden</a>
<a href="/gift_cards" class="ajax_link">Geschenkkarten</a>
<?php } else  { ?>
<a href="/login" onclick="javascript: return login_popup();">Login</a>
<a href="/register" onclick="javascript: return register_popup();">Registrieren</a>
<a href="/login" onclick="javascript: return login_popup();">Wunschzettel</a>
<a href="/login" onclick="javascript: return login_popup();">Geschenkkarten</a>
<?php } ?>
</div>
<?php if ($languages) {?>
<div class="language_select">
Language:
<select>
<?php foreach ($languages as $c) {?>
<option value="<?php echo $c['id'];?>"<?php if ($current_language['id'] == $c['id'] || (!$current_language['id'] && $c['main'])) {?> selected<?php } ?>><?php echo $c['name'];?></option>
<?php } ?>
</select>
</div>
<?php } ?>

<?php if ($currencies) {?>
<div class="currency_select">
Währung:
<select>
<?php foreach ($currencies as $c) {?>
<option value="<?php echo $c['id'];?>"<?php if ($current_currency['id'] == $c['id'] || (!$current_currency['id'] && $c['main'])) {?> selected<?php } ?>><?php echo $c['code'];?></option>
<?php } ?>
</select>
</div>
<?php } ?>
</div>

<a href="/" class="logo-link"><img src="/images/new/logo_new.png" alt="" /></a>
<?php if ($mobile_link) {?>
<a class="mobile-version" href="<?php echo $mobile_link;?>">Mobile version</a>
<?php } ?>

<form method="POST" action="/search" id="searchform">
<div class="search">
<input type="text" name="substring" value="<?php if ($substring) {?><?php echo escape($substring, 2);; ?><?php } ?>" placeholder="Suche" autocomplete="off" />
<input type="image" src="<?php echo $current_location;?>/images/new/search.png"/>
<div class="instant-search"></div>
</div>
</form>

<div class="header-phone-email">
<?php /* ?>
<img src="/images/new/icons/phone.png" alt="Rufen Sie Uns An" /><?php */ ?>
<svg><use xlink:href="/images/sprite.svg#call"></use></svg>
 Rufen Sie Uns An <?php echo $config['Company']['company_phone'];?>
<a class="header-email ajax_link" class="parent-link" href="<?php if ($config['Tickets']['use_tickets']) {?>/support_desk<?php } else  { ?>/help<?php } ?>"><svg><use xlink:href="/images/sprite.svg#email"></use></svg><?php /* ?><img src="/images/new/icons/email.png" alt="E-Mail uns" /><?php */ ?> E-Mail uns</a>
</div>

<div class="menu-container">
<ul id="menu">
<?php if ($categories_top_menu) {?>
 <?php foreach ($categories_top_menu as $k=>$v) {?>
 <li id="menu-<?php echo $v['categoryid'];?>"<?php if ($v['categoryid'] == $parentid) {?> class="active"<?php } ?>><a class="parent-link" href="<?php echo $current_location;?>/<?php if ($v['cleanurl']) {?><?php echo $v['cleanurl'];?><?php } else  { ?><?php echo $v['categoryid'];?><?php } ?>"><?php echo $v['title'];?></a>
  <?php if ($v['subcategories']) {?>
  <ul>
   <?php foreach ($v['subcategories'] as $s) {?>
   <li><a href="<?php echo $current_location;?>/<?php if ($s['cleanurl']) {?><?php echo $s['cleanurl'];?><?php } else  { ?><?php echo $s['categoryid'];?><?php } ?>"><?php echo $s['title'];?></a>
	<?php if ($s['subcategories']) {?><div>
	 <?php foreach ($s['subcategories'] as $s2) {?>
<a href="<?php echo $current_location;?>/<?php if ($s2['cleanurl']) {?><?php echo $s2['cleanurl'];?><?php } else  { ?><?php echo $s2['categoryid'];?><?php } ?>"><?php echo $s2['title'];?></a>
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
  <li id="menu-brands"<?php if ($get['0'] == 'brands') {?> class="active"<?php } ?>><a class="parent-link" href="<?php echo $current_location;?>/brands">Marken</a>
<?php if ($brands_menu) {?>
<ul>
 <?php foreach ($brands_menu as $v) {?>
 <li><a href="<?php echo $current_location;?>/brands/<?php if ($v['cleanurl']) {?><?php echo $v['cleanurl'];?><?php } else  { ?><?php echo $v['brandid'];?><?php } ?>"><?php echo $v['name'];?></a></li>
 <?php } ?>
</ul>
<?php } ?>
  </li>
  <li id="menu-blog"<?php if ($get['0'] == 'blog') {?> class="active"<?php } ?>><a class="parent-link" href="<?php echo $current_location;?>/blog">Blog</a></li>
  <li id="menu-page"<?php if ($get['0'] == 'page') {?> class="active"<?php } ?>><a class="parent-link" href="/page/about.html">Über CMS</a>
<ul>
 <li><a href="<?php echo $current_location;?>/page/scripts-structure.html">Scripts structure</a></li>
 <li><a href="<?php echo $current_location;?>/page/templages-engine.html">Templates engine</a></li>
 <li><a href="<?php echo $current_location;?>/page/MySQL-standards.html">MySQL standards</a></li>
</ul>
  </li>
  <li id="menu-news"<?php if ($get['0'] == 'news') {?> class="active"<?php } ?>><a class="parent-link" href="/news">News</a>
</ul>
</div>

<div id="minicart">
<?php echo $minicart;?>
</div>
</div>

<div id="head_mobile">
<?php /* ?><div class="header-phone">Rufen Sie Uns An <?php echo $config['Company']['company_phone'];?></div><?php */ ?>
<div id="minicart">
<?php echo $minicart;?>
</div>

<div class="navigation-toggle"><div class="toggle-box"><div class="toggle-inner"></div></div></div>


<a href="/" class="logo-link"><img src="/images/new/logo_new.png" alt="" /></a>

<form method="POST" action="/search" id="searchform">
<div class="search">
<input type="text" name="substring" value="<?php if ($substring) {?><?php echo escape($substring, 2);; ?><?php } ?>" placeholder="Suche" autocomplete="off" />
<input type="image" src="<?php echo $current_location;?>/images/new/search.png"/>
<div class="instant-search"></div>
</div>
</form>

</div>