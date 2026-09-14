<div class="ec_foot">
<div id="ec_foot-subscribe">
<div class="ec_foot-subscribe">
<form method="POST" action="{$current_location}/subscribe" id="subsform">
<h4>{lng[Subscribe to news]}</h4>
<div id="ec_subscribe">
<input placeholder="{lng[Enter Email]}" type="text" id="sub-email" name="email" />
<button class="subscribe_button"></button>
</div>
</form>
</div>
</div>

 <ul class="ec_foot-ul-1">
  <li>{lng[Get in touch with us]}</li>
  <li>{lng[Phone]}: {$config['Company']['company_phone']}</li>
{if $config['Company']['company_phone_2']}
  <li>{lng[Phone #2]}: {$config['Company']['company_phone_2']}</li>
{/if}
{if $config['Company']['company_fax']}
  <li>{lng[Fax]}: {$config['Company']['company_fax']}</li>
{/if}
  <li><a href="{$parnet_site_page}#!help">{lng[Email us]}</a></li>
 </ul>
 <ul class="ec_foot-ul-2">
  <li>{lng[Quick links]}</li>
  <li><a href="{$parnet_site_page}#!">{lng[Home page]}</a></li>
  <li><a href="{$parnet_site_page}#!brands">{lng[Brands]}</a></li>
  <li><a href="{$parnet_site_page}#!page/about.html">{lng[About]}</a></li>
  <li><a href="{$parnet_site_page}#!page/terms-n-conditions.html">{lng[Terms & Conditions]}</a></li>
 </ul>

{if $categories_top_menu}
 <ul class="ec_foot-ul-3">
  <li>{lng[Categories]}</li>
 {foreach $categories_top_menu as $k=>$v}
 <li><a class="ec_ajax_link" href="{$parnet_site_page}#!{if $v['cleanurl']}{$v['cleanurl']}{else}{$v['categoryid']}{/if}">{$v['title']}</a></li>
 {/foreach}
 </ul>
{/if}
{*<img src="{$current_location}/images/new/logo_new.png" alt="" class="ec_foot-logo" />*}
{*<div class="social-icons"><img src="{$current_location}/images/social.png" alt="" /></div>*}

<div class="ec_clear"></div>
<hr />
{* <img src="{$current_location}/images/payment_methods.png" class="ec_foot-pm" alt="{lng[Payment methods]}" />*}
<span class="copyright">&copy; {if $config['Company']['start_year'] && $config['Company']['start_year'] != date('Y')}{$config['Company']['start_year']} - {/if}{php echo date('Y');}. Developer <a href="https://embed-cart.com/" class="no-ajax" target="_blank">Oleg Khorev</a></span>
</div>