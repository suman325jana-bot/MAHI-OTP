Mahi Travel v4 - Full Project

1) Import db_schema.sql into MySQL (create DB and tables).
2) Edit core/config.php to set DB creds and change ADMIN_PASS.
3) Upload project to web server (Apache/nginx + PHP 7.4+).
4) Make folders writable: assets/uploads, assets/qr, backups/
5) Admin panel: /admin/login.php (default admin/admin - change password)
6) User register: /user/register.php, login /user/login.php
7) OTP endpoints: /user/send_otp.php (manual mode shows otp), /user/verify_otp.php
8) Place UPI QR at assets/qr/upi.png for payments
