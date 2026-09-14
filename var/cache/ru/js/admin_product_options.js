(function($) {
"use strict";
	$ec('#data_type').change(function() {
		if ($ec(this).val() == 'g') {
			$ec('#data_view_type').html("<option value='s'>Поле выбора</option><option value='p'>Квадраты</option>");
		} else {
			$ec('#data_view_type').html("<option value='t'>Текстовая область</option><option value='i'>Поле ввода</option>");
		}
	});
})($);
