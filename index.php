<?php
	$name = $_POST["name"];
	$email = $_POST["email"];
	$message = $_POST["message"];
	$human = $_POST['human'];
	$from = "From: CarmenPaun";
	$to = "paun.carmen94@gmail.com";
	$subject = "New message from CarmenPaun";

	$body = "From: $name\n E-Mail: $email\n Message:\n $message";

	if ($_POST['submit']) {
		if ($name != '' && $email != '') {
			if ($human == '4') {
				if (mail ($to, $subject, $body, $from)) {
					echo "<p>Your message has been sent!</p>";
				} else {
					echo "<p>Something went wrong. Try again please!</p>";
				}
			} else if ($human != '4') {
				echo '<p>You have answered the anti-spam question incorrectly!</p>';
			}
		} else {
			echo '<p>You need to fill in all required fields!</p>';
		}
	}

?>