(function($) {
"use strict";
	$ec('#data_type').change(function() {
		if ($ec(this).val() == 'g') {
			$ec('#data_view_type').html("<option value='s'>Select-box</option><option value='p'>Quadrate</option>");
		} else {
			$ec('#data_view_type').html("<option value='t'>Textbereich</option><option value='i'>Eingabefeld</option>");
		}
	});
})($);
