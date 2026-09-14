{if $banners}
{* Page container assign *}
</div>
</div>
<div class="ec_clear"></div>
</div>
</div></div>

<div class="banners-homepage{if count($banners) == 1} ec-one-banner{/if}">
{foreach $banners as $k=>$v}
<div id="hp_banner_{$k}" class="slide{if !$k} active{/if}">
{if $v['url']}
<a href="{php echo escape($v['url'], 2);}">
{/if}
<img src="{$current_location}/images/spacer.gif" class="hp-banner" style="background: url('{$v['image_url']}');" alt="{php echo escape($v['alt'], 2);}" />
{if $v['url']}
</a>
{/if}
</div>
{/foreach}
{if count($banners) > 1}
    <div class="arrow arrow-left">
    <span></span>
    </div>
    <div class="arrow arrow-right">
    <span></span>
    </div>
{/if}
</div>
{if $config['hp_boxes']}

<div class="ec-boxes-homepage-line">
<div class="ec-boxes-homepage">
 <div><h2>{$config['hp_box_1_title']}</h2><p>{php echo nl2br($config['hp_box_1_text']);}</p></div>
 <div><h2>{$config['hp_box_2_title']}</h2><p>{php echo nl2br($config['hp_box_2_text']);}</p></div>
 <div><h2>{$config['hp_box_3_title']}</h2><p>{php echo nl2br($config['hp_box_3_text']);}</p></div>
 <div><h2>{$config['hp_box_4_title']}</h2><p>{php echo nl2br($config['hp_box_4_text']);}</p></div>
 <div><h2>{$config['hp_box_5_title']}</h2><p>{php echo nl2br($config['hp_box_5_text']);}</p></div>
 <div><h2>{$config['hp_box_6_title']}</h2><p>{php echo nl2br($config['hp_box_6_text']);}</p></div>
</div>
</div>

<div class="clear"></div>
{/if}
{if strip_tags(lng('Site title'))}
<div class="ec_page-container ec_page-container-afterbanner">
<div class="ec_content">
	<div id="ec_center" class="no_left_ec_menu">
{/if}
{/if}

<div id="dcart"><img src="{$current_location}/images/dcart.png" alt="" /><br />{lng[Move product here]}</div>

{if strip_tags(lng('Site title'))}
<?php
if (lng('Site title'))
	echo "<br /><h1>".lng('Site title')."</h1>";

if (lng('Site description'))
	echo "<br /><p>".lng('Site description')."</p>";
?>
</div>
</div>
<div class="ec_clear"></div>
</div>
{/if}

<div id="ec_home-tabs">
<ul class="ec_home-tabs">
 <li class="tab-1 active" data-tab="1">{lng[Featured products]}</li>
</ul>
</div>

{* Start page container *}
<div class="ec_page-container ec_page-container-2">
<div class="ec_content">
	<div id="ec_center" class="no_left_ec_menu">

{if $featured_products}
 {php $tag_id = "featured_products"; $products = $featured_products; $per_row = 4;}
 {include="common/products.php"}
{/if}
