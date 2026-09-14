<?php
/*
Enable this to redirect to HTTPS always
*/
/*
if (empty($_SERVER['HTTPS']) || $_SERVER['HTTPS'] == "off") {
    $redirect = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
	header('HTTP/1.1 301 Moved Permanently');
	header('Location: ' . $redirect);
    exit();
}
*/
#echo '<pre>';
#exit(print_R($_SERVER['HTTP_HOST']));
header("Content-type: text/html;charset=utf-8");
#header("Access-Control-Allow-Origin: https://ec2.com");
#echo '<pre>';
#exit(print_R($_SERVER));
#exit("Access-Control-Allow-Origin: https://".$_SERVER['HTTP_ORIGIN']);
if (isset($_SERVER['HTTP_ORIGIN']))
    header("Access-Control-Allow-Origin: ".$_SERVER['HTTP_ORIGIN']);

if ($_SERVER['HTTPS'] == 'on') {
#    exit("Access-Control-Allow-Origin: https://".$_SERVER['HTTP_HOST']);
#    header("Access-Control-Allow-Origin: https://".$_SERVER['HTTP_HOST']);
} else {
#    header("Access-Control-Allow-Origin: http://".$_SERVER['HTTP_HOST']);
}
#header("Access-Control-Allow-Origin: *");
#header('Access-Control-Allow-Credentials: true');
#header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
#header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
ini_set('session.cookie_secure', 'On');
ini_set('session.cookie_httponly', 'On');
ini_set('session.cookie_samesite', 'None');
#session_start();

@ini_set('log_errors','On'); // enable or disable php error logging (use 'On' or 'Off')
@ini_set('display_errors','Off'); // enable or disable public display of errors (use 'On' or 'Off')
if (!file_exists('includes/settings.php')) {
    header('Location: install/');
    exit;
}

include 'includes/logging.php';
include 'includes/boot.php';
if (file_exists(SITE_ROOT . '/dev.php'))
    include_once(SITE_ROOT . '/dev.php');

if ($_GET['do_redirect'] && !$bot) {
    $url = $_SERVER['REQUEST_URI'];
    $url = str_replace('do_redirect=1', '', $url);
    $url = str_replace($web_dir.'/', '', $url);
#    exit($url);
    redirect($parent_site_location.$parnet_site_page.'#!'.$url);
}

if (!$is_ajax && !$bot & !in_array($get['0'], array('admin', 'paypal', 'stripe', 'invoice', 'invoice_pdf', 'intellect'))) {
    $url = $_SERVER['REQUEST_URI'];
    $url = str_replace('do_redirect=1', '', $url);
    $url = str_replace($web_dir.'/', '', $url);
#    exit($parent_site_location.$parnet_site_page.'#!'.$url);
    redirect($parent_site_location.$parnet_site_page.'#!'.$url);
}

#echo '<pre>';
#exit(print_R($_SERVER));
func_save_cart();
func_remove_cart();
function layoutTypes() {
    return array('computer', 'mobile', 'tablet');
}

function initLayoutType() {
	global $_GET, $_SESSION, $_SERVER;
    // Set the layout type.
    $layoutTypes = layoutTypes();
	$useragent = $_SERVER['HTTP_USER_AGENT'];
	if (preg_match('/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i',$useragent)||preg_match('/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i',substr($useragent,0,4))) {
		$isMobile = true;
	} else
		$isMobile = false;

	$isiPad = (bool) strpos($_SERVER['HTTP_USER_AGENT'],'iPad');
	if ($isiPad)
		$isMobile = false;

	$layoutType = $isMobile ? 'mobile' : 'computer';
	$_SESSION['is_mobile'] = ($isMobile ? 'Y' : '');
    if (!in_array($layoutType, $layoutTypes))
    	$layoutType = 'computer';

    $_SESSION['layoutType'] = $layoutType;

    return $layoutType;
}

if ($get['0'] == 'admin') {
	$device = $template['device'] = 'computer';
} else {

}

if (!$login) {
#    $user = array();
	if (!$user['city'] && $config['General']['default_city']) {
		$user['city'] = $config['General']['default_city'];
	}

	if (!$user['state'] && $config['General']['default_state']) {
		$user['state'] = $config['General']['default_state'];
	}

	if (!$user['country'] && $config['General']['default_country']) {
		$user['country'] = $config['General']['default_country'];
	}

	if (!$user['zipcode'] && $config['General']['default_zipcode']) {
		$user['zipcode'] = $config['General']['default_zipcode'];
	}
#echo '<pre>';
#echo print_R($user).'<hr>';
	$_SESSION['user'] = $user;
}

$template['get'] = $get;

if ($get['0'] == 'set_currency') {
	$tmp = $db->row("SELECT * FROM currencies WHERE active=1 AND id='".addslashes($get['1'])."'");
	if ($tmp)
		$_SESSION['current_currency'] = $tmp;

	exit;
}

if ($get['0'] == 'set_language') {
	$tmp = $db->row("SELECT * FROM languages_codes WHERE active=1 AND id='".addslashes($get['1'])."'");
	if ($tmp)
		$_SESSION['current_language'] = $tmp;

	exit;
}


$template['bread_crumbs'][] = array('/', $company_name);//.' '.lng('home page')

if (!$_SESSION['countries']) {
	$countries = $db->all("SELECT *, IF(code='US',0,1) as US, IF(code='CA',0,1) as CA FROM countries ORDER BY US, CA, country");
	$states_count = 0;
	foreach ($countries as $k=>$v) {
		$states = $db->all("SELECT * FROM states WHERE country_code='$v[code]'");
		if (!empty($states)) {
			$countries[$k]['states'] = $states;
			$states_count++;
		}
	}

	$_SESSION['countries'] = $countries;
	$_SESSION['states_count'] = $states_count;
}
#echo '<pre>';
#exit(print_R($_SESSION['countries']));
$template['states_count'] = $states_count;
$template['countries'] = $countries;

$languages = $db->all("SELECT * FROM languages_codes WHERE active=1 ORDER BY orderby, code");
if (count($languages) > 1)
	$template["languages"] = $languages;

$currencies = $db->all("SELECT * FROM currencies WHERE active=1 ORDER BY orderby, code");
if (count($currencies) > 1)
	$template["currencies"] = $currencies;

if ($config['General']['shop_closed'] == 'Y') {
	$template['page'] = get_template_contents('closed.php');
} elseif ($get['0']) {
	if ($_SESSION['substring'] && $get['0'] != 'search')
		$_SESSION['substring'] = '';

	if (empty($login)) {
		$not_allowed_pages = array('photos', 'images', 'ckeditor', 'includes', 'pages', 'templates', 'var');
		if (in_array($get['0'], $not_allowed_pages))
			redirect('/');
	}

	if ($get['0'] == 'home')
		redirect('/');

	# Check for clean URLs
	if (is_numeric($get['0']))
		$categoryid = $db->field("SELECT categoryid FROM categories WHERE categoryid='".$get['0']."' AND enabled=1");
	else
		$categoryid = $db->field("SELECT categoryid FROM categories WHERE cleanurl='".$get['0']."' AND enabled=1");
	if ($categoryid) {
		$get['0'] = 'category';
		$template['get'] = $get;
		include 'pages/category.php';
	} else {
		if ($get['0'] == 'product' && $get['1']) {
			$productid = $get['1'];
			include 'pages/product.php';
		} else {
			$productid = $db->field("SELECT productid FROM products WHERE cleanurl='".str_replace('.html', '', $get['0'])."' AND status<>2");
			if ($productid) {
				$get['0'] = 'product';
				$template['get'] = $get;
				include 'pages/product.php';
			} else {
				$script = 'pages/'.$get['0'].'.php';
				if (file_exists($script))
					include $script;
				else
					redirect('/');
			}
		}
	}
} else {
	$get['0'] = 'home';
	include SITE_ROOT . '/pages/home.php';
}

if ($device == 'mobile' && $get['0']) {
	$mobile_pages = array(
		'home', 'password', 'category', 'login', 'help', 'register', 'profile', 'search',
		'product', 'cart', 'checkout', 'invoice', 'blog', 'brands', 'page', 'wishlist', 'gift_cards'
	);

	if (!in_array($get['0'], $mobile_pages))
		redirect('/');
}

if ($get['0'] != 'admin' && $_SESSION['recently']) {
	q_load('product');
	$recently = array();
	foreach ($_SESSION['recently'] as $pid) {
		$recently[] = func_select_product($pid);
	}

	krsort($recently);
	$template['recently'] = $recently;
}

$meta_descr = $meta_keywords = $page_title = '';
if ($get['0'] == 'home' && lng('Homepage meta keywords'))
	$meta_keywords = lng('Homepage meta keywords');
elseif ($product['meta_keywords'])
	$meta_keywords = $product['meta_keywords'];
elseif ($category['meta_keywords'])
	$meta_keywords = $category['meta_keywords'];
elseif ($static_page['meta_keywords'])
	$meta_keywords = $static_page['meta_keywords'];
elseif ($brand['meta_keywords'])
	$meta_keywords = $brand['meta_keywords'];
else
	$meta_keywords = lng('Homepage meta keywords');

if ($get['0'] == 'home' && lng('Homepage meta description'))
	$meta_descr = lng('Homepage meta description');
elseif ($product['meta_description'])
	$meta_descr = $product['meta_description'];
elseif ($category['meta_description'])
	$meta_descr = $category['meta_description'];
elseif ($static_page['meta_description'])
	$meta_descr = $static_page['meta_description'];
elseif ($brand['meta_description'])
	$meta_descr = $brand['meta_description'];
else
	$meta_descr = lng('Homepage meta description');

if ($get['0'] == 'home' && lng('Homepage meta title')) {
	$page_title = lng('Homepage meta title');
}elseif ($template['product']['title_tag']) {
	$page_title = $product['title_tag'];
} elseif ($template['category']['meta_title']) {
	$page_title = $category['meta_title'];
} elseif ($template['static_page']['meta_title']) {
	$page_title = $template['static_page']['meta_title'];
} elseif ($template['brand']['meta_title']) {
	$page_title = $brand['meta_title'];
} else
	$page_title = $template['head_title'];

$template['page_title'] = $page_title;
$template['bread_crumbs_html'] = get_template_contents('bread_crumbs.php');
if ($get['0'] == 'admin') {
	if ($_SESSION['alerts']) {
		$template['alerts'] = $_SESSION['alerts'];
	}

	$template['ajax_container'] = get_template_contents('admin/ajax_container.php');
	if ($_GET['its_ajax_page'])
		$_SESSION['alerts'] = array();
} else
	$template['ajax_container'] = get_template_contents('ajax_container.php');

if ($is_ajax && !$_GET['original']) {
	$_SESSION['alerts'] = array();
	$result = array($template['ajax_container'], $page_title, $template['bread_crumbs_html'], $get['0'], $template['parentid'], $brand['brandid'], $page_title, $meta_keywords, $meta_descr);
	exit(json_encode($result));
}

$template['get'] = $get;

if (
	$get['0'] == 'home' || $get['0'] == 'cart' || $get['0'] == 'checkout' || $get['0'] == 'help' || $get['0'] == 'page' ||
	$get['0'] == 'invoice' || $get['0'] == 'search' || $get['0'] == 'category' ||
	$get['0'] == 'brands' || $get['0'] == 'product' ||
	$get['0'] == 'gift_cards' || $get['0'] == 'login' || $get['0'] == 'register'
)
	$template['is_ajax_page'] = '1';
else
	$template['is_ajax_page'] = '0';

if ($get['0'] == 'admin') {
	if ($login && $userinfo['usertype'] == 'A') {
		$template['head'] = get_template_contents('admin/head.php');
		$template['menu'] = get_template_contents('admin/menu.php');
	}

	$template['foot'] = get_template_contents('admin/foot.php');
} else {
	if ($device == 'mobile')
		$template['minicart'] = get_template_contents('common/minicart_mobile.php');
	else
		$template['minicart'] = get_template_contents('common/minicart.php');

	q_load('category');
	$template['categories_top_menu'] = func_categories_tree();
	$template['brands_menu'] = $db->all("SELECT * FROM brands WHERE active='Y' ORDER BY orderby, brandid");
	$template['head'] = get_template_contents('head.php');
	$template['left_menu'] = get_template_contents('left_menu.php');
	$template['foot'] = get_template_contents('foot.php');
	$template['css'] = array_merge(func_get_ajax_css(), $template['css']);
	$template['js'] = array_merge(func_get_ajax_js(), $template['js']);
}

if (!ADMIN_AREA)
	$template['css'][] = 'responsive';

if ($template['browser'] == 1)
	$template['css'][] = 'ie';
elseif ($template['browser'] == 3)
	$template['css'][] = 'safari';
elseif ($template['browser'] == 2) {

} elseif ($template['browser'] == 4)
	$template['css'][] = 'opera';
else
	$template['css'][] = 'ff';

if ($bot == 'Y')
	$template['css'][] = 'bot';

if ($device == 'mobile') {
	$template['css'][] = 'mobile';
	$template['js'][] = 'mobile';
}

if ($get['0'] == 'admin')
	$main = get_template_contents('admin/body.php');
else {
	$template['stripe_pkey'] = $db->field("SELECT param2 FROM payment_methods WHERE paymentid=7");
	$main = get_template_contents('body.php');
}

echo $main;

$_SESSION['alerts'] = array();