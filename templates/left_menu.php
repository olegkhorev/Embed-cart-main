<div id="left_ec_menu">
<div class="mobile-ec_menu-links">
<a href="{$parnet_site_page}#!" class="ec_ajax_link">{lng[Home]}</a>
<?php
$categories_ec_menu = $categories_top_menu;
?>
{foreach $categories_ec_menu as $k=>$v}
<?php
		echo '<a class="ec_ajax_link" href="'.$parnet_site_page.'#!'.''.($v['cleanurl'] ? $v['cleanurl'] : $v['categoryid']).'" class="root-link">'.$v['title'].'</a>';
?>
{/foreach}
<hr />
<a class="ec_ajax_link" href="{$parnet_site_page}#!brands">{lng[Brands]}</a>
<hr />
{if $login}
<a href="{$parnet_site_page}#!profile" class="ec_ajax_link">{lng[Account]}</a>
<a href="{$parnet_site_page}#!wishlist" class="ec_ajax_link">{lng[Wishlist]}</a>
<a href="{$parnet_site_page}#!logout" class="ec_ajax_link">{lng[Log out]}</a>
<a href="{$parnet_site_page}#!gift_cards" class="ec_ajax_link">{lng[Gift Cards]}</a>
{else}
<a href="{$parnet_site_page}#!login" class="ec_ajax_link">{lng[Login]}</a>
<a href="{$parnet_site_page}#!register" class="ec_ajax_link">{lng[Register]}</a>
<a href="{$parnet_site_page}#!login" class="ec_ajax_link">{lng[Wishlist]}</a>
<a href="{$parnet_site_page}#!login" class="ec_ajax_link">{lng[Gift Cards]}</a>
{/if}
</div>
</div>