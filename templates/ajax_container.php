<div class="ec_page-container{if $banners} withbanners{/if}{if ($get['0'] == 'brands' && $get['1']) || $get['0'] == 'search' || $get['0'] == 'category'} ec_catalog-margin{/if}">
<div class="withleftec_menu">
<div class="left_filter">
<h2>{lng[Narrow selection]}</h2>
<div id="left_filter">
<div class="cssload-container"><div class="cssload-speeding-wheel"></div></div>

</div>
</div>

<div class="main-container{if $get['0'] == 'brands' && !$get['1']} ec_brands-margin{/if}">
<div class="filter_switcher"><img src="{$current_location}/images/filter.png" alt="" /></div>
<div id="bread_crumbs_container">{$bread_crumbs_html}</div>

<div class="ec_content" align="left">
{if false && !$no_left_ec_menu}
{$left_ec_menu;}
{/if}
	<div id="ec_center"{if true || $no_left_ec_menu == 'Y'} class="no_left_ec_menu"{/if}>
{$page}

{if $recently && $get['0'] != 'checkout' && $config['General']['shop_closed'] != 'Y'}
{if $get['0'] != 'product' && $get['0'] != 'home'}
</div></div>
{/if}
</div>
</div>
<div class="ec_clear"></div>
</div>
<br /><br />
<div id="ec_home-tabs">
<ul class="ec_home-tabs">
 <li class="tab-1 active" data-tab="1">{lng[Recently viewed]}</li>
</ul>
</div>

{* Start page container *}
<div class="ec_page-container ec_page-container-2">
<div class="ec_content">
	<div id="ec_center" class="no_left_ec_menu">

 {php $tag_id = "recently_viewed"; $products = $recently; $per_row = 4;}
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
 {include="common/products.php"}
     </div>
  </div>
</div>

</div>
{/if}

	</div>
</div>

<div class="ec_clear"></div>
</div>
</div>
</div>
</div>
<div class="ec_clear"></div>
{if $alerts}
 <div class="alerts"><span onclick="javascript: $ec('.alerts').slideUp();"><b>X</b></span>
 {foreach $alerts as $v}
  {if $v['type'] == 'e'}<div class="error">Error: {$v['content']}</div>{else}{$v['content']}<br>{/if}<br>
 {/foreach}
 </div>
{/if}
