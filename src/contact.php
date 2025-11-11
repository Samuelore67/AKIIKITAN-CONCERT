<?php
// contact.php — backend script for handling contact form

// 1️⃣ Check if form was submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get and sanitize inputs
    $name = htmlspecialchars(trim($_POST["name"] ?? ""));
    $email = htmlspecialchars(trim($_POST["email"] ?? ""));
    $message = htmlspecialchars(trim($_POST["message"] ?? ""));

    // 2️⃣ Validate
    if (empty($name) || empty($email) || empty($message)) {
        echo "<script>alert('Please fill in all fields.'); window.history.back();</script>";
        exit;
    }

    // 3️⃣ Setup message details
    $to = "akiikitanconcert@gmail.com"; // 🔹 CHANGE this to your email
    $subject = "🎵 New Message from Akiikitan Concert Website";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email\r\nReply-To: $email";

    // 4️⃣ Try sending the email
    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('✅ Thank you, $name! Your message has been sent successfully.'); window.location.href='index.html#contact';</script>";
    } else {
        echo "<script>alert('❌ Sorry, there was a problem sending your message. Try again later.'); window.history.back();</script>";
    }
}
?>

<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = urlencode($_POST["name"]);
    $email = urlencode($_POST["email"]);
    $message = urlencode($_POST["message"]);

    $whatsappNumber = "2349050766830"; // your WhatsApp number
    $text = "Hello Akiikitan Team,%0A%0AYou have a new message from the website:%0A%0AName: $name%0AEmail: $email%0AMessage: $message";

    header("Location: https://wa.me/$whatsappNumber?text=$text");
    exit;
}
?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullname = htmlspecialchars($_POST["fullname"]);
    $email = htmlspecialchars($_POST["email"]);
    $amount = htmlspecialchars($_POST["amount"]);

    // Folder for storing uploaded receipts
    $target_dir = "uploads/";
    if (!file_exists($target_dir)) {
        mkdir($target_dir, 0777, true);
    }

    $target_file = $target_dir . basename($_FILES["receipt"]["name"]);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

    // Allow only image files
    $check = getimagesize($_FILES["receipt"]["tmp_name"]);
    if ($check === false) {
        echo "<script>alert('Please upload a valid image receipt.'); window.history.back();</script>";
        exit;
    }

    // Save receipt
    if (move_uploaded_file($_FILES["receipt"]["tmp_name"], $target_file)) {
        // Email notification (optional)
        $to = "akiikitanconcert@gmail.com"; // Replace with your email
        $subject = "🎟 New Payment Confirmation - Akkitan Concert";
        $body = "Full Name: $fullname\nEmail: $email\nAmount Paid: ₦$amount\n\nReceipt file: $target_file";
        $headers = "From: $email";

        @mail($to, $subject, $body, $headers);

        echo "<script>alert('✅ Thank you $fullname! Your payment of ₦$amount was confirmed successfully.'); window.location.href='index.html#tickets';</script>";
    } else {
        echo "<script>alert('❌ Sorry, we could not upload your receipt. Please try again.'); window.history.back();</script>";
    }
}
?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $amount = $_POST['amount'];

    // Handle receipt upload
    $target_dir = "uploads/";
    if (!is_dir($target_dir)) mkdir($target_dir);
    $file_name = basename($_FILES["receipt"]["name"]);
    $target_file = $target_dir . time() . "_" . $file_name;
    move_uploaded_file($_FILES["receipt"]["tmp_name"], $target_file);

    // Save record
    $data = "Name: $fullname | Email: $email | Amount: ₦$amount | Receipt: $target_file\n";
    file_put_contents("gift_payments.txt", $data, FILE_APPEND);

    echo "<script>alert('✅ Thank you $fullname! Your payment confirmation has been received.'); window.location.href='index.html';</script>";
}
?>
