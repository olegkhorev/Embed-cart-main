(function($) {
"use strict";
  $ec(document).ready(function() {
    ec_states_actions();
  });
})($);
//alert('1');
function ec_states_actions() {
  let states = ec_states;
	$ec('#country').unbind('change').change(function() {
		console.log('Country changed');
		bc = false;
		if (states[$ec(this).val()]) {
			var s = states[$ec(this).val()]['states'],
				html = '<select name="posted_data[state]" id="state">';
			for (var x in s)
				html += '<option value="'+s[x]['code']+'"'+(s[x]['code'] == user_state ? ' selected' : '')+'>'+s[x]['state']+'</option>';

			html += '</select>';
			if ($ec('.admin-area').size())
				$ec('#state').closest('td').html('<div class="select-title">Staat</div>'+html);
			else
				$ec('#state').parent().html(html);

			$ec('#state').unbind('change').change(function() {
				user_state = $ec(this).val();
			});
		} else {
			if ($ec('.admin-area').size())
				$ec('#state').closest('td').html('<input type="text" name="posted_data[state]" id="state" value="'+user_state+'" /></td>');
			else
				$ec('#state').parent().html('<input type="text" name="posted_data[state]" id="state" value="'+user_state+'" /></td>');

			$ec('#state').unbind('keyup').on('keyup', function() {
				user_state = $ec(this).val();
			});

			if ($ec('.admin-area').size()) {
				try {
					custom_elements();
					reinitialize_mdl();
				} catch (err) {
				}
			}
		}
	});

	$ec('#b_country').unbind('change').change(function() {
		console.log('Country changed');
		bc = false;
		if (states[$ec(this).val()]) {
			var s = states[$ec(this).val()]['states'],
				html = '<select name="posted_data[b_state]" id="b_state">';

			for (var x in s)
				html += '<option value="'+s[x]['code']+'"'+(s[x]['code'] == user_state_b ? ' selected' : '')+'>'+s[x]['state']+'</option>';

			html += '</select>';
			$ec('#b_state').parent().html(html);

			$ec('#b_state').unbind('change').change(function() {
				user_state_b = $ec(this).val();
			});
		} else {
			$ec('#b_state').parent().html('<input type="text" name="posted_data[b_state]" id="b_state" required value="'+user_state+'" /></td>');

			$ec('#b_state').unbind('keyup').on('keyup', function() {
				user_state_b = $ec(this).val();
			});
		}
	});

	$ec('#country_checkout').unbind('change').change(function() {
		console.log('Country changed');
		bc = false;
		if (states[$ec(this).val()]) {
			var s = states[$ec(this).val()]['states'],
				html = '<select name="posted_data[state]" id="state_checkout">';

			for (var x in s)
				html += '<option value="'+s[x]['code']+'"'+(s[x]['code'] == user_state ? ' selected' : '')+'>'+s[x]['state']+'</option>';

			html += '</select>';
			$ec('#state_checkout').parent().html(html);
			$ec('#state_checkout').unbind('change').change(function() {
				user_state = $ec(this).val();
			});
		} else {
			$ec('#state_checkout').parent().html('<input type="text" name="posted_data[state]" id="state_checkout" value="'+user_state+'" /></td>');
			$ec('#state_checkout').unbind('keyup').on('keyup', function() {
				user_state = $ec(this).val();
			});
		}

		try {
			checkout_changes();
		} catch (err) {
		}
	});

	setTimeout(function() {
		$ec('#country_checkout').trigger('change');
		$ec('#country').trigger('change');
		$ec('#b_country').trigger('change');
	}, 100);
}