const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// In-memory txs
const txs = [];

/**
 * POST /api/wallet/topup
 * { userId, amount }
 */
router.post('/topup', (req, res) => {
  const { userId, amount } = req.body;
  if (!userId || !amount) return res.status(400).json({ error: 'userId+amount required' });
  const tx = { id: uuidv4(), userId, amount, status: 'pending', createdAt: new Date() };
  txs.push(tx);
  // In a real app: create payment intent & webhook handling.
  return res.json({ tx });
});

/**
 * GET /api/wallet/txs?userId=
 */
router.get('/txs', (req, res) => {
  const { userId } = req.query;
  const list = txs.filter(t => !userId || t.userId === userId);
  res.json(list);
});

module.exports = router;
