<?php
if ($login) {
	if ($is_ajax)
		exit(lng('You are already logged in. Please, refresh the page'));

	redirect('/'.$parnet_site_page.'#!profile');
}

q_load('user');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	extract($_POST);
	if ($db->field("SELECT COUNT(*) as cnt FROM users WHERE email='".addslashes($email)."'")) {
		$_SESSION['user'] = $_POST;
		if ($is_ajax)
	    	exit('E');

		$_SESSION['alerts'][] = array(
			'type'		=> 'e',
			'content'	=> 'Your  E-mail already registered.<br><a href="#" onclick="return login();">Login</a> or <a href="#" onclick="return restore_password()">recover password</a>'
		);

		redirect('/'.$parnet_site_page.'#!register');
	} else {
		$salt = generateSalt();
		$insert = array(
			'email'			=> $email,
			'pending_membershipid'	=> $pending_membershipid,
			'password'		=> md5($password.$salt),
			'firstname'		=> $firstname,
			'lastname'		=> $lastname,
			'address'		=> $address,
			'city'			=> $city,
			'state'			=> $state,
			'country'		=> $country,
			'zipcode'		=> $zipcode,
			'phone'			=> $phone,
			'status'		=> 1,
			'salt'			=> $salt
		);

		$userid = $db->array2insert('users', $insert);

		$_SESSION['alerts'][] = array(
			'type'		=> 'i',
			'content'	=> 'Your account was created successfully'
		);

		$template['userinfo'] = $insert;
		$message = get_template_contents('mail/registered.php');
		$subject = $config['Company']['company_name'].': '.lng('Registration completed');
		func_mail($insert['firstname'].' '.$insert['lastname'], $insert['email'], '', $subject, $message);

		func_login($userid);
    	$_SESSION['user'] = '';
		if ($is_ajax)
	    	exit('G');

		redirect('/'.$parnet_site_page.'');
	}
}

if (empty($login) && !empty($social_login)) {
	if (!empty($social_login['profile']['name']['givenName'])) {
		$userinfo['firstname'] = $social_login['profile']['name']['givenName'];
		$userinfo['lastname'] = $social_login['profile']['name']['familyName'];
	} else {
		$tmp = explode(" ", $social_login['profile']['displayName']);
		$userinfo['firstname'] = $tmp['0'];
		$userinfo['lastname'] = $tmp['1'];
	}

	$userinfo['email'] = $social_login['profile']['verifiedEmail'];
	$template['userinfo'] = $userinfo;
}

$template['memberships'] = $db->all("SELECT * FROM memberships WHERE active='Y' ORDER BY orderby, membership");
if ($is_ajax && !$_GET['its_ajax_page']) {
	exit(get_template_contents('register/body.php'));
} else {
	$template['page'] = get_template_contents('register/body.php');
	$template['is_register_page'] = true;
}