<div class="page-container">
<div class="withleftmenu">
<div class="left_filter">
<h2>Schmale Auswahl</h2>
<div id="left_filter">
<div class="cssload-container"><div class="cssload-speeding-wheel"></div></div>

</div>
</div>

<div class="main-container">
<div id="bread_crumbs_container"><?php echo $bread_crumbs_html;?></div>

<div class="content" align="left">
<?php if (false && !$no_left_menu) {?>
<?php echo $left_menu;;?>
<?php } ?>
	<div id="center"<?php if (true || $no_left_menu == 'Y') {?> class="no_left_menu"<?php } ?>>
<?php echo $page;?>
	</div>
</div>

<div class="clear"></div>
</div>
</div>
</div>
</div>
<?php if ($alerts) {?>
 <div class="alerts"><span onclick="javascript: $('.alerts').slideUp();"><b>X</b></span>
 <?php foreach ($alerts as $v) {?>
  <?php if ($v['type'] == 'e') {?><div class="error">Error: <?php echo $v['content'];?></div><?php } else  { ?><?php echo $v['content'];?><br><?php } ?><br>
 <?php } ?>
 </div>
<?php } ?>
