const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

// In-memory "db" for demo
const users = [];

/**
 * POST /api/auth/register
 * { email, password }
 */
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'email+password required' });
  if (users.find(u => u.email === email)) return res.status(400).json({ error: 'email exists' });
  const hash = await bcrypt.hash(password, 10);
  const user = { id: uuidv4(), email, passwordHash: hash, walletBalance: 0, isAdmin: false, createdAt: new Date() };
  users.push(user);
  return res.json({ id: user.id, email: user.email });
});

/**
 * POST /api/auth/login
 * { email, password }
 */
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user) return res.status(401).json({ error: 'invalid' });
  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return res.status(401).json({ error: 'invalid' });
  const token = jwt.sign({ sub: user.id, email: user.email, isAdmin: user.isAdmin }, process.env.JWT_SECRET || 'devsecret', { expiresIn: '1h' });
  return res.json({ accessToken: token, user: { id: user.id, email: user.email } });
});

module.exports = router;
