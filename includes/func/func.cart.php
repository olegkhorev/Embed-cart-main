<?php
use DVDoug\BoxPacker\Rotation;
use DVDoug\BoxPacker\Packer;
use DVDoug\BoxPacker\Test\TestBox;  // use your own `Box` implementation
use DVDoug\BoxPacker\Test\TestItem; // use your own `Item` implementation

function func_get_max_cartid() {
	global $cart;

	if (empty($cart['products']))
		return 0;
	else {
		$ids = array();
		foreach ($cart['products'] as $v)
			$ids[] = $v['cartid'];

		return max($ids);
	}
}

function func_calculate() {
	global $db, $cart;

	$subtotal = 0;
	foreach ($cart['products'] as $k=>$v) {
		if ($v['gift_card']) {
			$subtotal_gc += $v['amount'];
			$subtotal += $v['amount'];
			continue;
		}

		if ($v['options']) {
			$v['variantid'] = func_get_variantid($v['options'], $v['productid']);
		}

		$v = array_merge($v, func_select_product($v['productid'], $v['variantid'], $v['quantity']));

		if ($v['options']) {
			$product_options = array();
			$original_price = $v['price'];
			$original_weight = $v['weight'];
			foreach ($v['options'] as $g=>$o) {
				$group = $db->row("SELECT * FROM option_groups WHERE groupid='".addslashes($g)."'");
				if ($group['view_type'] == 't' || $group['view_type'] == 'i') {
					$product_options[$g] = $group;
					$product_options[$g]['option'] = array('name' => $o);
				} else {
					$product_options[$g] = $group;
					$o = $db->row("SELECT * FROM options WHERE optionid='".addslashes($o)."'");;
					$product_options[$g]['option'] = $o;
					if (!$group['variant']) {
						if ($o['price_modifier_type'] == '$')
							$v['price'] += $o['price_modifier'];
						else
							$v['price'] += $original_price * $o['price_modifier'] / 100;

						if ($o['weight_modifier_type'] == '$')
							$v['weight'] += $o['weight_modifier'];
						else
							$v['weight'] += $o['weight_modifier'] * $original_weight / 100;
					}
				}
			}

			$v['price'] = $v['price'];
			$v['weight'] = $v['weight'];
			$v['product_options'] = $product_options;
		}

		$cart['products'][$k] = $v;
		$subtotal += $v['price'] * $v['quantity'];
		$subtotal_taxed += $v['price'] * $v['quantity'];
	}

	if ($cart['coupon']) {
		if ($cart['coupon']['discount_type'] == 'A')
			$cart['coupon_discount']= $cart['coupon']['discount'];
		else
			$cart['coupon_discount']=  $subtotal * $cart['coupon']['discount'] / 100;
	}

	$cart['subtotal'] = $subtotal;

	if ($cart['coupon']) {
		$cart['discounted_subtotal'] = $cart['subtotal'] - $cart['coupon_discount'];
	} else
		$cart['discounted_subtotal'] = $cart['subtotal'];

	if ($cart['gift_card']) {
	} else {
		unset($cart['shipping_cost_gc']);
		unset($cart['gc_left']);
		unset($cart['gc_discount']);
		unset($cart['gc']);
	}

	$cart['subtotal_taxed'] = $subtotal_taxed;

	$cart['total'] = $cart['discounted_subtotal'];

	return func_normilze_cart($cart);
}

function func_normilze_cart($cart) {
	global $db;
	$found = array();
	$new_products = array();
	foreach ($cart['products'] as $k=>$v) {
		if ($v['gift_card']) {
			$new_products[] = $v;
			continue;
		}

		$product = $db->field("SELECT productid FROM products WHERE productid='".$v['productid']."' AND status IN (1,3)");
		if (!$product)
			continue;

		$key = $v['productid'].serialize($v['options']);
		if (in_array($key, $found))
			$new_products[$key]['quantity'] += $v['quantity'];
		else {
			$found[] = $key;
			$new_products[$key] = $v;
		}
	}

	$cart['products'] = array();
	foreach ($new_products as $v)
		$cart['products'][] = $v;

	return $cart;
}

function func_cart_calculations($userinfo) {
	global $db, $cart, $config, $_SESSION, $userinfo;
	global $http_domain, $current_location, $http_location, $web_dir;

	$return = array();
	$customer_zone = 0;
	$zones = $db->column("SELECT z.zoneid FROM zones z, zone_element e WHERE z.zoneid=e.zoneid AND e.field='".$userinfo['country']."' AND e.field_type='C' GROUP BY e.zoneid");
	if ($zones) {
		foreach ($zones as $zoneid) {
			$found = false;
			$state_found = false;
			# Check for state
			$zone_states = $db->column("SELECT field FROM zone_element WHERE zoneid='$zoneid' AND field_type='S' GROUP BY field");
			if (!$zone_states || in_array($userinfo['country'].'_'.$userinfo['state'], $zone_states))
				$found = true;
			else
				$found = false;

			# Check for city
			if ($found) {
				$zone_cities = $db->column("SELECT field FROM zone_element WHERE zoneid='$zoneid' AND field_type='T' GROUP BY field");
				if (!$zone_cities)
					$found = true;
				else {
					$city_found = false;
					foreach ($zone_cities as $city) {
						if (strstr($city, '%'))
							$city = str_replace('%', '', $city);

						if (strstr($userinfo['city'], $city)) {
							$city_found = true;
							break;
						}
					}

					if ($city_found)
						$found = true;
					else
						$found = false;
				}
			}

			# Check for zipcode
			if ($found) {
				$zone_zipcodes = $db->column("SELECT field FROM zone_element WHERE zoneid='$zoneid' AND field_type='Z' GROUP BY field");
				if (!$zone_zipcodes)
					$found = true;
				else {
					$zip_found = false;
					foreach ($zone_zipcodes as $zip) {
						if (strstr($zip, '%'))
							$zip = str_replace('%', '', $zip);

						if (strstr($userinfo['zipcode'], $zip)) {
							$zip_found = true;
							break;
						}
					}

					if ($zip_found)
						$found = true;
					else
						$found = false;
				}
			}

			if ($found) {
				$customer_zone = $zoneid;
				break;
			}
		}
	}

	global $warehouse_enabled;
	if ($warehouse_enabled && $cart['products']) {
		$local_pickup = true;
		$warehouses = $db->all("SELECT * FROM warehouses WHERE enabled=1 ORDER BY pos");
		$good_warehouses = array();
		if ($warehouses) {
			foreach ($warehouses as $k=>$v) {
				$good = true;
				foreach ($cart['products'] as $k2=>$v2) {
					$variantid = $v2['variantid'] ? $v2['variantid'] :0 ;
					$in_wh_avail = $db->field("SELECT avail FROM product_inventory WHERE wid='$v[wid]' AND productid='$v2[productid]' AND variantid='".$variantid."'");
					if ($v2['avail_block'])
						$in_wh_avail -= $v2['avail_block'];

					if ($in_wh_avail < $v2['quantity']) {
						$good = false;
						break;
					}
				}

				if ($good) {
					$good_warehouses[] = $v;
				}
			}
		}

		$cart['warehouses'] = $good_warehouses;
		if ($good_warehouses) {
			$cart['local_pickup'] = 1;
		} else {
			$cart['local_pickup'] = 0;
		}
	}

	$need_shipping = 0;
	foreach ($cart['products'] as $v)
		if (!$v['gift_card'])
			$need_shipping = 1;

#echo '<pre>';
#exit(print_R($shipping_methods));
	$cart['need_shipping'] = $need_shipping;
	if (!$userinfo['country'])
		$userinfo = $_SESSION['user'];

	if ($need_shipping && $config['CDek']['use_cdek']) {
try {
#		exit('1');
#require_once 'vendor/autoload.php';
$client = new \CdekSDK\CdekClient($config['CDek']['cdek_account'], $config['CDek']['cdek_password']);
				$items = array(
					'box_l'	=> '70',
					'box_w'	=> '40',
					'box_h'	=> '40',
					'box_wg'	=> '35000',
					'items'	=> array(
					)
				);

				foreach ($cart['products'] as $p) {
					if ($p['gift_card'])
						continue;

					$items['items'][] = array(
'id' => $p['productid'],
'weight' => $p['weight'],
'length' => $p['dim_x'],
'width' => $p['dim_y'],
'height' => $p['dim_z'],
'price' => '',
'items_per_box' => '1000',
'amount' => $p['quantity'],
					);
				}
#echo '<pre>';
#exit(print_R($items));
/*
				$json = json_encode($items);
					$curl = curl_init();
					curl_setopt_array($curl, array(
//					  CURLOPT_URL => "https://embed-cart.com/boxes/api.php?pswd=embed_cart_boxes",
					  CURLOPT_URL => $http_location . $web_dir . "/shipping/packages.php",
					  CURLOPT_RETURNTRANSFER => true,
					  CURLOPT_ENCODING => "",
					  CURLOPT_MAXREDIRS => 10,
					  CURLOPT_TIMEOUT => 0,
					  CURLOPT_FOLLOWLOCATION => true,
					  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
					  CURLOPT_CUSTOMREQUEST => "POST",
					  CURLOPT_POSTFIELDS => $json,
					  CURLOPT_HTTPHEADER => array(
					    "Host: ".$http_domain,
					    "Content-Type: application/json"
					  ),
					));

					$response = curl_exec($curl);
					curl_close($curl);

#exit($response.'-'.$http_location . "/shipping/packages.php");
					$result = json_decode($response, true);
*/
$result = $items;
    $packer = new Packer();
        $packer->addBox(
            new TestBox(
                reference: 'Коробка',
                outerWidth: $result['box_w'],
                outerLength: $result['box_l'],
                outerDepth: $result['box_h'],
                emptyWeight: 0,
                innerWidth: $result['box_w'],
                innerLength: $result['box_l'],
                innerDepth: $result['box_h'],
                maxWeight: $result['box_wg'],
            )
        );
#echo '<pre>';
#exit(print_R($result));
    foreach ($result['items'] as $item) {
        $packer->addItem(
            item: new TestItem(
                description: $item['id'],
                width: $item['width'],
                length: $item['length'],
                depth: $item['height'],
                weight: $item['weight'],
                allowedRotation: Rotation::BestFit
            ),
            qty: $item['amount']
        );
    }

    $packedBoxes = $packer->pack();
    $packages = array();
    error_reporting(0);
    foreach ($packedBoxes as $pack) {
#        echo '<pre>';
#	echo '<pre>';
#	exit(print_R($pack));
#	echo print_R($pack->items)."\n";

        $items = array();
        $weight = 0;
        foreach ($pack->items as $i) {
            $item_id = $i->item->getDescription();
            $weight += $i->item->getWeight();
            if ($items[$item_id])
                $items[$item_id]++;
            else
                $items[$item_id] = 1;
#            echo ."\n";
        }
        $packages[] = array(
            'weight'    => $weight,
            'length'    => $pack->getUsedLength(),
            'width'     => $pack->getUsedWidth(),
            'height'    => $pack->getUsedDepth(),
            'items'     => $items,
        );
#        echo print_R($pack->items).'<hr>';
#        echo $pack->getUsedWidth().'-'.$pack->getUsedLength().'-'.$pack->getUsedDepth()."\n";
#        $tmp = json_encode($pack);
#        print_r(json_decode($tmp, true));
#        exit();
    }
#echo '<pre>';
#exit(print_R($packages));

#echo '<pre>';
#exit(print_R($packages));
if ($_SERVER['REMOTE_ADDR'] == '85.106.20.123') {
#				echo '<pre>123';
#                echo $_GET['target'].'-'.$street.'<hr>';
#				exit(print_R($result));
}

#				$packages = $result;
#$fp = fopen(SITE_ROOT . '/var/tmp/packages.txt', 'a+');
#fputs($fp, serialize($packages)."\n\n\n");
#fclose($fp);
#echo '<pre>';
#exit(print_R($userinfo));
#exit($userinfo['zipcode']);
#137 - склад-дверь
#139 - дверь-дверь
#exit($userinfo['zipcode'].'-'.trim($userinfo['country']));
/*
    ->addPackage([
        'weight' => 0.2,
        'length' => 25,
        'width'  => 15,
        'height' => 10,
    ]);
*/
	$shipping_methods = array();
	$cart['shipping_cost'] = 0;
	foreach ($packages as $pack) {
#		exit($pack['weight'] / 1000);
	$request = new \CdekSDK\Requests\CalculationWithTariffListAuthorizedRequest();
	$request->setSenderCityPostCode($config['CDek']['cdek_sender'])
	    ->setReceiverCityPostCode(trim($userinfo['zipcode']))
		->setReceiverCountryCode($userinfo['country'])
		->setReceiverCity(trim($userinfo['city']))
	    ->addTariffToList($config['CDek']['cdek_tarrif']);

		$request->addPackage([
		    'weight' => $pack['weight'] / 1000,
		    'length' => $pack['length'],
		    'width'  => $pack['width'],
		    'height' => $pack['height'],
		]);

		$response = $client->sendCalculationWithTariffListRequest($request);
		foreach ($response->getResults() as $result) {
		    if ($result->hasErrors()) {
	        // обработка ошибок
		        continue;
		    }

		    if (!$result->getStatus()) {
		        continue;
		    }

			if (!$cart['shippingid']) {
				$cart['shippingid'] = 137;
				$cart['shipping_cost'] += $result->getPrice();
			}


		    $result->getTariffId();
		    // int(1)

		    $result->getPrice();
		    // double(1570)

		    $min = $result->getDeliveryPeriodMin();
		    // int(4)

		    $max = $result->getDeliveryPeriodMax();
			if ($max > $min)
				$st = $min.'-'.$max.' дней';
			else
				$st = $min.' дней';

			if (!$shipping_methods[137]) {
				$shipping_methods[137] = array(
					'shippingid'	=> 137,
					'shipping'		=> 'CDek',
					'shipping_time'	=> $st,
					'rate'			=> $result->getPrice()
				);
			} else {
				$shipping_methods[137]['rate'] += $result->getPrice();
			}
	    // int(5)
		}

#echo '<pre>';
#exit(print_R($shipping_methods));
	}
#echo '<pre>';
#exit(print_R($shipping_methods));
	$cart['packages'] = $packages;
#echo '<pre>';
#exit(print_R($packages));
#$fp = fopen(SITE_ROOT . '/var/tmp/response.txt', 'a+');
#fputs($fp, serialize($response)."\n\n\n");
#fclose($fp);

#echo '<pre>';
#exit(print_R($response));

/** @var \CdekSDK\Responses\CalculationWithTariffListResponse $response */
if ($response->hasErrors()) {
    // обработка ошибок
}
#echo '<pre>';
#exit(print_R($response));
/*
foreach ($response->getResults() as $result) {
    if ($result->hasErrors()) {
        // обработка ошибок

        continue;
    }

    if (!$result->getStatus()) {
        continue;
    }

	if (!$cart['shippingid']) {
		$cart['shippingid'] = 137;
		$cart['shipping_cost'] = $result->getPrice();
	}

    $result->getTariffId();
    // int(1)

    $result->getPrice();
    // double(1570)

    $min = $result->getDeliveryPeriodMin();
    // int(4)

    $max = $result->getDeliveryPeriodMax();
	if ($max > $min)
		$st = $min.'-'.$max.' дней';
	else
		$st = $min.' дней';
	$shipping_methods[137] = array(
		'shippingid'	=> 137,
		'shipping'		=> 'CDek',
		'shipping_time'	=> $st,
		'rate'			=> $result->getPrice()
	);
    // int(5)
}
*/
#echo '<pre>';
#exit(print_R($shipping_methods));
		$return['shipping_methods'] = $shipping_methods;
} catch (\Throwable $t) {
} catch (\Exception $e) {
}
	}

	$destination = $userinfo['country'] == $config['Company']['location_country'] ? 'N' : 'I';
	if ($need_shipping) {
		$shipping_methods = $db->all("SELECT * FROM shipping WHERE active='Y' AND destination='$destination' ORDER BY orderby");
#		exit("SELECT * FROM shipping WHERE active='Y' AND destination='$destination' ORDER BY orderby");
#cho '<pre>';
#echo print_R($_SESSION['user']);
#exit(print_R($config));
	}
	if ((!$config['CDek']['use_cdek'] || $config['CDek']['display_offline']) && $shipping_methods) {
		$weight = 0;
		$items_count = count($cart['products']);
		foreach ($cart['products'] as $v) {
			$weight += $v['weight'] * $v['quantity'];
		}

		foreach ($shipping_methods as $k=>$v) {
			$rate = $db->row("SELECT * FROM shipping_rates WHERE shippingid='$v[shippingid]' AND zoneid='$customer_zone' AND mintotal<='".$cart['subtotal']."' AND maxtotal>='".$cart['subtotal']."' AND minweight<='$weight' AND maxweight>='$weight' ORDER BY rate");
			if ($rate) {
				$rate_value = $rate['rate'];
				if ($rate['rate_p'])
					$rate_value += $cart['subtotal'] * $rate['rate_p'] / 100;

				if ($rate['weight_rate'])
					$rate_value += $weight * $rate['weight_rate'];

				if ($rate['item_rate'])
					$rate_value += $items_count * $rate['item_rate'];

				$shipping_methods[$k]['rate'] = $rate_value;
			} else
				unset($shipping_methods[$k]);
		}

		if ($return['shipping_methods']) {
			$shipping_methods = array_merge($return['shipping_methods'], $shipping_methods);
		}

		if ($shipping_methods) {
			if (!$cart['shippingid'])
				$cart['shippingid'] = $shipping_methods[0]['shippingid'];

			$return['shipping_methods'] = $shipping_methods;

			if ($cart['shippingid'] != 'L') {
				$found = false;
				foreach ($shipping_methods as $v)
					if ($v['shippingid'] == $cart['shippingid']) {
						$cart['shipping_cost'] = $v['rate'];
						$found = true;
					}

				if (!$found) {
					$cart['shippingid'] = $shipping_methods[0]['shippingid'];
					$cart['shipping_cost'] = $shipping_methods[0]['rate'];
				}
			}
		} else
			$cart['shippingid'] = $cart['shipping_cost'] = 0;

		if ($cart['shippingid'] == 'L')
			$cart['shipping_cost'] = 0;
	} elseif ($cart['shippingid'] == 'L')
		$cart['shipping_cost'] = 0;
	else
		$cart['shippingid'] = $cart['shipping_cost'] = 0;

	$cart['total'] += $cart['shipping_cost'];
	$tax = $db->row("SELECT * FROM taxes WHERE active='Y'");
	if ($tax) {
		$tax_rate = $db->row("SELECT r.* FROM tax_rates r LEFT JOIN tax_rate_memberships m ON m.rateid=r.rateid WHERE (m.membershipid IS NULL OR m.membershipid='".$userinfo['membershipid']."') AND r.zoneid='$customer_zone' AND r.taxid='$tax[taxid]' ORDER BY r.rate_value");
		if ($tax_rate) {
			$cart['tax_details'] = $tax;
			if ($tax_rate['rate_type'] == '%') {
				$tax_value = $cart['subtotal'] * $tax_rate['rate_value'] / 100;
			} else
				$tax_value = $tax_rate['rate_value'];

			if ($tax_rate['shipping'] && $tax_rate['rate_type'] == '%')
				$tax_value += $cart['shipping_cost'] * $tax_rate['rate_value'] / 100;

			$cart['tax'] = $tax_value;
		} else
			$cart['tax'] = 0;
	} else {
		$cart['tax_details'] = array();
		$cart['tax'] = 0;
	}

	$cart['total'] += $cart['tax'];
	if ($cart['gift_card']) {
		$old_total = $cart['total'];
		$cart['total'] -= $cart['gc']['amount_left'];
		if ($cart['total'] < 0)
			$cart['total'] = 0;

		$cart['gc_discount'] = $old_total - $cart['total'];
	}

	$payment_methods = $db->all("SELECT * FROM payment_methods WHERE enabled=1 ORDER BY orderby");
	$return['payment_methods'] = $payment_methods;

	$cart['paymentid'] = $payment_methods[0]['paymentid'];

	$_SESSION['cart'] = $return['cart'] = $cart;
	return $return;
}