<div class="head-line">
<?php if ($languages) {?>
<div class="language_select">
<div>
<?php foreach ($languages as $c) {?>
<?php if ($current_language['id'] == $c['id'] || (!$current_language['id'] && $c['main'])) {?>
<img src="/images/flags/<?php echo $c['code'];?>.png" alt="" /> <?php echo $c['name'];?>
<?php } ?>
<?php } ?>
<ul>
<?php foreach ($languages as $c) {?>
<li><a href="javascript: void(0);" data-id="<?php echo $c['id'];?>"><img src="/images/flags/<?php echo $c['code'];?>.png" alt="" /> <?php echo $c['name'];?></a></li>
<?php } ?>
</ul>
</div>
<?php /* ?>
<select>
<?php foreach ($languages as $c) {?>
<option value="<?php echo $c['id'];?>"<?php if ($current_language['id'] == $c['id'] || (!$current_language['id'] && $c['main'])) {?> selected<?php } ?>><?php echo $c['name'];?></option>
<?php } ?>
</select>
<?php */ ?>
</div>
<?php } ?>

<?php if ($currencies) {?>
<div class="currency_select">
<div>
<?php foreach ($currencies as $c) {?>
<?php if ($current_currency['id'] == $c['id'] || (!$current_currency['id'] && $c['main'])) {?>
<?php echo $c['code'];?>
<?php } ?>
<?php } ?>
<ul>
<?php foreach ($currencies as $c) {?>
<li><a href="javascript: void(0);" data-id="<?php echo $c['id'];?>"><img src="/images/flags/<?php echo $c['code'];?>.png" alt="" /> <?php echo $c['code'];?></a></li>
<?php } ?>
</ul>
</div>
<?php /* ?>
<select>
<?php foreach ($currencies as $c) {?>
<option value="<?php echo $c['id'];?>"<?php if ($current_currency['id'] == $c['id'] || (!$current_currency['id'] && $c['main'])) {?> selected<?php } ?>><?php echo $c['code'];?></option>
<?php } ?>
</select>
<?php */ ?>
</div>
<?php } ?>

<div class="head-line-links">
<a class="header-email ajax_link" class="parent-link" href="<?php if ($config['Tickets']['use_tickets']) {?>/support_desk<?php } else  { ?>/help<?php } ?>"><svg><use xlink:href="/images/sprite.svg#email"></use></svg><?php /* ?><img src="/images/new/icons/email.png" alt="Écrivez-nous" /><?php */ ?> Écrivez-nous</a>
<?php if ($login) {?>
<a href="/profile" onclick="javascript: return profile_popup(1);">Compte</a>
<a href="/wishlist" class="wishlist-link">Wishlist</a>
<a href="/logout">Déconnecter</a>
<a href="/gift_cards" class="ajax_link">Les Cartes-Cadeaux</a>
<?php } else  { ?>
<a href="/login" onclick="javascript: return login_popup();">Connexion</a>
<a href="/register" onclick="javascript: return register_popup();">Registre</a>
<a href="/login" onclick="javascript: return login_popup();">Wishlist</a>
<a href="/login" onclick="javascript: return login_popup();">Les Cartes-Cadeaux</a>
<?php } ?>

<div>
<a class="parent-link" href="/page/about.html">Au sujet de la CMS</a>
<ul>
 <li><a href="<?php echo $current_location;?>/page/scripts-structure.html">Scripts structure</a></li>
 <li><a href="<?php echo $current_location;?>/page/templages-engine.html">Templates engine</a></li>
 <li><a href="<?php echo $current_location;?>/page/MySQL-standards.html">MySQL standards</a></li>
</ul>
</div>

</div>

</div>


<div class="header desktop_head">
<div class="top-line">
<div class="free-shipping">
<?php /* ?>
<img src="/images/new/icons/shipping.png" alt="" />
<?php */ ?>
<svg><use xlink:href="/images/sprite.svg#delivery"></use></svg>
 Livraison gratuite sur les commandes de plus de $100 (états-unis uniquement)</div>
<div class="social-icons">
<a href="http://facebook.com" target="_blank"><svg><use xlink:href="/images/sprite.svg#facebook"></use></svg></a>
<a href="http://twitter.com" target="_blank"><svg><use xlink:href="/images/sprite.svg#twitter"></use></svg></a>
<a href="http://facebook.com" target="_blank"><svg><use xlink:href="/images/sprite.svg#pin"></use></svg></a>
<?php /* ?>
<img src="/images/new/icons/social.png" alt="" />
<?php */ ?>
</div>
<div class="links">
</div>
</div>

<a href="/" class="logo-link"><img src="/images/new/logo_new.png" alt="" /></a>
<?php if ($mobile_link) {?>
<a class="mobile-version" href="<?php echo $mobile_link;?>">Mobile version</a>
<?php } ?>

<form method="POST" action="/search" id="searchform">
<div class="search">
<input type="text" name="substring" value="<?php if ($substring) {?><?php echo escape($substring, 2);; ?><?php } ?>" placeholder="Recherche" autocomplete="off" />
<input type="image" src="<?php echo $current_location;?>/images/new/search.png"/>
<div class="instant-search"></div>
</div>
</form>

<div class="header-phone-email">
<?php /* ?>
<img src="/images/new/icons/phone.png" alt="Appelez-Nous" /><?php */ ?>
<svg><use xlink:href="/images/sprite.svg#call"></use></svg>
 Appelez-Nous <?php echo $config['Company']['company_phone'];?>
<a class="header-email ajax_link" class="parent-link" href="<?php if ($config['Tickets']['use_tickets']) {?>/support_desk<?php } else  { ?>/help<?php } ?>"><svg><use xlink:href="/images/sprite.svg#email"></use></svg><?php /* ?><img src="/images/new/icons/email.png" alt="Écrivez-nous" /><?php */ ?> Écrivez-nous</a>
</div>

<div class="menu-container">
<ul id="menu">
<?php if ($categories_top_menu) {?>
 <?php foreach ($categories_top_menu as $k=>$v) {?>
 <li id="menu-<?php echo $v['categoryid'];?>"<?php if ($v['categoryid'] == $parentid) {?> class="active"<?php } ?>><a class="parent-link" href="<?php echo $current_location;?>/<?php if ($v['cleanurl']) {?><?php echo $v['cleanurl'];?><?php } else  { ?><?php echo $v['categoryid'];?><?php } ?>"><?php echo $v['title'];?></a>
  <?php if ($v['subcategories']) {?>
<?php /* ?><div class="submenu-fade"></div><?php */ ?>
  <ul>
<?php /* ?>	<li class="top-part"></li><?php */ ?>
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
  <li id="menu-brands"<?php if ($get['0'] == 'brands') {?> class="active"<?php } ?>><a class="parent-link" href="<?php echo $current_location;?>/brands">Marques</a>
<?php if ($brands_menu) {?>
<ul>
 <?php foreach ($brands_menu as $v) {?>
 <li><a href="<?php echo $current_location;?>/brands/<?php if ($v['cleanurl']) {?><?php echo $v['cleanurl'];?><?php } else  { ?><?php echo $v['brandid'];?><?php } ?>"><?php echo $v['name'];?></a></li>
 <?php } ?>
</ul>
<?php } ?>
  </li>
  <li id="menu-blog"<?php if ($get['0'] == 'blog') {?> class="active"<?php } ?>><a class="parent-link" href="<?php echo $current_location;?>/blog">Blog</a></li>
  <li id="menu-page"<?php if ($get['0'] == 'page') {?> class="active"<?php } ?>><a class="parent-link" href="/page/about.html">Au sujet de la CMS</a>
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
<?php /* ?><div class="header-phone">Appelez-Nous <?php echo $config['Company']['company_phone'];?></div><?php */ ?>
<div id="minicart">
<?php echo $minicart;?>
</div>

<div class="navigation-toggle"><div class="toggle-box"><div class="toggle-inner"></div></div></div>


<a href="/" class="logo-link"><img src="/images/new/logo_new.png" alt="" /></a>

<form method="POST" action="/search" id="searchform">
<div class="search">
<input type="text" name="substring" value="<?php if ($substring) {?><?php echo escape($substring, 2);; ?><?php } ?>" placeholder="Recherche" autocomplete="off" />
<input type="image" src="<?php echo $current_location;?>/images/new/search.png"/>
<div class="instant-search"></div>
</div>
</form>

</div>