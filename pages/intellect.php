<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $_REQUEST = $_POST;
} else {
    $_REQUEST = $_GET;
}

if ($_SERVER['REMOTE_ADDR'] == '89.239.154.139') {
#    $tmp = '{"eshopId":"464745","paymentId":"3237113704","orderId":"live_22","eshopAccount":"4899226221","serviceName":"\u041e\u043f\u043b\u0430\u0442\u0430 \u0437\u0430\u043a\u0430\u0437\u0430 \u2116live_22","recipientAmount":"500.00","recipientOriginalAmount":"500.00","recipientCurrency":"RUB","paymentStatus":"3","userName":"","userEmail":"xcart@ya.ru","paymentData":"2023-05-31 21:22:43","secretKey":"","hash":"083856c54cdd5cb54846756265ead868"}';
#    $_REQUEST = json_decode($tmp, true);
}

$payment_method = $db->row("SELECT * FROM payment_methods WHERE paymentid='9'");
$secret_key = $payment_method['param1'];
if ($_REQUEST['secretKey'] != $secret_key)
    exit;

$fp = fopen(SITE_ROOT . '/var/intellect/log-'.date('Y-m-d').'.txt', 'a+');
fputs($fp, str_replace($secret_key, '', json_encode($_REQUEST))."\n\n\n");
fclose($fp);
function from_request($name) {
    return isset($_REQUEST[$name]) ? htmlspecialchars(stripslashes($_REQUEST[$name])) : null;
}

/* ---Данные из POST---------------------------------------------------------------- */
$eshopId = from_request('eshopId');
$orderId = from_request('orderId');
$serviceName = from_request('serviceName');
$eshopAccount = from_request('eshopAccount');
$recipientAmount = from_request('recipientAmount');
$recipientCurrency = from_request('recipientCurrency');
$paymentStatus = from_request('paymentStatus');
$userName = from_request('userName');
$userEmail = from_request('userEmail');
$paymentData = from_request('paymentData');
$hash = from_request('hash');
$secretKey = from_request('secretKey');

////////////////////////////////////////////////
// Выберем заказ из базы
////////////////////////////////////////////////
q_load('product', 'order');
$order_id = addslashes($orderId);
$order_id = str_replace('test_', '', $order_id);
$order_id = str_replace('live_', '', $order_id);
$orderinfo = func_orderinfo($order_id);
$order = $orderinfo['order'];
if (empty($order))
    die('Оплачиваемый заказ не найден');

////////////////////////////////////////////////
// Выбираем из базы соответствующий метод оплаты
////////////////////////////////////////////////

// Проверяем контрольную подпись
/* ---------------------------------------------------------- */
$control_hash_str = implode('::', array(
    $eshopId,
    $orderId,
    $serviceName, $eshopAccount, $recipientAmount, $recipientCurrency,
    $paymentStatus, $userName, $userEmail, $paymentData,
    $secret_key,
        ));

$control_hash = md5($control_hash_str);
$control_hash_utf8 = md5(iconv('windows-1251', 'utf-8', $control_hash_str));

//if (($hash != $control_hash && $hash != $control_hash_utf8) || !$hash)
if ($secret_key != $secretKey)
    die("error\n");
else {
    /* ---------------------------------------------- */
    //Статус платежа (paymentStatus); 
    $status = $paymentStatus;
    if ($status == 3 && $order['status'] != '2')
        die("OK");

    if ($status == 5 || ($status == 3 && $order['status'] == '1')) {// && $order['status'] == '1'
$fp = fopen(SITE_ROOT . '/var/intellect/test-'.date('Y-m-d').'.txt', 'a+');
fputs($fp, '1');

        // Сумма заказа у нас в магазине
        // Должна быть равна переданной сумме
        if ($recipientAmount != $order['total'] || $recipientAmount <= 0)
            die("incorrect price\n");

fputs($fp, '2');
        // Установим статус оплачен
        $db->query("UPDATE orders SET status='2' WHERE orderid='".$order_id."'");
        $orderid = $order_id;
        $order_status = 2;
		$subject = $company_name.': '.lng('Order').' #'.$orderid.' '.$order_statuses[$order_status];
$calc_order_id = $orderid;
$orderinfo = func_orderinfo($calc_order_id);
$template['order'] = $order = $orderinfo['order'];
$order['packages'] = unserialize($order['packages']);

// Ниже для авто-создания заказа в CDek
#require_once SITE_ROOT . '/vendor/autoload.php';

#$client = new \CdekSDK\CdekClient('', '');
/*
$request = new \CdekSDK\Requests\CalculationWithTariffListAuthorizedRequest();

$prefix = '_2';
$prefix = '';

if (preg_match( '/^\+\d(\d{3})(\d{3})(\d{4})$/', $order['phone'], $matches))
{
    $result = $matches[1] . '-' .$matches[2] . '-' . $matches[3];
    $order['phone'] = $result;
}
#exit($order['phone'].'-');
$order_cdek = new \CdekSDK\Common\Order([
    'Number'          => $order['orderid'].$prefix,
    'SendCityCode'    => 422,
    'RecCityPostCode' => $order['zipcode'],
    'RecipientName'   => $order['firstname'].' '.$order['lastname'],
    'RecipientEmail'  => $order['email'],
    'Phone'           => $order['phone'],
    'TariffTypeCode'  => 139, // Посылка дверь-дверь от ИМ
]);

$order_cdek->setAddress(\CdekSDK\Common\Address::create([
    'Street' => $order['address']
]));

foreach ($order['packages'] as $pack_id=>$pack) {
	$package = \CdekSDK\Common\Package::create([
	    'Number'  => $pack_id,
	    'BarCode' => $pack_id,
	    'Weight'  => $pack['weight'], // Общий вес (в граммах)
	    'SizeA'   => $pack['length'], // Длина (в сантиметрах), в пределах от 1 до 1500
	    'SizeB'   => $pack['width'],
	    'SizeC'   => $pack['height'],
	]);

	foreach ($pack['items'] as $pid=>$i) {
		$prd = $db->row("SELECT * FROM products WHERE productid='".$pid."'");
#		echo $prd['sku'].'<hr>';
		$package->addItem(new \CdekSDK\Common\Item([
		    'WareKey' => trim($prd['sku']), // Идентификатор/артикул товара/вложения
		    'Cost'    => $prd['price'], // Объявленная стоимость товара (за единицу товара)
		    'Payment' => 0, // Оплата за товар при получении (за единицу товара)
		    'Weight'  => $prd['weight'], // Вес (за единицу товара, в граммах)
		    'Amount'  => $i, // Количество единиц одноименного товара (в штуках)
		    'Comment' => $prd['name'],
		]));
	}

	$order_cdek->addPackage($package);
}

$request = new \CdekSDK\Requests\DeliveryRequest([
    'Number' => $order['orderid'].'_dlvr'.$prefix,
]);

$request->addOrder($order_cdek);

$response = $client->sendDeliveryRequest($request);
#exit($response->orders[0]->DispatchNumber);
#echo '<pre>';
#exit(print_R($response));
if ($response->hasErrors() && !$response instanceof DeliveryResponse) {
    // обработка ошибок в общем случае
}

if ($response->hasErrors()) {
    // обработка ошибок отдельных заказов

    foreach ($response->getErrors() as $order) {
        // заказы с ошибками
        $order->getMessage();
        $order->getErrorCode();
        $order->getNumber();
    }

    foreach ($response->getMessages() as $message) {
        // Сообщения об ошибках
    }
}

$number = '';
$order_number = '';
foreach ($response->getOrders() as $order) {
    // сверяем данные заказа, записываем номер
	if (!$order_number)
		$order_number = $order->getNumber();

	if (!$number)
		$number = $order->getDispatchNumber();

    break;
}

$db->query("UPDATE orders SET tracking='".addslashes($number)."', label_response='".addslashes(serialize($response))."' WHERE orderid='".$calc_order_id."'");
*/
		$orderinfo = func_orderinfo($orderid);
		$template['order'] = $order = $orderinfo['order'];
		$template['products'] = $orderinfo['products'];
		$template['is_mail'] = 'Y';
		$message = get_template_contents('invoice/body.php');
fputs($fp, "\n\n\n".$order['firstname'].' '.$order['lastname'].', '.$order['email']."\n\n\n");

ob_start();
		func_mail($order['firstname'].' '.$order['lastname'], $order['email'], $config['Company']['orders_department'], $subject, $message);
$degug = ob_get_clean();
fputs($fp, $degug);
        func_mail($config['Company']['company_name'], $config['Company']['orders_department'], $config['Company']['orders_department'], $subject, $message);
		func_decrease_quantity($orderid);
fputs($fp, '3');

fclose($fp);
        die("OK");
    }
    /* --------------------------------------------- */
}
die('error');
