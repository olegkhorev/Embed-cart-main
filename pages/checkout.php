<?php
q_load('cart', 'product', 'order');

require_once(SITE_ROOT."/bt/lib/autoload.php");
$stripe_params = $db->row("SELECT * FROM payment_methods WHERE paymentid=7 AND enabled='1'");
$stripe_method = array();
require_once(SITE_ROOT . '/stripe/init.php');
$method = $db->row("SELECT * FROM payment_methods WHERE paymentid=7 AND enabled='1'");
if ($method) {
	$template['stripe_pkey'] = $stripe_params['param2'];
	$stripe_method = $method;
	\Stripe\Stripe::setApiKey($stripe_method['param1']);
}

$bt_params = $db->row("SELECT * FROM payment_methods WHERE paymentid=2 AND enabled='1'");
if ($bt_params['param1'] && $bt_params['param2'] && $bt_params['param3']) {
	if ($bt_params['live']) {
		Braintree_Configuration::environment('production');
	} else {
		Braintree_Configuration::environment('sandbox');
	}

	Braintree_Configuration::merchantId($bt_params['param1']);
	Braintree_Configuration::publicKey($bt_params['param2']);
	Braintree_Configuration::privateKey($bt_params['param3']);
//	Braintree_Configuration::environment
	#$gateway->config->sslVerifyPeer(false); 
	try {
		$template['client_token'] = Braintree\ClientToken::generate();
	} catch (Exception $e) {
		try {
			$template['client_token'] = Braintree\ClientToken::generate();
		} catch (Exception $e) {
			try {
				$template['client_token'] = Braintree\ClientToken::generate();
			} catch (Exception $e) {
				$template['client_token'] = Braintree\ClientToken::generate();
			}
		}
	}
}

if (isset($_GET['coupon'])) {
	if (empty($_GET['coupon']))
		exit('Please, enter coupon');

	$coupon_code = addslashes($_GET['coupon']);
	$coupon = $db->row("SELECT * FROM coupons WHERE coupon='".$coupon_code."'");
	if (!$coupon) {
		exit('Coupon not exists');
	} elseif ($coupon['status'] != 'Y') {
		exit('Coupon is disabled');
	} elseif ($coupon['per_customer']) {
		if (!$login)
			exit('Please, login to apply this coupon');

		$used_count = $db->field("SELECT COUNT(*) FROM orders WHERE userid='$login' AND coupon='".$coupon_code."' AND status NOT IN (5, 4)");
		if ($used_count >= $coupon['times'])
			exit('Coupon was already used');
	} elseif ($coupon['times_used'] >= $coupon['times'])
		exit('Coupon is inactive');

	$cart['coupon'] = $coupon;
	$_SESSION['cart'] = $cart;

	exit('S');
}

if (isset($_GET['gc'])) {
	if (empty($_GET['gc']))
		exit('Please, enter Gift Card');

	$gc_code = addslashes($_GET['gc']);
	$gc = $db->row("SELECT * FROM gift_cards WHERE gcid='".$gc_code."' AND amount_left>0");
	if (!$gc) {
		exit('Gift Card not exists or expired');
	} elseif ($gc['status'] != 'Y') {
		exit('Gift Card is disabled');
	}

	$cart['gc'] = $gc;
	$cart['gift_card'] = $gc_code;
	$_SESSION['cart'] = $cart;

	exit('S');
}

if ($get['1'] == 'remove_coupon') {
	unset($cart['coupon']);
	$_SESSION['cart'] = $cart;
	exit;
}

if ($get['1'] == 'remove_gc') {
	unset($cart['gc']);
	unset($cart['gift_card']);
	unset($cart['gc_discount']);
	$_SESSION['cart'] = $cart;
	exit;
}

if ($cart['products']) {
	$cart = func_calculate();
	$_SESSION['cart'] = $cart;
	$template['products'] = $cart['products'];
}# else
#	redirect('/');

if ($get['1'] == 'user_form') {
	extract($_POST);
	extract($posted_data);

	if ($db->field("SELECT COUNT(*) as cnt FROM users WHERE id<>'".$login."' AND email='".addslashes($email)."'"))
		exit('Email');

	$update = array(
		'firstname'		=> $firstname,
		'lastname'		=> $lastname,
		'address'		=> $address,
		'city'			=> $city,
		'state'			=> $state,
		'country'		=> $country,
		'zipcode'		=> $zipcode,
		'phone'			=> $phone,
	);

	if ($same_address) {
		foreach ($update as $k=>$v) {
			$update['b_'.$k] = $posted_data[$k];
		}
	} else {
		foreach ($update as $k=>$v) {
			$update['b_'.$k] = $posted_data['b_'.$k];
		}
	}

	$update['email'] = $email;
	$update['same_address']	= $same_address;
	if ($login)
		$db->array2update('users', $update, "id='".$login."'");
	else {
		$userinfo = $update;
		$_SESSION['user'] = $update;
	}

	func_save_cart();
	$_SESSION['userinfo'] = $userinfo = array_merge($userinfo, $update);
	$calculations = func_cart_calculations($update);
	$template['cart'] = $cart = $_SESSION['cart'] = $calculations['cart'];
	$template['shipping_methods'] = $calculations['shipping_methods'];
	$template['payment_methods'] =$calculations['payment_methods'];

	if ($stripe_method) {
		$template['stripe_method'] = $stripe_method;
		$template['stripe_pkey'] = $stripe_method['param2'];
#		exit($cart['total'] * 100);
		$paymentIntent = \Stripe\PaymentIntent::create([
			'amount'	=> round($cart['total'] * 100),
			'currency'	=> strtolower($payment_currency)
		]);

		$template['clientSecret'] = $paymentIntent->client_secret;
	}

	exit(get_template_contents('checkout/right_part.php'));
} elseif ($_GET['shippingid']) {
	$cart['shippingid'] = $_GET['shippingid'];
	if ($login)
		$calculations = func_cart_calculations($userinfo);
	else
		$calculations = func_cart_calculations($_SESSION['user']);

	$template['cart'] = $cart = $_SESSION['cart'] = $calculations['cart'];
	$template['shipping_methods'] = $calculations['shipping_methods'];
	$template['payment_methods'] =$calculations['payment_methods'];
	if ($stripe_method) {
		$template['stripe_method'] = $stripe_method;
		$template['stripe_pkey'] = $stripe_method['param2'];
		$paymentIntent = \Stripe\PaymentIntent::create([
			'amount'	=> round($cart['total'] * 100),
			'currency'	=> strtolower($payment_currency)
		]);

		$template['clientSecret'] = $paymentIntent->client_secret;
	}
	
	exit(get_template_contents('checkout/right_part.php'));
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	extract($_POST);
	if ($action == 'register') {
		if ($login && $db->field("SELECT COUNT(*) as cnt FROM users WHERE email='".addslashes($email)."' AND id<>'".$login."'"))
			exit(lng('This E-mail already registered.'));
		elseif (!$login && $db->field("SELECT COUNT(*) as cnt FROM users WHERE email='".addslashes($email)."'"))
			exit(lng('This E-mail already registered.').'<br><a href="#" onclick="return login();">'.lng('Join').'</a> '.lng('or').' <a href="#" onclick="return restore_password()">'.lng('Recovery your password').'</a>');
		else {
			if ($password) {
				$insert = array(
					'email'				=> $email,
					'password'			=> md5($password),
					'firstname'			=> mb_substr($firstname, 0, 32, 'utf-8'),
					'lastname'			=> mb_substr($lastname, 0, 32, 'utf-8'),
					'address'			=> $address,
					'city'				=> $city,
					'zipcode'			=> $zipcode,
					'phone'				=> $phone,
					'status'			=> 1,
					'registration_date'	=> time()
				);

				$userid = $db->array2insert('users', $insert);
				func_login($userid);
    			$_SESSION['user'] = '';
				exit('1');
			} else
				exit('1');
		}
	} else {
		if ($login)
			extract($userinfo);
		else
			extract($_SESSION['user']);

		if ($login)
			$calculations = func_cart_calculations($userinfo);
		else
			$calculations = func_cart_calculations($_SESSION['user']);

		$template['cart'] = $cart = $_SESSION['cart'] = $calculations['cart'];

		$checkout_reason = func_check_checkout();
		if ($checkout_reason != 1) {
			$_SESSION['alerts'][] = array(
				'type'		=> 'e',
				'content'	=> $checkout_reason
			);

			redirect('/checkout');
		}

		if ($paymentid == 7) {
			$method = $db->row("SELECT * FROM payment_methods WHERE paymentid='".$paymentid."'");
			$stripe_skey = $method['param1'];
			\Stripe\Stripe::setApiKey($stripe_skey);
			$intent = \Stripe\PaymentIntent::retrieve(
			  $stripe_token
			);

			if ($intent->status == 'succeeded') {
				$payment_indent = $stripe_token;
				$stripe_processed = 1;
				$transaction_id = $intent['charges']['data'][0]->balance_transaction;
			} else
				exit('E|We have an error processing your credit card.');

		} elseif ($paymentid == 2) {
			$nonce = $_POST["payment_method_nonce"];
			$result = Braintree\Transaction::sale([
			    'amount' => round($cart['total'], 2),
			    'paymentMethodNonce' => $nonce,
			    'options' => [
			        'submitForSettlement' => true
			    ],
			    'shipping'	=> [
			    	'firstName'			=> mb_substr($firstname, 0, 32, 'utf-8'),
			    	'lastName'			=> mb_substr($lastname, 0, 32, 'utf-8'),
			    	'locality'			=> $city,
			    	'region'			=> $state,
			    	'countryName'		=> $country,
			    	'postalCode'		=> $zipcode,
			    	'streetAddress'		=> $address,
			    ],
			    'billing'	=> [
			    	'firstName'			=> mb_substr($b_firstname, 0, 32, 'utf-8'),
			    	'lastName'			=> mb_substr($b_lastname, 0, 32, 'utf-8'),
			    	'locality'			=> $b_city,
			    	'region'			=> $b_state,
			    	'countryName'		=> $b_country,
			    	'postalCode'		=> $b_zipcode,
			    	'streetAddress'		=> $b_address,
			    ],
			    'customer'	=> [
				    'firstName'			=> mb_substr($b_firstname, 0, 32, 'utf-8'),
			    	'lastName'			=> mb_substr($b_lastname, 0, 32, 'utf-8'),
				    'email'				=> $email,
				    'phone'				=> $b_phone,
				],
				'taxAmount'	=> round($cart['tax'], 2)
			]);

			if ($result->success) {
				$stripe_processed = 1;
				$transaction = $result->transaction;
				$transaction_id = $transaction->id;
			} else {
				exit('StripeError');
			}
		}

		$stripe_key = md5(time().rand(0,100000));
		$insert = array(
			'payment_indent'=> $payment_indent,
			'token'			=> md5(time().rand(0,1000000)),
			'transaction_id'=> $transaction_id,
			'stripe_key'	=> $stripe_key,
			'stripe_session'=> '',
			'gift_card'		=> $cart['gift_card'],
			'gc_discount'	=> $cart['gc_discount'],
			'shippingid'	=> $cart['shippingid'],
			'local_pickup'	=> $local_pickup,
			'wid'			=> $wid,
			'paymentid'		=> $paymentid,
			'userid'		=> $login,
			'email'			=> $email,
			'firstname'		=> mb_substr($firstname, 0, 32, 'utf-8'),
			'lastname'		=> mb_substr($lastname, 0, 32, 'utf-8'),
			'address'		=> $address,
			'city'			=> $city,
			'state'			=> $state,
			'country'		=> $country,
			'zipcode'		=> $zipcode,
			'phone'			=> $phone,
			'b_firstname'	=> mb_substr($b_firstname, 0, 32, 'utf-8'),
			'b_lastname'	=> mb_substr($b_lastname, 0, 32, 'utf-8'),
			'b_address'		=> $b_address,
			'b_city'		=> $b_city,
			'b_state'		=> $b_state,
			'b_country'		=> $b_country,
			'b_zipcode'		=> $b_zipcode,
			'b_phone'		=> $b_phone,
			'notes'			=> $notes,
			'status'		=> 1,
			'date'			=> time(),
			'subtotal'		=> $cart['subtotal'],
			'coupon'		=> $cart['coupon']['coupon'],
			'coupon_discount'=> $cart['coupon_discount'],
			'shipping'		=> $cart['shipping_cost'],
			'tax'			=> round($cart['tax'], 2),
			'tax_details'	=> serialize($cart['tax_details']),
			'total'			=> $cart['total'],
			'packages'		=> serialize($cart['packages'])
		);

		if (empty($cart['total']))
			$stripe_processed = 1;

		if ($stripe_processed == 1) {
			$order_status = $insert['status'] = 2;
		}

		if ($cart['coupon'])
			$db->query("UPDATE coupons SET times_used='".($cart['coupon']['times_used'] + 1)."' WHERE coupon='".$cart['coupon']['coupon']."'");

		$order_status = $insert['status'];
		$orderid = $db->array2insert('orders', $insert);
		@session_start();
		$_SESSION['invoices'][] = $orderid;
		$total = $insert['total'];
		foreach ($cart['products'] as $k=>$v) {
			$insert = array(
				'orderid'	=> $orderid,
				'productid'	=> $v['productid'],
				'price'		=> $v['price'],
				'weight'	=> $v['weight'],
				'quantity'	=> $v['quantity'],
				'extra'		=> serialize(array(
						'product_options'	=> $v['product_options'],
						'options'			=> $v['options'],
						'variantid'			=> $v['variantid']
					)
				)
			);

			if ($v['gift_card']) {
				$insert['gift_card'] = $v['gift_card'];
				$insert['price'] = $v['amount'];
			}

			$db->array2insert('order_items', $insert);

			$count = $db->field("SELECT COUNT(*) FROM order_items WHERE productid='$v[productid]'");
			$db->query("UPDATE products SET sales_stats='".$count."' WHERE productid='$v[productid]'");
		}

		if ($stripe_processed == 1) {
			order_status($orderid, 2, true);
		}

		if ($paymentid == 7) {
		} elseif ($paymentid == 8) {
			$payment_method = $db->row("SELECT * FROM payment_methods WHERE paymentid=8");
			$paypal_email = $payment_method['param1'];
			if ($payment_method['live'])
				$url = 'https://www.paypal.com/cgi-bin/webscr';
			else
				$url = 'https://www.sandbox.paypal.com/cgi-bin/webscr';
?>
<form action="<?php echo $url; ?>" method="post" name="paypalform" style="display: none;">
    <input name="business" type="hidden" value="<?php echo $paypal_email; ?>">
<!--  <input type="hidden" name="business" value="xcart@ya.ru">-->
  <input type="text" name="amount" value="<?php echo price_format($cart['total']); ?>" />
    <br>
    <input name="currency_code" type="hidden" value="<?php echo strtoupper($payment_currency); ?>">
    <input name="cancel_return" type="hidden" value="<?php echo $parent_site_location.'/'.$parnet_site_page; ?>#!invoice/<?php echo $orderid; ?>/failed">
    <input name="notify_url" type="hidden" value="<?php echo $current_location; ?>/paypal/<?php echo $orderid; ?>">
    <input name="return" type="hidden" value="<?php echo $parent_site_location.'/'.$parnet_site_page; ?>#!invoice/<?php echo $orderid; ?>/success">
    <input name="cmd" type="hidden" value="_xclick">
    <input name="item_name" type="hidden" value="Order payment">
    <input type="hidden" name="no_shipping" value="1">
    <input name="lc" type="hidden" value="EN">
    <input name="rm" type="hidden" value="2">
    <input name="bn" type="hidden" value="PP-BuyNowBF">
    <input type="image" src="https://www.paypalobjects.com/en_US/CH/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
    <img alt="" border="0" src="https://www.paypalobjects.com/fr_FR/i/scr/pixel.gif" width="1" height="1">
    </form>
<?php
			$_SESSION['cart'] = array();
			func_remove_cart();
			exit;
		} elseif ($paymentid == 9) {

require_once(dirname(__FILE__) . "/IntellectMoneyCommon/LanguageHelper.php");
require_once(dirname(__FILE__) . "/IntellectMoneyCommon/UserSettings.php");
require_once(dirname(__FILE__) . "/IntellectMoneyCommon/Order.php");
require_once(dirname(__FILE__) . "/IntellectMoneyCommon/Customer.php");
require_once(dirname(__FILE__) . "/IntellectMoneyCommon/Payment.php");
require_once(dirname(__FILE__) . "/IntellectMoneyCommon/Result.php");
# 4627100101654724
        $current_location = $current_location.'/invoice/'.$orderid;
    function checkout_form($order_id, $button_text = null) {
        global $current_location, $userinfo, $orderid, $cart, $subtotal, $lng;
        if (empty($button_text)) {
            $button_text = 'Pay';
        }

        //Загружаем данные по настройкам
        $im_userSettings = loadSettings();
        //Заполняем данные по покупателю
        $im_customer = \PaySystem\Customer::getInstance($userinfo['email'], $userinfo['firstname'].' '.$userinfo['lastname'], NULL);
        //информация по заказу
        $im_order = \PaySystem\Order::getInstance(NULL, $order_id, $cart['total'], $cart['total'], NULL, NULL, 'RUB', NULL, NULL);
        //Заполняем структуру товарами
        $im_order->addItem($cart['total'], '1', 'Оплата заказа #'.$orderid, 6);

        //Заполняем данные по доставке
//        $im_order->addItem($orders->delivery_price, 1, 'Доставка', $im_userSettings->getDeliveryTax());
        //Формируем платежные данные
        $im_payment = \PaySystem\Payment::getInstance($im_userSettings, $im_order, $im_customer, 'RU');

        //Генерируем платёжную форму
        return str_replace('</form>', '<input type="hidden" name="returnUrl" value="'.$current_location.'"><input type=submit class="payment_button" value=' . $button_text . '></form>', $im_payment->generateForm(true, false));
    }

	$testmode = false;
	$payment_method = $db->row("SELECT * FROM payment_methods WHERE paymentid=9");
    function loadSettings() {
        global $current_location, $orderid, $testmode, $db, $payment_method;
		$secret_key = $payment_method['param1'];

        $im_userSettings = \PaySystem\UserSettings::getInstance();
        $params = array();
        $configs = array(
            'im_eshopId'    => $payment_method['param2'],
            'im_secretKey'  => $secret_key,
            'im_holdMode'   => '0',
            'im_testMode'   => $payment_method['live'] ? '0' : '1',
            'im_tax'        => '6',
            'im_deliveryTax'  => '6',
            'im_inn'        => $payment_method['param3'],
        );

        foreach ($im_userSettings->getNamesOfOrganizationParamsToSave() as $value) {
            if (in_array($value, array('holdMode', 'testMode')) && $configs['im_' . $value] == '1') {
                $params[$value] = 1;
            } else {
                $params[$value] = $configs['im_' . $value];
            }
        }
#echo '<pre>';
#exit(print_R($params));
        $params['successUrl'] = $current_location.'?orderid='.$orderid.'&success=1';
        $params['backUrl'] = $current_location.'';
#        $params['returnUrl'] = $current_location.'';
        $im_userSettings->setParams($params);
        $im_userSettings->setMerchantUrl('https://merchant.intellectmoney.ru');

        return $im_userSettings;
    }

		if (!$payment_method['live']) {
			$oid = 'test_'.$orderid;
		} else {
			$oid = 'live_'.$orderid;
		}

        $html = checkout_form($oid);
		$_SESSION['cart'] = array();
		func_remove_cart();
        echo '<div id="int_payment_form" style="display: none;">'.$html.'</div>';
/*        exit('<script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>
             <script>
$(".payment_button").click();
             </script>
        ');
*/
		exit;
	}

		$template['total'] = $total;

		q_load('order');
		$subject = $company_name.': '.lng('Order').' #'.$orderid.' '.$order_statuses[$order_status];
		if ($order_status == 2)
			func_decrease_quantity($orderid);

		$orderinfo = func_orderinfo($orderid);
		$template['order'] = $order = $orderinfo['order'];
		$template['products'] = $orderinfo['products'];
		$template['is_mail'] = 'Y';
		$message = get_template_contents('invoice/body.php');
		func_mail($order['firstname'].' '.$order['lastname'], $order['email'], $config['Company']['company_name'].' <'.$config['Company']['orders_department'].'>', $subject, $message);
		func_mail($config['Company']['company_name'], $config['Company']['orders_department'], $order['firstname'].' '.$order['lastname'].' <'.$order['email'].'>', $subject, $message);

		$_SESSION['cart'] = array();
		func_remove_cart();
		if ($is_ajax) {
			exit($orderid.'/');
		} else
			redirect('/invoice/'.$orderid);
	}
}

if (empty($login) && !empty($social_login)) {
	if (!empty($social_login['profile']['name']['givenName'])) {
		$_SESSION['user']['firstname'] = $social_login['profile']['name']['givenName'];
		$_SESSION['user']['lastname'] = $social_login['profile']['name']['familyName'];
	} else {
		$tmp = explode(" ", $social_login['profile']['displayName']);
		$_SESSION['user']['firstname'] = $tmp['0'];
		$_SESSION['user']['lastname'] = $tmp['1'];
	}

	$_SESSION['user']['email'] = $social_login['profile']['verifiedEmail'];
	$template['userinfo'] = $_SESSION['user'];
} elseif (empty($login))
	$template['userinfo'] = $_SESSION['user'];

$calculations = func_cart_calculations($template['userinfo']);
$template['cart'] = $cart = $_SESSION['cart'] = $calculations['cart'];
$template['shipping_methods'] = $calculations['shipping_methods'];
$template['payment_methods'] = $calculations['payment_methods'];

$template['no_left_menu'] = 'Y';
$template['page'] = get_template_contents('checkout/body.php');
/*
if ($is_ajax) {
	$page_title = lng('Checkout');
	$result = array($template['page'], $page_title, $template['bread_crumbs_html'], $get['0'], $template['parentid']);
	exit(json_encode($result));
}*/