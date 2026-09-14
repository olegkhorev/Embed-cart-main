<?php include SITE_ROOT."/var/cache/ru/mail/ec_header.php";?>
<?php echo $email_ec_header;?>
Здравствуйте
<br /><br />
<p>Сообщение от <?php echo $email;?></p>
<br /><?php echo func_eol2br($message);; ?>
<br /><br />
<?php echo $signature;?>
<?php include SITE_ROOT."/var/cache/ru/mail/footer.php";?>