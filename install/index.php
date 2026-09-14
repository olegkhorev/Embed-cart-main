<?php
error_reporting(E_ERROR | E_PARSE);
header("Content-type: text/html;charset=utf-8");
define('SITE_ROOT', dirname(__FILE__));
if (file_exists(SITE_ROOT . '/../includes/settings.php')) {
    header('Location: /');
    exit;
}

@session_start();
#$_SESSION['sql'] = array();;
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
   if ($_SESSION['sql']['imported']) {
# 		$mysqli = mysqli_connect($_SESSION['sql']['sql_server'], $_SESSION['sql']['sql_user'], $_SESSION['sql']['sql_password'], $_SESSION['sql']['sql_database']);
   }

    if (!$_SESSION['sql']['imported']) {
        $_SESSION['sql'] = $_POST;
//        @mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
   try {
      		$mysqli = @mysqli_connect($_POST['sql_server'], $_POST['sql_user'], $_POST['sql_password'], $_POST['sql_database'], $_POST['sql_port']);
   } catch (\Throwable $t) {
		    echo "<pre>Error: cannot connect with MySQL." . PHP_EOL;
		    echo "Error code: " . mysqli_connect_errno() . PHP_EOL;
		    echo "Error text: " . mysqli_connect_error() . PHP_EOL;
     	exit('<a href="./">Назад</a>');
   } catch (\Exception $e) {
		    echo "<pre>Error: cannot connect with MySQL." . PHP_EOL;
		    echo "Error code: " . mysqli_connect_errno() . PHP_EOL;
		    echo "Error text: " . mysqli_connect_error() . PHP_EOL;
	    	exit('<a href="./">Назад</a>');
   }

#  exit('1');
		if (!$mysqli) {
		    echo "<pre>Error: cannot connect with MySQL." . PHP_EOL;
		    echo "Error code: " . mysqli_connect_errno() . PHP_EOL;
		    echo "Error text: " . mysqli_connect_error() . PHP_EOL;
	    	exit('<a href="./">Назад</a>');
		}

		if ($mysqli->connect_error) {
		    die('Cannot connect to MySQL server.');
		}

// Temporary variable, used to store current query
$templine = '';
// Read in entire file
$lines = file(SITE_ROOT.'/dump.sql');
echo '<center>';
// Loop through each line
foreach ($lines as $line)
{
// Skip it if it's a comment
if (substr($line, 0, 2) == '--' || $line == '')
    continue;

// Add this line to the current segment
$templine .= $line;
// If it has a semicolon at the end, it's the end of the query
if (substr(trim($line), -1, 1) == ';')
{
    // Perform the query
    $mysqli->query($templine) or print('Error performing query \'<strong>' . $templine . '\': ' . mysqli_error($mysqli) . '<br /><br />');
    // Reset temp variable to empty
    $templine = '';
}
}
 echo "<font color='#fff'>Таблицы импортированы</font>";
echo '</center>';
        $_SESSION['sql']['imported'] = '1';
    } else {
        $file_contents = file_get_contents(SITE_ROOT . '/../includes/settings.default.php');
        extract($_POST);
        $new_file = str_replace('{{sql_server}}', $_SESSION['sql']['sql_server'], $file_contents);
        $new_file = str_replace('{{sql_user}}', $_SESSION['sql']['sql_user'], $new_file);
        $new_file = str_replace('{{sql_password}}', $_SESSION['sql']['sql_password'], $new_file);
        $new_file = str_replace('{{sql_database}}', $_SESSION['sql']['sql_database'], $new_file);
        $new_file = str_replace('{{sql_port}}', $_SESSION['sql']['sql_port'], $new_file);
        $new_file = str_replace('{{http_host}}', $http_host, $new_file);
        if ($https_enabled) {
            $new_file = str_replace('{{parent_host}}', 'https://'.$http_host, $new_file);
        } else
            $new_file = str_replace('{{parent_host}}', 'http://'.$http_host, $new_file);

        $new_file = str_replace('{{web_dir}}', $web_dir, $new_file);
        $new_file = str_replace('{{parent_page}}', $parent_page, $new_file);
        if ($is_image_magick)
            $new_file = str_replace('{{is_image_magick}}', '1', $new_file);
        else
            $new_file = str_replace('{{is_image_magick}}', '', $new_file);

        $new_file = str_replace('{{payment_currency}}', $payment_currency, $new_file);
        $fp = fopen(SITE_ROOT . '/../includes/settings.php', 'w+');
        fputs($fp, $new_file);
        fclose($fp);
        exit('<center>Вставьте этот код на страницу магазина: &lt;script src="'.$web_dir.'/embed_js.php"&gt;&lt;/script&gt;<br /><br />
             Панель администратора: a@a.com / 01230<br /><a href="'.$web_dir.'/admin" target="_blank">Вход</a>
             </center>');
    }
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:g="http://base.google.com/ns/1.0" xmlns:og="http://ogp.me/ns#" xmlns:fb="http://ogp.me/ns/fb#" class="area-c">
<head>
<title>SPA Cart Installation</title>
<link rel="shortcut icon" href="/favicon.png" type="image/vnd.microsoft.icon" />
<meta charset="utf-8" />
<meta name="keywords" content="">
<meta name="description" content="">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>
<link rel="stylesheet" href="style.css">
</head>
<body>
	<section>
		<div class="color"></div>
		<div class="color"></div>
		<div class="color"></div>
		<div class="box">
			<div class="square" style="--i:0"></div>
			<div class="square" style="--i:1"></div>
			<div class="square" style="--i:2"></div>
			<div class="square" style="--i:3"></div>
			<div class="square" style="--i:4"></div>
			<div class="container">
				<div class="form">
<center><img src="/images/logo.png" alt="" /></center>
<div class="install-step">
<h1>Install Embed Cart</h1>
<h2>Recommended:</h2>
<ul>
<li>PHP 8.x+</li>
<li>MySQL 5.7+</li>
</ul>

<form method="POST">
<?php
if ($_SESSION['sql']['imported']) {
$http_host = $_SERVER['HTTP_HOST'];
$web_dir = explode('install', $_SERVER['REQUEST_URI']);
$web_dir = $web_dir[0];
$web_dir = substr($web_dir, 0, strlen($web_dir) - 1);
?>
<table class="mysql-details-table">
<tr>
<td>SSL/HTTPS:</td>
<td><label><input type="checkbox" name="https_enabled" value="1" checked /> active</label></td>
</tr>
<tr>
<td>Domain:</td>
<td><input type="text" name="http_host" value="<?php echo $http_host; ?>" /></td>
</tr>
<tr>
<td>Folder with Embed Cart:</td>
<td><input type="text" name="web_dir" value="<?php echo $web_dir; ?>" /></td>
</tr>
<tr>
<td>Page with shop:</td>
<td><input type="text" name="parent_page" value="/shop.html" /></td>
</tr>
<tr>
<td>Currency:</td>
<td><input type="text" name="payment_currency" value="USD" /></td>
</tr>
<tr>
<td>ImageMagick:</td>
<td><label><input type="checkbox" name="is_image_magick" value="1" checked /> active</label></td>
</tr>
<tr>
<td colspan="2" align="center"><button>Complete installing</button></td>
</tr>
</table>
<?php } else { ?>
<table class="mysql-details-table">
<tr>
<td>MySQL host:</td>
<td><input type="text" name="sql_server" value="<?php if ($_SESSION['sql']['sql_server']) echo $_SESSION['sql']['sql_server']; else echo '127.0.0.1';?>" /></td>
</tr>
<tr>
<td>MySQL user:</td>
<td><input type="text" name="sql_user" value="<?php echo str_replace('"', '&quot;', $_SESSION['sql']['sql_user']); ?>" /></td>
</tr>
<tr>
<td>MySQL password:</td>
<td><input type="password" name="sql_password" value="<?php echo str_replace('"', '&quot;', $_SESSION['sql']['sql_password']); ?>" /></td>
</tr>
<tr>
<td>MySQL database:</td>
<td><input type="text" name="sql_database" value="<?php echo str_replace('"', '&quot;', $_SESSION['sql']['sql_database']); ?>" /></td>
</tr>
<tr>
<td>MySQL port:</td>
<td><input type="text" name="sql_port" value="<?php echo $_SESSION['sql']['sql_port'] ? str_replace('"', '&quot;', $_SESSION['sql']['sql_port']) : '3306'; ?>" /></td>
</tr>
<tr>
<td colspan="2" align="center"><button onclick="$(this).hide();">Install database</button></td>
</tr>
</table>
<?php } ?>
</form>
    </div>
			</div>
		</div>
	</section>

</body>
</html>