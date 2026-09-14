<div class="ec_padding-page contact-page">
<?php if ($config['General']['recaptcha_key']) {?>
<script src='https://www.google.com/recaptcha/api.js?onload=recaptchaOnload&render=explicit' async defer></script>
<?php } ?>
<h1>Свяжитесь с нами</h1>
<br />
<form method="POST" name="help_form" id="help_form" onsubmit="javascript: if(!document.help_form.subject.value || !document.help_form.message.value || !document.help_form.email.value) { $ec('#error_mes').show(); return false; } else  $ec('#error_mes').hide();">
<input type="hidden" name="mode" value="send">

    <div class="group">
      <input type="text" name="email" required value="<?php echo escape($userinfo['email'], 2);; ?>" onkeyup="javascript: if(this.value) $ec('#error_mes').hide();">
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Ваш E-mail</label>
    </div>

    <div class="group">
      <input type="text" name="subject" required onkeyup="javascript: if(this.value) $ec('#error_mes').hide();">
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Тема</label>
    </div>

    <div class="group">
      <textarea name="message" required class="help-message" onkeyup="javascript: if(this.value) $ec('#error_mes').hide();"></textarea>
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Сообщение</label>
    </div>

<div id="error_mes">Пожалуйста, введите ваш E-mail, тему и сообщение.</div>
<?php if ($config['General']['recaptcha_key']) {?>
<div id="recaptcha_contact" data-sitekey="<?php echo $config['General']['recaptcha_key'];?>"></div><br />
<?php } ?>

<button type="button" class="submit_help">Отправить</button>
</form>
</div>
<br>