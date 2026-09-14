<div class="ec_head-line">

<div class="ec_head-line-links">
{if $login}
<a href="{$parnet_site_page}#!wishlist" class="ec_ajax_link wishlist-link-force">{lng[Wishlist]}</a>
<a href="{$parnet_site_page}#!gift_cards" class="ec_ajax_link">{lng[Gift Cards]}</a>
<a href="{$parnet_site_page}#!profile" class="ec_ajax_link">{lng[Account]}</a>
<a href="{$parnet_site_page}#!logout" class="ec_ajax_link head-top-border-link">{lng[Log out]}</a>
{else}
<a href="{$parnet_site_page}#!login" class="ec_ajax_link">{lng[Wishlist]}</a>
<a href="{$parnet_site_page}#!login" class="ec_ajax_link">{lng[Gift Cards]}</a>
<a href="{$parnet_site_page}#!login" class="ec_ajax_link">{lng[Login]}</a>
<a href="{$parnet_site_page}#!register" class="ec_ajax_link head-top-border-link">{lng[Register]}</a>
{/if}
</div>

</div>


<div class="ec_header ec_desktop_head">
<div class="ec_menu-container">
<ul id="ec_menu">
 <li id="ec_menu-home"{if $get['0'] == 'home'} class="active"{/if}><a href="{$parnet_site_page}#!" class="parent-link">{lng[Home]}</a></li>
{if $categories_top_menu}
 {foreach $categories_top_menu as $k=>$v}
 <li id="ec_menu-{$v['categoryid']}"{if $v['categoryid'] == $parentid} class="active"{/if}><a class="parent-link" href="{$parnet_site_page}#!{if $v['cleanurl']}{$v['cleanurl']}{else}{$v['categoryid']}{/if}">{$v['title']}</a>
  {if $v['subcategories']}
{*<div class="subec_menu-fade"></div>*}
  <ul>
{*	<li class="top-part"></li>*}
   {foreach $v['subcategories'] as $s}
   <li><a href="{$parnet_site_page}#!/{if $s['cleanurl']}{$s['cleanurl']}{else}{$s['categoryid']}{/if}">{$s['title']}</a>
	{if $s['subcategories']}<div>
	 {foreach $s['subcategories'] as $s2}
<a href="{$parnet_site_page}#!/{if $s2['cleanurl']}{$s2['cleanurl']}{else}{$s2['categoryid']}{/if}">{$s2['title']}</a>
	 {/foreach}
	 </div>
	{/if}
   </li>
   {/foreach}
  </ul>
  {/if}
 </li>
 {/foreach}
{/if}
  <li id="ec_menu-brands"{if $get['0'] == 'brands'} class="active"{/if}><a class="parent-link" href="{$parnet_site_page}#!/brands">{lng[Brands]}</a>
{if $brands_menu}
<ul>
 {foreach $brands_menu as $v}
 <li><a href="{$parnet_site_page}#!/brands/{if $v['cleanurl']}{$v['cleanurl']}{else}{$v['brandid']}{/if}">{$v['name']}</a></li>
 {/foreach}
</ul>
{/if}
  </li>
{*
  <li id="ec_menu-blog"{if $get['0'] == 'blog'} class="active"{/if}><a class="parent-link" href="{$parnet_site_page}#!/blog">{lng[Blog]}</a></li>
  <li id="ec_menu-page"{if $get['0'] == 'page'} class="active"{/if}><a class="parent-link" href="{$parnet_site_page}#!page/about.html">{lng[About CMS]}</a>
<ul>
 <li><a href="{$parnet_site_page}#!/page/scripts-structure.html">Scripts structure</a></li>
 <li><a href="{$parnet_site_page}#!/page/templages-engine.html">Templates engine</a></li>
 <li><a href="{$parnet_site_page}#!/page/MySQL-standards.html">MySQL standards</a></li>
</ul>
  </li>
  <li id="ec_menu-news"{if $get['0'] == 'news'} class="active"{/if}><a class="parent-link" href="{$parnet_site_page}#!news">{lng[News]}</a>
*}
  <li class="search-dd"><img src="{$current_location}/images/search.png" alt="Поиск" width="20" /></svg>
<form method="POST" action="/search" class="searchform">
<div class="search">
<input type="text" name="substring" value="{if $substring}{php echo escape($substring, 2);}{/if}" placeholder="{lng[Search|escape]}" autocomplete="off" />
<input type="image" src="{$current_location}/images/spacer.gif"/>
<div class="instant-search"><div class='enter-3-chars'>{lng[Enter 2 characters]}</div></div>
</div>
</form>
  </li>
</ul>
</div>

<div class="ec_menu_right_part">
<div class="mrp-row mrp-row-cart">
<div id="ec_minicart">
{$minicart}
</div>
</div>

</div>
</div>

<div id="ec_head_mobile">
{*<div class="ec_header-phone">{lng[Call Us]} {$config['Company']['company_phone']}</div>*}
<div id="ec_minicart">
{$minicart}
</div>

<div class="navigation-toggle"><div class="toggle-box"><div class="toggle-inner"></div></div></div>

<form method="POST" action="/search" class="searchform">
<div class="search">
<input type="text" name="substring" value="{if $substring}{php echo escape($substring, 2);}{/if}" placeholder="{lng[Search|escape]}" autocomplete="off" />
<input type="image" src="{$current_location}/images/new/search.png"/>
<div class="instant-search"></div>
</div>
</form>

</div>