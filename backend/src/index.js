// Minimal Express backend skeleton for Mahi OTP starter
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRouter = require('./routes/auth');
const numbersRouter = require('./routes/numbers');
const walletRouter = require('./routes/wallet');
const otpRouter = require('./routes/otp');

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.json({ ok: true, name: 'mahi-otp-backend' }));

app.use('/api/auth', authRouter);
app.use('/api/numbers', numbersRouter);
app.use('/api/wallet', walletRouter);
app.use('/api/otp', otpRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Backend listening on', port));
