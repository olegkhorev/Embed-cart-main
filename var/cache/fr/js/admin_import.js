function import_checkboxes(val) {
	if (val == 'Y')
		$ec('[name=exportForm] input').attr('checked', true);

	else
		$ec('[name=exportForm] input').attr('checked', false);

}