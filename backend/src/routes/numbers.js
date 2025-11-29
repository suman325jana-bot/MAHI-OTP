const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

// In-memory list of virtual numbers (demo)
const numbers = [
  { id: uuidv4(), number: '+91-9000000001', country: 'IN', provider: 'demo', pricePerMinute: 0.05, isActive: true },
  { id: uuidv4(), number: '+91-9000000002', country: 'IN', provider: 'demo', pricePerMinute: 0.05, isActive: true }
];

/**
 * GET /api/numbers/list
 */
router.get('/list', (req, res) => {
  res.json(numbers);
});

/**
 * POST /api/numbers/buy
 * { numberId, duration }
 */
router.post('/buy', (req, res) => {
  const { numberId, duration = 10 } = req.body;
  const n = numbers.find(x => x.id === numberId);
  if (!n) return res.status(404).json({ error: 'not found' });
  // For demo we simply return assignment info
  const session = { sessionId: uuidv4(), number: n.number, expiresAt: new Date(Date.now() + duration*60000) };
  return res.json({ session });
});

module.exports = router;
