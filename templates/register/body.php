<h1>{lng[Register]}</h1>
<center>
<table class="login_table">
<tr>
 <td valign="top">
<form name="register" method="POST" action="{$current_location}/{if $get['0'] == 'register'}register{else}profile{/if}">
    <div class="group">
      <input class="firstname" maxlength="32" required type="text" name="firstname" value="{php echo escape($userinfo['firstname'], 2);}" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>{lng[First name]}</label>
    </div>

    <div class="group">
      <input maxlength="32" type="text" required name="lastname" value="{php echo escape($userinfo['lastname'], 2);}" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>{lng[Last name]}</label>
    </div>

    <div class="group">
      <input type="text" name="email" required value="{php echo escape($userinfo['email'], 2);}" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>{lng[Email]}</label>
    </div>
<div class="register-email-error">Этот email уже зарегистрирован <a href="{$parnet_site_page}#!login" class="ec_ajax_link">Войти</a></div>

    <div class="group">
      <input type="password" required name="password" value="" autocomplete="off" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>{lng[Password]}</label>
    </div>

{if $memberships}
{php $name="pending_membershipid"; $value = 0;}
    <div class="group group-select">
 <label>{lng[Sign up for membership]}:</label>
{include="common/membership.php"}
    </div>
{/if}
<div align="center"><button type="button">{lng[Register]}</button> &nbsp; <a href="{$parnet_site_page}#!login" class="ec_ajax_link main-button login-link">{lng[Login]}</a></div>
</form>
 </td>
</tr>
</table>

</center>