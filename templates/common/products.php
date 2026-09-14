<div class="responsive-columns products"{if $tag_id} id="{$tag_id}"{/if}>
{foreach $products as $v}
<div class="ec_res-item">
<div class="res-ec_zoom">
{*
<div data-productid="{$v['productid']}" class="quick-look main-button">{lng[Quicklook]}</div>
*}
</div>
<div class="ec_photo">
{if $v['list_price'] > $v['price']}
<span class="ec_discount">
{php}
$percent = (($v['list_price'] - $v['price'])*100) / $v['list_price'];
echo '-'.round($percent).'%';
{/php}
</span>
{/if}

<a class="ec_save2wl" onclick="javascript: return {if $login}add_wishlist({$v['productid']});{else}ec_alert('{lng[Please login first]}');{/if}" href="javascript: void(0);"><img src="{$current_location}/images/favorite.png" width="23" alt="Добавить в избранное" /></a>

<a class="ec_ajax_link"{*{if $device != 'mobile'} title="Move product to cart to add it"{/if}*} href="{$parnet_site_page}#!/{if $v['cleanurl']}{$v['cleanurl']}.html{else}product/{$v['productid']}{/if}">
{if $v['photo']}
<?php
$image = $v['photo'];
$image['new_width'] = 234;
$image['class'] = 'product-image';
$image['id'] = 'pid-'.$v['productid'];
$image['new_height'] = 200;
$image['center'] = 1;
include SITE_ROOT . '/includes/image.php';
?>
{/if}
</a>
{*
{if $device != 'mobile'}
<span class="move2cart">{lng[Move me to cart]}</span>
{/if}
*}
</div>
 <div class="res-rating">
 <div class="rating-votes"><div style="width: {php func_average_rating($v)}%;"></div></div>
 </div>
 <div class="ec_res-name"><a class="ec_ajax_link" href="{$parnet_site_page}#!/{if $v['cleanurl']}{$v['cleanurl']}.html{else}product/{$v['productid']}{/if}">{$v['name']}</a></div>
 <div class="ec_res-price">
 {price $v['price']}
{if $v['list_price']}<s>{price $v['list_price']}</s>{/if}
 </div>
 <div class="ec_res-buttons">
{if $v['avail'] > 0}
<button id="pid{$v['productid']}"><span><img src="{$current_location}/images/spacer.gif" alt="Добавить в корзину" /></span>{lng[Add to cart]}</button>
{else}
<div class="out-of-stock">
Out of stock
</div>
{/if}
{*
<br />
<a class="main-button" onclick="javascript: return {if $login}add_wishlist({$v['productid']});{else}login_popup();{/if}" href="javascript: void(0);">{lng[Add to wishlist]}</a>
*}
 </div>
</div>
{/foreach}
</div>
<div class="ec_clear"></div>