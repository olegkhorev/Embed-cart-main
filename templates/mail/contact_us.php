{include="mail/ec_header.php"}
{$email_ec_header}
{lng[Hello]}
<br /><br />
<p>{lng[Message from]} {$email}</p>
<br />{php echo func_eol2br($message);}
<br /><br />
{$signature}
{include="mail/footer.php"}