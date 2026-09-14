<h1>Вход в аккаунт</h1>
<br />
<table class="login_table">
<tr>
 <td valign="top">
<form name="login" method="POST" action="<?php echo $current_location;?>/login">

    <div class="group">
      <input class="email" required type="text" name="email" value="<?php if ($_POST['email']) {?><?php echo escape($_POST['email'], 2);; ?><?php } ?>" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Электронная почта</label>
    </div>
<div class="register-email-error">Этот email не зарегистрирован <a href="<?php echo $parnet_site_page;?>#!register" onclick="return register_popup();" class="register ajax_mobile_link">Регистрация</a></div>
    <div class="group">
      <input type="password" required name="password" value="" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Пароль</label>
    </div>
<div class="register-email-error-2">Пароль не верене. <a href="javascript: void(0);" onclick="return restore_password()">Восстановить пароль</a></div>

<button type="button">Вход</button> &nbsp; <a href="<?php echo $parnet_site_page;?>#!register" class="ec_ajax_link main-button login-link">Регистрация</a></div>
<br /><br />
<a href="javascript: void(0);" class="main-button nowrap" onclick="return restore_password()">Восстановление пароля </a></td>
</form>
 </td>
</tr>
</table>
<div class="ec_clear"></div>