const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

// In-memory OTP store (for demo only)
const otps = {};

/**
 * POST /api/otp/generate
 * { sessionId }
 */
router.post('/generate', (req, res) => {
  const { sessionId } = req.body;
  if (!sessionId) return res.status(400).json({ error: 'sessionId required' });
  const code = Math.floor(100000 + Math.random()*900000).toString();
  otps[sessionId] = { code, createdAt: new Date() };
  // In real app: forward to provider/number inbound integration
  return res.json({ sessionId, otp: code, expiresIn: 300 });
});

/**
 * POST /api/otp/verify
 * { sessionId, otp }
 */
router.post('/verify', (req, res) => {
  const { sessionId, otp } = req.body;
  const v = otps[sessionId];
  if (!v) return res.status(404).json({ ok: false, error: 'no session' });
  if (v.code === otp) {
    delete otps[sessionId];
    return res.json({ ok: true });
  }
  return res.status(400).json({ ok: false });
});

module.exports = router;
