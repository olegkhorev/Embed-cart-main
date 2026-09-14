<html>
<head>
<meta charset="utf-8" />
<title>Счет-фактура #<?php  echo $order['orderid']; ?></title>
<style type="text/css" media="all">
<?php 
include SITE_ROOT.'/includes/css.php';
?>
* {
	font-family: 'DejaVu Sans' !important;
    font-size: 13px;
}
</style>
</head>
<body class="pdf-invoice print_body">
<div class="print_div">
<?php include SITE_ROOT."/var/cache/ru/invoice/body.php";?>
</div>
</body>
</html>