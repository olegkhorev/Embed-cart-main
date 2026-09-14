(function($) {
"use strict";
	$ec('.define-var-wh').on('click', function() {
		var variantid = $ec(this).data('variantid');
		$ec('.warehouses').hide();
		$ec('#warehouses-'+variantid).fadeIn();
	});
})($);

function wholetoggle(id, el) {
	$ec('#wholesale-'+id).toggle(0,
		function() {
		$ec(this).is(":visible") ? el.html('[-]') : el.html('[+]');
		}
	);
}

function remove_wp(id) {
	$ec('#wp_tr-'+id).addClass('removed_wp');
	$ec('#wp_tr-'+id+' .removed input').val('Y');
	$ec('#wp_tr-'+id+' .removed img[alt=Remove]').hide();
	$ec('#wp_tr-'+id+' .removed .wprem').show();
	if ($ec('#wp_tr-'+id+' .removed .help').size() > 0) {
		$ec('#wp_tr-'+id+' .removed .help').show();
	} else {
		$ec('#wp_tr-'+id+' .removed').append('<div class="help">Cliquez sur le <b>mise à Jour</b><br />bouton pour valider<br />supprimer</div>');
	}

	setTimeout('hidewphelp()', 1000);
}
function hidewphelp() {
	$ec('.removed .help').fadeOut();
}
function restore_wp(id) {
	$ec('#wp_tr-'+id).removeClass('removed_wp');
	$ec('#wp_tr-'+id+' .removed input').val('');
	$ec('#wp_tr-'+id+' .removed .wprem').hide();
	$ec('#wp_tr-'+id+' .removed img[alt=Remove]').show();
}
function all_possible() {
	$ec('.new_variant option').attr('selected', true);
	submitForm(document.vform, 'add');
}