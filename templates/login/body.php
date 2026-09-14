<h1>{lng[Login to account]}</h1>
<br />
<table class="login_table">
<tr>
 <td valign="top">
<form name="login" method="POST" action="{$current_location}/login">

    <div class="group">
      <input class="email" required type="text" name="email" value="{if $_POST['email']}{php echo escape($_POST['email'], 2);}{/if}" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>{lng[Email]}</label>
    </div>
<div class="register-email-error">Этот email не зарегистрирован <a href="{$parnet_site_page}#!register" onclick="return register_popup();" class="register ajax_mobile_link">Регистрация</a></div>
    <div class="group">
      <input type="password" required name="password" value="" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>{lng[Password]}</label>
    </div>
<div class="register-email-error-2">Пароль не верене. <a href="javascript: void(0);" onclick="return restore_password()">Восстановить пароль</a></div>

<button type="button">{lng[Login]}</button> &nbsp; <a href="{$parnet_site_page}#!register" class="ec_ajax_link main-button login-link">{lng[Register]}</a></div>
<br /><br />
<a href="javascript: void(0);" class="main-button nowrap" onclick="return restore_password()">{lng[Password recovery]}</a></td>
</form>
 </td>
</tr>
</table>
<div class="ec_clear"></div>