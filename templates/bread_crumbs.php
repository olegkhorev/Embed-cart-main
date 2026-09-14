{if count($bread_crumbs) > 1}
<div class="bread_crumbs">
{foreach $bread_crumbs as $k=>$v}
 {if $v['0']}
<a href="{$parnet_site_page}#!{$v['0']}">{$v['1']}</a>
 {else}
<span>{$v['1']}</span>
 {/if}
 {if $k != count($bread_crumbs) - 1} &raquo; {/if}
{/foreach}
</div>
{/if}