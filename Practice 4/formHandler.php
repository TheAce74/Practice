<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from = 'domainName';

$email_subject = 'New Form Submission';

$email_body = "User Name: $name.\n".
                "User Email: $vistor_email.\n".
                "User Subject: $subject.\n".
                "User Message: $message.\n";

$to = 'info@domainNameOfTheWebsite'; //You can also use "noreply@" or "contact@" to replace the "info@", but just make sure you register it corectly in the hosting Cpanel.

$headers = "from: $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n";


mail($to,$email_subject,$email_body,$headers);

header(location: contact.html);
?>