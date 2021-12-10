<?php

if(isset($_POST['email'])){

    // Email Information
   $admin_email = "contactfrancis@chigoziefrancis-portfolio.dev";
   $name = $_POST['name'];
   $subject = $_POST['subject'];
   $email = $_POST['email'];
   $phone = $_POST['phone'];
   $message = $_POST['text'];

   // send email
   mail($admin_email, .$subject, $message .'-' .$phone, "From:" .$email);

   header('Location:/dist/contact.html');
}

?>