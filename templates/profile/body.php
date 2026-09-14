<div class="tabs">
<a href="{$parnet_site_page}#!profile" class="ec_ajax_link {if $section != 'orders'} active{/if}">{lng[Your profile]}</a>
<a href="{$parnet_site_page}#!profile/orders" class="ec_ajax_link {if $section == 'orders'} active{/if}">{lng[Orders history]}</a>
</div>
<br />
{if $section == 'orders'}
 {if $orders}
<table cellspacing="15">
  {foreach $orders as $k=>$v}
<tr>
 <td><a href="{$parnet_site_page}#!invoice/{$v['orderid']}" class="ec_ajax_link">#{$v['orderid']}</a></td>
 <td><a href="{$parnet_site_page}#!invoice/{$v['orderid']}" class="ec_ajax_link">{$order_statuses[$v['status']]}</a></td>
 <td><a href="{$parnet_site_page}#!invoice/{$v['orderid']}" class="ec_ajax_link">{php echo date($datetime_format, $v['date']);}</a></td>
 <td><a href="{$parnet_site_page}#!invoice/{$v['orderid']}" class="ec_ajax_link">{price $v['total']}</a></td>
</tr>
  {/foreach}
</table>
 {else}
{lng[You have no orders yet.]}
 {/if}
{else}
<center>
<form method="post" action="{$current_location}/profile" name="user_form" class="material-form">
    <div class="group">
      <input type="text" name="posted_data[firstname]" required value="{php echo escape($userinfo['firstname'], 2);}" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>{lng[First name]}</label>
    </div>

    <div class="group">
      <input type="text" name="posted_data[lastname]" required value="{php echo escape($userinfo['lastname'], 2);}" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>{lng[Last name]}</label>
    </div>
    <div class="group">
      <input type="text" name="posted_data[phone]" required value="{php echo escape($userinfo['phone'], 2);}" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>{lng[Phone]}</label>
    </div>
    <div class="group">
      <input type="text" name="posted_data[email]" required value="{php echo escape($userinfo['email'], 2);}" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>{lng[Email]}</label>
    </div>
    <div class="group">
      <input type="password" name="password" value="" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>{lng[Password]}</label>
    </div>
    <div class="group">
      <input type="text" name="posted_data[address]" required value="{php echo escape($userinfo['address'], 2);}" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>{lng[Address]}</label>
    </div>

    <div class="group">
      <input type="text" name="posted_data[city]" required value="{php echo escape($userinfo['city'], 2);}" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>{lng[City]}</label>
    </div>
    <div class="group group-select  group-select-input">
<label>{lng[State]}:</label>
<div>
{php $found = false;}
{foreach $countries as $v}
 {if $v['code'] == $userinfo['country'] && $v['states']}
  {php $found = true;}
<select name="posted_data[state]" id="state">
  {foreach $v['states'] as $s}
 <option value="{$s['code']}"{if $s['code'] == $userinfo['state']} selected{/if}>{$s['state']}</option>
   {/foreach}
</select>
 {/if}
{/foreach}

{if !$found}
<input type="text" name="posted_data[state]" id="state" value="{php echo escape($userinfo['state'], 2);}" />
{/if}
</div>
    </div>

    <div class="group group-select">
 <label>{lng[Country]}:</label>
<select name="posted_data[country]" id="country">
{foreach $countries as $v}
 <option value="{$v['code']}"{if $v['code'] == $userinfo['country'] || (!$userinfo['country'] && $v['code'] == 'US')} selected{/if}>{$v['country']}</option>
{/foreach}
</select>
    </div>

    <div class="group">
      <input type="text" name="posted_data[zipcode]" required value="{php echo escape($userinfo['zipcode'], 2);}" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>{lng[Zip/Postal code]}</label>
    </div>

{if $memberships}
{if $userinfo['membershipid']}
    <div class="group">
      <input type="text" disabled value="{foreach $memberships as $v}{if $v['membershipid'] == $userinfo['membershipid']}{php echo escape($v['membership'], 2);}{/if}{/foreach}" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>{lng[Membership]}</label>
    </div>
{/if}

{php $name="pending_membershipid"; $value = $userinfo['pending_membershipid'];}
    <div class="group group-select">
 <label>{lng[Sign up for membership]}:</label>
{include="common/membership.php"}
    </div>
{/if}

<div align="center"><button>{lng[Save]}</button></div>
</form>
{/if}