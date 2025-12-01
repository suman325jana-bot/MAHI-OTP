<?php
// core/config.php - update DB credentials before use
session_start();
define('DB_HOST','localhost');
define('DB_USER','root');
define('DB_PASS','');
define('DB_NAME','mahi_travel');

// Admin default - change after install
define('ADMIN_USER','admin');
define('ADMIN_PASS','1234');

// UPI QR path
define('UPI_QR_PATH','assets/qr/upi.png');

// OTP mode: manual, fast2sms, msg91 (manual shows OTP in response)
define('OTP_MODE','manual');
define('FAST2SMS_API_KEY','YOUR_FAST2SMS_API_KEY');
define('MSG91_AUTHKEY','YOUR_MSG91_AUTHKEY');

function db_connect(){
    $c = new mysqli(DB_HOST,DB_USER,DB_PASS,DB_NAME);
    if($c->connect_error) die('DB Conn Error: '.$c->connect_error);
    $c->set_charset('utf8mb4');
    return $c;
}
?>