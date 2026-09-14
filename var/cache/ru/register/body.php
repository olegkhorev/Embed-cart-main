<h1>Регистрация</h1>
<center>
<table class="login_table">
<tr>
 <td valign="top">
<form name="register" method="POST" action="<?php echo $current_location;?>/<?php if ($get['0'] == 'register') {?>register<?php } else  { ?>profile<?php } ?>">
    <div class="group">
      <input class="firstname" maxlength="32" required type="text" name="firstname" value="<?php echo escape($userinfo['firstname'], 2);; ?>" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Имя</label>
    </div>

    <div class="group">
      <input maxlength="32" type="text" required name="lastname" value="<?php echo escape($userinfo['lastname'], 2);; ?>" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Фамилия</label>
    </div>

    <div class="group">
      <input type="text" name="email" required value="<?php echo escape($userinfo['email'], 2);; ?>" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Электронная почта</label>
    </div>
<div class="register-email-error">Этот email уже зарегистрирован <a href="<?php echo $parnet_site_page;?>#!login" class="ec_ajax_link">Войти</a></div>

    <div class="group">
      <input type="password" required name="password" value="" autocomplete="off" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Пароль</label>
    </div>

<?php if ($memberships) {?>
<?php $name="pending_membershipid"; $value = 0;; ?>
    <div class="group group-select">
 <label>Оформить членство:</label>
<?php include SITE_ROOT."/var/cache/ru/common/membership.php";?>
    </div>
<?php } ?>
<div align="center"><button type="button">Регистрация</button> &nbsp; <a href="<?php echo $parnet_site_page;?>#!login" class="ec_ajax_link main-button login-link">Вход</a></div>
</form>
 </td>
</tr>
</table>

</center>