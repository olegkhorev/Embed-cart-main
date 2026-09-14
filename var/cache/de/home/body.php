<?php if ($banners) {?>
<?php /* ?> Page container assign <?php */ ?>
</div>
</div>
<div class="clear"></div>
</div>
</div></div>

<div class="banners-homepage">
<?php foreach ($banners as $k=>$v) {?>
<div id="hp_banner_<?php echo $k;?>" class="slide<?php if (!$k) {?> active<?php } ?>">
<?php if ($v['url']) {?>
<a href="<?php echo escape($v['url'], 2);; ?>">
<?php } ?>
<img src="/images/spacer.gif" class="hp-banner" style="background: url('<?php echo $v['image_url'];?>');" alt="<?php echo escape($v['alt'], 2);; ?>" />
<?php if ($v['url']) {?>
</a>
<?php } ?>
</div>
<?php /* ?><div style="background: url('<?php echo $v['image_url'];?>');" class="hp-banner banner-<?php echo $k;?><?php if ($k > 0) {?> hidden<?php } ?>"></div><?php */ ?>
<?php } ?>

    <div class="arrow arrow-left">
    <span></span>
    </div>
    <div class="arrow arrow-right">
    <span></span>
    </div>

<?php /* ?>
<?php if (count($banners) > 1) {?>
<div id="banners_nav">
<?php for ($i = 0; $i < count($banners); $i++) {?>
<img src="<?php echo $current_location;?>/images/spacer.gif" alt="" id="g2b_<?php echo $i;?>"<?php if ($i == 0) {?> class="active"<?php } ?> />
<?php } ?>
</div>
<?php } ?>
<?php */ ?>
</div>

<div class="page-container page-container-afterbanner">
<div class="content">
	<div id="center" class="no_left_menu">
<?php } ?>
<?php /* ?>
<div class="homepage-banners">
<img src="/images/new/banner1.jpg" alt="" /><img src="/images/new/banner_right.jpg" alt="" />
</div>
<?php */ ?>
<div id="dcart"><img src="<?php echo $current_location;?>/images/dcart.png" alt="" /><br />Bewegen Produkt hier</div>
<?php 
if (lng('Site title'))
	echo "<br /><h1>".lng('Site title')."</h1>";

if (lng('Site description'))
	echo "<br /><p>".lng('Site description')."</p>";
?>

<?php /* ?>
<div class="testimonial">
<h2>Erfahrungsberichte</h2>
<div class="message"><?php echo $testimonial['message'];?></div>
<div class="name"><?php echo $testimonial['name'];?></div>
<?php if ($testimonial['url']) {?>
<div class="url"><a rel="nofollow" href="<?php echo $testimonial['url'];?>" target="_blank"><?php echo $testimonial['url'];?></a></div>
<?php } ?>
<div class="test-links">
<a class="all-link" href="/testimonials">Alle testimonials</a>
<a class="leave-link" href="/testimonials/new">Erfahrungsbericht schreiben</a>
</div>
</div>
<?php */ ?>

<?php /* ?> Page container assign <?php */ ?>
</div>
</div>
<div class="clear"></div>
</div>

<div class="page-container page-container-testimonials">
<div class="content">
	<div id="center" class="no_left_menu">

<div class="testimonial">
<img src="/images/new/test.png" class="test-image" alt="Unsere Referenzen" />
<h2>Erfahrungsberichte</h2>
<div class="message"><?php echo $testimonial['message'];?></div>
<div class="name"><?php echo $testimonial['name'];?></div>
<?php if ($testimonial['url']) {?>
<div class="url"><a rel="nofollow" href="<?php echo $testimonial['url'];?>" target="_blank"><?php echo $testimonial['url'];?></a></div>
<?php } ?>
<div class="test-links">
<a class="all-link" href="/testimonials">Alle testimonials</a>
<a class="leave-link" href="/testimonials/new">Erfahrungsbericht schreiben</a>
</div>
<div class="clear"></div>
</div>
<?php /* ?> End page container <?php */ ?>
</div>
</div>
<div class="clear"></div>
</div>

<div id="home-tabs">
<ul class="home-tabs">
 <li class="tab-1 active" data-tab="1">Empfohlene Produkte</li>
 <li class="tab-2" data-tab="2">Bestseller</li>
 <li class="tab-3" data-tab="3">Am meisten angesehen</li>
 <li class="tab-4" data-tab="4">Neuankömmlinge</li>
</ul>
</div>
<?php /* ?>
<button class="prev-siema">prev</button>
<button class="next-siema">next</button>
<?php */ ?>

<?php /* ?> Start page container <?php */ ?>
<div class="page-container page-container-2">
<div class="content">
	<div id="center" class="no_left_menu">

<?php if ($featured_products) {?>
 <?php $tag_id = "featured_products"; $products = $featured_products; $per_row = 4;; ?>
<div class="tab-content" id="tab-1">
<h3 class="its4mobile">Empfohlene Produkte</h3>
 <?php include SITE_ROOT."/var/cache/de/common/products.php";?>
</div>
<?php } ?>

<?php if ($bestsellers) {?>
 <?php $tag_id = "bestsellers_products"; $products = $bestsellers; $per_row = 4;; ?>
<div class="tab-content hidden" id="tab-2">
<h3 class="its4mobile">Bestseller</h3>
 <?php include SITE_ROOT."/var/cache/de/common/products.php";?>
</div>
<?php } ?>

<?php if ($most_viewed) {?>
 <?php $tag_id = "most_viewed"; $products = $most_viewed; $per_row = 4;; ?>
<div class="tab-content hidden" id="tab-3">
<h3 class="its4mobile">Am meisten angesehen</h3>
 <?php include SITE_ROOT."/var/cache/de/common/products.php";?>
</div>
<?php } ?>

<?php if ($new_arrivals) {?>
 <?php $tag_id = "new_arrivals"; $products = $new_arrivals; $per_row = 4;; ?>
<div class="tab-content hidden" id="tab-4">
<h3 class="its4mobile">Neuankömmlinge</h3>
 <?php include SITE_ROOT."/var/cache/de/common/products.php";?>
</div>
<?php } ?>

<?php if ($last_news) {?>
<?php /* ?> Page container assign <?php */ ?>
</div>
</div>
<div class="clear"></div>
</div>

<div class="page-container page-container-news">
<div class="content">
	<div id="center" class="no_left_menu">

<div class="news-list">
<h2>Durchsuchen Sie unsere news</h2>
<?php foreach ($last_news as $b) {?>
<div class="news-item">
<?php $url = $current_location.'/news/'.($b['cleanurl'] ? $b['cleanurl'].'.html' : $b['newsid']);; ?>
<?php 
	if ($b['imageid']) {
		echo '<a class="ajax_link" href="'.$url.'">';
		$image = $b;
		$image['new_width'] = 250;
		$image['new_height'] = 200;
		include SITE_ROOT . '/includes/news_image.php';
		echo '</a>';
	}
?>
<a class="ajax_link" href="<?php echo $url;?>"><h5><?php echo $b['title'];?> (<span class="date"><?php  echo date($date_format, $b['date']); ?></span>)</h5></a>
<div class="short-descr"><?php echo $b['descr'];?></div>
<br />
<a class="news-more ajax_link" href="<?php echo $url;?>">Sehen Sie vollen Artikel</a>
</div>
<div class="clear"></div>
<?php } ?>
<a href="/news" class="ajax_link">Alle news</a>
<br /><br />
</div>
<?php } ?>

<?php if ($last_blog) {?>
<?php /* ?> Page container assign <?php */ ?>
</div>
</div>
<div class="clear"></div>
</div>

<div class="page-container page-container-blog">
<div class="content">
	<div id="center" class="no_left_menu">

<div class="news-list">
<h2>Durchsuchen Sie unsere blog</h2>
<div class="news-item">
<?php $url = $current_location.'/blog/'.($last_blog['cleanurl'] ? $last_blog['cleanurl'].'.html' : $last_blog['blogid']);; ?>
<?php 
	if ($last_blog['imageid']) {
		echo '<a class="ajax_link" href="'.$url.'">';
		$image = $last_blog;
	$image['new_width'] = 250;
	$image['new_height'] = 200;
	include SITE_ROOT . '/includes/blog_image.php';
		echo '</a>';
	}
?>
<a class="ajax_link" href="<?php echo $url;?>"><h5><?php echo $last_blog['title'];?> (<span class="date"><?php  echo date($date_format, $last_blog['date']); ?></span>)</h5></a>
<div class="short-descr"><?php echo $last_blog['descr'];?></div>
<br />
<a class="news-more ajax_link" href="<?php echo $url;?>">Sehen Sie die vollständigen blog</a>
</div>
<div class="clear"></div>

<a href="/blog" class="ajax_link">Alle blogs</a>
<br /><br />
</div>
<?php } ?>
