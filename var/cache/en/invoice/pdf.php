<html>
<head>
<meta charset="utf-8" />
<title>Invoice #<?php  echo $order['orderid']; ?></title>
<style type="text/css" media="all">
<?php 
include SITE_ROOT.'/includes/css.php';
?>
* {
	outline-style: none;
    background: transparent;
}
body {
	margin: 0;
	font-family: arial, sans-serif;
	font-size: 14px;
	background-attachment: fixed;
    -webkit-font-smoothing: antialiased !important;
    background: #fff;
	color: #2b2a29;
}
small {
	font-size: 12px;
}
p {
	margin: 0px;
	line-height: 23px;
}
ul li, ol li {
	padding: 10px 0;
}
a {
	color: #574e4e;
}
a:hover {
	text-decoration: none;
}
.e {
	color: #c00;
}
.i {
	color: #00c;
}
label {
	cursor: pointer;
}
th {
	font-weight: 500;
}
h1, h2, h3 {
    display: block;
    text-align: center;
    width: 100%;
	margin: 0;
	padding: 0 0 10px 0;
	font-size: 17px;
}
.invoice-table td {
    width: 50%;
}
.subtotal td {
    white-space: nowrap;
}
.subtotal td span {
    text-align: right;
    display: inline-block;
    padding: 0 !important;
    margin: 0 !important;
    line-height: 14px !important;
    height: 14px !important;
}
</style>
</head>
<body class="pdf-invoice print_body">
<div class="print_div">
<?php include SITE_ROOT."/var/cache/en/invoice/body.php";?>
</div>
</body>
</html>