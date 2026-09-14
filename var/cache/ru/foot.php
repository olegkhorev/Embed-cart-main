<div class="ec_foot">
<div id="ec_foot-subscribe">
<div class="ec_foot-subscribe">
<form method="POST" action="<?php echo $current_location;?>/subscribe" id="subsform">
<h4>Подписка на новости</h4>
<div id="ec_subscribe">
<input placeholder="Введите Email" type="text" id="sub-email" name="email" />
<button class="subscribe_button"></button>
</div>
</form>
</div>
</div>

 <ul class="ec_foot-ul-1">
  <li>Свяжитесь с нами</li>
  <li>Телефон: <?php echo $config['Company']['company_phone'];?></li>
<?php if ($config['Company']['company_phone_2']) {?>
  <li>Телефон #2: <?php echo $config['Company']['company_phone_2'];?></li>
<?php } ?>
<?php if ($config['Company']['company_fax']) {?>
  <li>Факс: <?php echo $config['Company']['company_fax'];?></li>
<?php } ?>
  <li><a href="<?php echo $parnet_site_page;?>#!help">Помощь</a></li>
 </ul>
 <ul class="ec_foot-ul-2">
  <li>Быстрые ссылки</li>
  <li><a href="<?php echo $parnet_site_page;?>#!">Домашняя страница</a></li>
  <li><a href="<?php echo $parnet_site_page;?>#!brands">Бренды</a></li>
  <li><a href="<?php echo $parnet_site_page;?>#!page/about.html">О сайте</a></li>
  <li><a href="<?php echo $parnet_site_page;?>#!page/terms-n-conditions.html">Правила и условия</a></li>
 </ul>

<?php if ($categories_top_menu) {?>
 <ul class="ec_foot-ul-3">
  <li>Категории</li>
 <?php foreach ($categories_top_menu as $k=>$v) {?>
 <li><a class="ec_ajax_link" href="<?php echo $parnet_site_page;?>#!<?php if ($v['cleanurl']) {?><?php echo $v['cleanurl'];?><?php } else  { ?><?php echo $v['categoryid'];?><?php } ?>"><?php echo $v['title'];?></a></li>
 <?php } ?>
 </ul>
<?php } ?>
<?php /* ?><img src="<?php echo $current_location;?>/images/new/logo_new.png" alt="" class="ec_foot-logo" /><?php */ ?>
<?php /* ?><div class="social-icons"><img src="<?php echo $current_location;?>/images/social.png" alt="" /></div><?php */ ?>

<div class="ec_clear"></div>
<hr />
<?php /* ?> <img src="<?php echo $current_location;?>/images/payment_methods.png" class="ec_foot-pm" alt="Способы оплаты" /><?php */ ?>
<span class="copyright">&copy; <?php if ($config['Company']['start_year'] && $config['Company']['start_year'] != date('Y')) {?><?php echo $config['Company']['start_year'];?> - <?php } ?><?php echo date('Y');; ?>. Разработчик <a href="https://embed-cart.com/" class="no-ajax" target="_blank">Олег Хорев</a></span>
</div>