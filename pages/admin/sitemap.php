<?php

$template['location'] .= ' &gt; '.lng('Google sitemap');
$template['head_title'] = lng('Google sitemap').' :: '.$template['head_title'];

if ($get['2'] == 'generate') {
	ini_set('memory_limit', '524288000');
	set_time_limit(3600);
	session_write_close();
	$txt = '';
	$xml = '<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
';

//	$site_url = $parent_site_location.$parnet_site_page.'#!';
	$site_url = $http_location.$web_dir.'/';
	$search_keywords = file(SITE_ROOT.'/search_keywords.txt');
	if ($search_keywords) {
		foreach ($search_keywords as $v) {
			$v = str_replace("\r\n", "", $v);
			$xml .= '<url><loc>'.$site_url.'search?q='.$v.'&do_redirect=1</loc><lastmod>'.date('Y-m-d').'</lastmod><changefreq>weekly</changefreq><priority>1</priority></url>
';
			$txt .=  $site_url.'search?q='.$v.'&do_redirect=1
';
		}
	}

	$categories = $db->all("SELECT categoryid, cleanurl FROM categories");
	foreach ($categories as $v) {
		if ($v['cleanurl']) {
			$xml .= '<url><loc>'.$site_url.''.$v['cleanurl'].'?do_redirect=1</loc><lastmod>'.date('Y-m-d').'</lastmod><changefreq>weekly</changefreq><priority>1</priority></url>
';
			$txt .=  $site_url.''.$v['cleanurl'].'?do_redirect=1
';
		} else {
			$xml .= '<url><loc>'.$site_url.'category/'.$v['categoryid'].'?do_redirect=1</loc><lastmod>'.date('Y-m-d').'</lastmod><changefreq>weekly</changefreq><priority>1</priority></url>
';
			$txt .=  $site_url.'category/'.$v['categoryid'].'?do_redirect=1
';
		}
	}

	$products = $db->all("SELECT productid , cleanurl FROM products");
	foreach ($products as $v) {
		if ($v['cleanurl']) {
			$xml .= '<url><loc>'.$site_url.''.$v['cleanurl'].'.html?do_redirect=1</loc><lastmod>'.date('Y-m-d').'</lastmod><changefreq>weekly</changefreq><priority>1</priority></url>
';
			$txt .=  $site_url.''.$v['cleanurl'].'.html?do_redirect=1
';
		} else {
			$xml .= '<url><loc>'.$site_url.'product/'.$v['productid'].'?do_redirect=1</loc><lastmod>'.date('Y-m-d').'</lastmod><changefreq>weekly</changefreq><priority>1</priority></url>
';
			$txt .=  $site_url.'product/'.$v['productid'].'?do_redirect=1
';
		}	
	}

	$brands = $db->all("SELECT brandid, cleanurl FROM brands");
	foreach ($brands as $v) {
		$xml .= '<url><loc>'.$site_url.'brands/'.($v['cleanurl'] ? $v['cleanurl'] : $v['brandid']).'?do_redirect=1</loc><lastmod>'.date('Y-m-d').'</lastmod><changefreq>weekly</changefreq><priority>1</priority></url>
';
		$txt .=  $site_url.'brands/'.($v['cleanurl'] ? $v['cleanurl'] : $v['brandid']).'?do_redirect=1
';
	}

	$pages = $db->all("SELECT pageid, cleanurl FROM pages");
	foreach ($pages as $v) {
		$xml .= '<url><loc>'.$site_url.'page/'.($v['cleanurl'] ? $v['cleanurl'].'.html' : $v['pageid']).'?do_redirect=1</loc><lastmod>'.date('Y-m-d').'</lastmod><changefreq>weekly</changefreq><priority>1</priority></url>
';
		$txt .=  $site_url.'page/'.($v['cleanurl'] ? $v['cleanurl'].'.html' : $v['pageid']).'?do_redirect=1
';
	}

	$xml .= '</urlset>';

	$fp = fopen(SITE_ROOT.'/sitemap.xml', 'w');
	fputs($fp, $xml);
	fclose($fp);

	$fp = fopen(SITE_ROOT.'/sitemap.txt', 'w');
	fputs($fp, $txt);
	fclose($fp);

	session_start();
	$_SESSION['alerts'][] = array(
		'type'		=> 'i',
		'content'	=> lng('Your sitemap successfully generated')
	);

	redirect('/admin/sitemap');
}

$template['page'] = get_template_contents('admin/pages/sitemap.php');
$template['css'][] = 'admin_sitemap';