{if $products}
<table>
{foreach $products as $v}
<tr>
 <td class="ec_photo"><a class="ec_ajax_link" href="{$parnet_site_page}#!{if $v['cleanurl']}{$v['cleanurl']}.html{else}product/{$v['productid']}{/if}">
{if $v['photo']}
<?php
$image = $v['photo'];
$image['new_width'] = 40;
$image['class'] = 'product-image';
$image['id'] = 'pid-'.$v['productid'];
$image['new_height'] = 40;
$image['center'] = 1;
include SITE_ROOT . '/includes/image.php';
?>
{/if}
</a>
 </td>
 <td class="ec_res-name"><a class="ec_ajax_link" href="{$parnet_site_page}#!{if $v['cleanurl']}{$v['cleanurl']}.html{else}product/{$v['productid']}{/if}">{$v['name']}</a>
<p>{price $v['price']}</p>
 </td>
</tr>
{/foreach}
</table>
{if $total_items > 10}
<div class="more-no-search submitsearch">{lng[And more]}</div>
{/if}
{else}
<div class="more-no-search">{lng[No products found]}</div>
{/if}