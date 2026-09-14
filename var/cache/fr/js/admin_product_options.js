(function($) {
"use strict";
	$ec('#data_type').change(function() {
		if ($ec(this).val() == 'g') {
			$ec('#data_view_type').html("<option value='s'>Sélectionnez la boîte</option><option value='p'>Carrés</option>");
		} else {
			$ec('#data_view_type').html("<option value='t'>Zone de texte</option><option value='i'>Zone de saisie</option>");
		}
	});
})($);
