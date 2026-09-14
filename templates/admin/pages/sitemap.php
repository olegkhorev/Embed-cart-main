<h1>{lng[Google sitemap]}</h1>
Register in Google webmaster and submit .txt and .xml file there.<br /><br />
You can submit sitemap to other search engines too.<br /><br />

<button onclick="self.location='{$current_location}/admin/sitemap/generate'">{lng[Generate sitemap]}</button>

<br /><br />
Already generated sitemaps links:<br />
<a target="_blank" href="<?php echo $current_location; ?>/sitemap.xml"><?php echo $current_location; ?>/sitemap.xml</a><br />
<a target="_blank" href="<?php echo $current_location; ?>/sitemap.txt"><?php echo $current_location; ?>/sitemap.txt</a><br />