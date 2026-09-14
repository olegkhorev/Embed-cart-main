<?php
if (isset($_SERVER['HTTP_ORIGIN']))
    header("Access-Control-Allow-Origin: ".$_SERVER['HTTP_ORIGIN']);

#echo '<pre>';
#exit(print_R($get));
/*
 *f26322
*/

$admin_theme_color = $_GET['theme_color'];
$theme_color = $_GET['theme_color'];
$theme_color_2 = $_GET['theme_color_2'];
if (!$theme_color) {
	if ($config['theme_color']) {
		$theme_color = $config['theme_color'];
		$theme_color_2 = $config['theme_color_2'];
	}
?>
<link rel="stylesheet" href="<?php echo $current_location; ?>/files/colorpicker/css/colorpicker.css" type="text/css" />
<style>
.colorpicker {
	z-index: 200;
}
.theme_color {
	width: 400px;
	height: 280px;
	padding: 10px;
	background: #fff;
	border-radius: 10px 10px 0px 0px;
	position: fixed;
	right: 90px;
	bottom: -260px;
	z-index: 100;
	border: 1px solid #ccc;
	border-bottom: 0;
	transition: all .4s ease 0s;
}
.admin-area .theme_color {
	bottom: -240px;
	width: 222px;
}
.admin-area .theme_color h2 {
	line-height: 20px;
}
.admin-area .theme_color h3 {
	line-height: 20px;
    padding: 5px 0 5px 10px;
    margin: 5px 0 5px 0;
}
.theme_color.active {
	bottom: 0;
}
.admin-area .theme_color.active {
	bottom: 0px;
	height: 300px;
}
.theme_color h2 {
	cursor: pointer;
	margin: -10px -10px 0 -10px;
	padding: 10px;
    color: #fff;
border-radius: 10px 10px 0px 0px;
background: var(--theme-color); /* Old browsers */
}
.admin-area .theme_color h2 {
	background: var(--blue);
}
.admin-area .theme_color table tr:last-child > td:last-child {
	display: none;
}
.pre-made-colors, .pre-made-colors-2 {
	padding: 7px 0 0 6px;
}
.pre-made-colors i, .pre-made-colors-2 i {
	float: left;
	width: 30px;
	height: 30px;
	margin: 0 1px 1px 0;
	cursor: pointer;
}
</style>
<script type="text/javascript" src="<?php echo $current_location; ?>/files/colorpicker/js/colorpicker.js"></script>

<div class="theme_color">
<h2>Design theme color</h2>
<table>
	<tr>
		<td width="50%">
<h3>Main color</h3>
<div class="pre-made-colors">
<?php
if ($get['0'] == 'admin') {
	$colors = '#4caf50
#287bff
#013372
#358a69
#66b132
#cedf17
#fabd02
#f2a205
#e65100
#ff6f00
#cc080c
#b3102d
#89114f
#55166d
#000000
#777777
#aaaaaa
#276670
';
} else {
	$colors = '#E65100
#2196f3
#4caf50
#8c8c8c
#ffb300
#009688

#e91e63
#f44336
#9c27b0

#c0ca33

#795548

#4760E9
#FD7C6F
#1bbf3f
#ff1605
#9C13C5
#276670

#000000
';
}
/*
 *
#1482DF
#4324A3
#4760E9
#9C13C5
#947D46
#3197E9
*/
$colors = explode('#', $colors);
foreach ($colors as $v) {
#	$v = str_replace()
	if ($v)
		echo '<i rel="'.$v.'" style="background: #'.$v.';"></i>';
}
?>
</div>
<div class="clear"></div>
<br />
<?php
if ($get['0'] == 'admin') {
?>
<input type="text" id="theme_color" style="width: 175px; margin: 5px 0 0 5px;" value="<?php if ($admin_theme_color) echo $admin_theme_color; else echo "4caf50"; ?>" style="margin: 10px 0 10px 0;"/>
<?php
} else {
?>
<input type="text" id="theme_color" style="width: 175px; margin: 5px 0 0 5px;" value="<?php if ($theme_color) echo $theme_color; else echo "4caf50"; ?>" style="margin: 10px 0 10px 0;"/>
<?php
}
?>
		</td>
		<td width="50%">
<h3>Seconday color</h3>
<div class="pre-made-colors-2">
<?php
$colors = '#2e2e2e
#0d47a1
#1b5e20
#303030
#ff6f00
#004d40

#880e4f
#b71c1c
#9c27b0

#827717
#3e2723

#0e2f54
#8A3219
#003d02
#380e0c
#450b57
#276670

#000000
';
/*
 *
#1068B2
#361D82
#394DBA
#7D0F9E
#9D395E
#212744
*/
$colors = explode('#', $colors);
foreach ($colors as $v) {
#	$v = str_replace()
	if ($v)
	echo '<i rel="'.$v.'" style="background: #'.$v.';"></i>';
}
?>
</div>
<div class="clear"></div>
<br />
<input type="text" id="theme_color_2" style="width: 175px; margin: 5px 0 0 5px;" value="<?php if ($theme_color_2) echo $theme_color_2; else echo "333333"; ?>" style="margin: 10px 0 10px 0;"/>
		</td>
	</tr>
</table>

<button style="float: left; margin: 5px 10px 0 5px;">Apply</button><button class="reset" style="float: left; margin: 5px 0 0 0;">Cancel</button>

</div>
<script>
$ec('.theme_color h2').click(function() {
	$ec('.theme_color').toggleClass('active');
});
/*
$ec('#theme_color').ColorPicker({
	onSubmit: function(hsb, hex, rgb, el) {
		$ec(el).val(hex);
		$ec(el).ColorPickerHide();
	},
	onBeforeShow: function () {
		$ec(this).ColorPickerSetColor(this.value);
	},
	onChange: function (hsb, hex, rgb) {
		$ec('#theme_color').val(hex);
	}
})
.bind('keyup', function(){
	$ec(this).ColorPickerSetColor(this.value);
});

$ec('#theme_color_2').ColorPicker({
	onSubmit: function(hsb, hex, rgb, el) {
		$ec(el).val(hex);
		$ec(el).ColorPickerHide();
	},
	onBeforeShow: function () {
		$ec(this).ColorPickerSetColor(this.value);
	},
	onChange: function (hsb, hex, rgb) {
		$ec('#theme_color_2').val(hex);
	}
})
.bind('keyup', function(){
	$ec(this).ColorPickerSetColor(this.value);
});
*/

$ec('.pre-made-colors i').click(function() {
	if ($ec('.admin-area').size()) {
		$ec('#theme_color').val($ec(this).attr('rel'));
		$ec('.theme_color button:not(.reset)').click();
	} else {
		$ec('#theme_color').val($ec(this).attr('rel'));
		$ec('.theme_color button:not(.reset)').click();
	}
});

$ec('.pre-made-colors-2 i').click(function() {
	$ec('#theme_color_2').val($ec(this).attr('rel'));
	$ec('.theme_color button:not(.reset)').click();
});

$ec('.theme_color button').click(function() {
	var url_add = '';
	if ($ec('.admin-area').size())
		url_add = '&admin=1';

	if ($ec(this).hasClass('reset')) {
		if ($ec('.admin-area').size())
			$ec('#theme_color').val('4caf50');
		else {
			$ec('#theme_color').val('4caf50');
			$ec('#theme_color_2').val('333333');
		}

		$ec('#custom_style').remove();
		$ec.ajax({
			url: '<?php echo $current_location; ?>/theme.php?theme_color=reset'+url_add
		}).done(function(r) {
		});

		return;
	}

	$ec.ajax({
		url: '<?php echo $current_location; ?>/theme.php?theme_color='+$ec('#theme_color').val()+'&theme_color_2='+$ec('#theme_color_2').val()+url_add
	}).done(function(r) {
		$ec('#custom_style').remove();
		if ($ec('.admin-area').size()) {
			$ec('body').append('<style id="custom_style">:root {--blue: #'+$ec('#theme_color').val()+'}</style>');
		} else
			$ec('body').append('<style id="custom_style">:root {--theme-color: #'+$ec('#theme_color').val()+';--theme-color-2: #'+$ec('#theme_color_2').val()+';}</style>');
	});
});
</script>
<?php
} else {
include 'includes/boot.php';
if (!$config['Design']['design_theme_color'])
	exit;

/*
$hex = "#".$theme_color;
list($r, $g, $b) = sscanf($hex, "#%02x%02x%02x");
*/
if ($_GET['admin'] && $_GET['theme_color'] == 'reset') {
	$db->query("DELETE FROM config WHERE name='admin_theme_color'");
	exit;
} elseif ($_GET['theme_color'] == 'reset') {
	$db->query("DELETE FROM config WHERE name='theme_color'");
	$db->query("DELETE FROM config WHERE name='theme_color_2'");
	exit;
}

if (DEMO) {
} else {
//	$db->query("DELETE FROM config WHERE name='theme_css'");
//	$db->query("INSERT INTO config SET name='theme_css', value='".$name."'");
	if ($_GET['admin']) {
		$db->query("DELETE FROM config WHERE name='admin_theme_color'");
		$db->query("INSERT INTO config SET name='admin_theme_color', value='".$theme_color."'");
	} else {
		$db->query("DELETE FROM config WHERE name='theme_color'");
		$db->query("DELETE FROM config WHERE name='theme_color_2'");
		$db->query("INSERT INTO config SET name='theme_color', value='".$theme_color."'");
		$db->query("INSERT INTO config SET name='theme_color_2', value='".$theme_color_2."'");
	}
}

#exit($current_location.'/images/themes/'.$name.'.css');
}