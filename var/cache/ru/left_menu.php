<div id="left_ec_menu">
<div class="mobile-ec_menu-links">
<a href="<?php echo $parnet_site_page;?>#!" class="ec_ajax_link">Главная</a>
<?php 
$categories_ec_menu = $categories_top_menu;
?>
<?php foreach ($categories_ec_menu as $k=>$v) {?>
<?php 
		echo '<a class="ec_ajax_link" href="'.$parnet_site_page.'#!'.''.($v['cleanurl'] ? $v['cleanurl'] : $v['categoryid']).'" class="root-link">'.$v['title'].'</a>';
?>
<?php } ?>
<hr />
<a class="ec_ajax_link" href="<?php echo $parnet_site_page;?>#!brands">Бренды</a>
<hr />
<?php if ($login) {?>
<a href="<?php echo $parnet_site_page;?>#!profile" class="ec_ajax_link">Аккаунт</a>
<a href="<?php echo $parnet_site_page;?>#!wishlist" class="ec_ajax_link">Желаемое</a>
<a href="<?php echo $parnet_site_page;?>#!logout" class="ec_ajax_link">Выход</a>
<a href="<?php echo $parnet_site_page;?>#!gift_cards" class="ec_ajax_link">Подарочные карты</a>
<?php } else  { ?>
<a href="<?php echo $parnet_site_page;?>#!login" class="ec_ajax_link">Вход</a>
<a href="<?php echo $parnet_site_page;?>#!register" class="ec_ajax_link">Регистрация</a>
<a href="<?php echo $parnet_site_page;?>#!login" class="ec_ajax_link">Желаемое</a>
<a href="<?php echo $parnet_site_page;?>#!login" class="ec_ajax_link">Подарочные карты</a>
<?php } ?>
</div>
</div>