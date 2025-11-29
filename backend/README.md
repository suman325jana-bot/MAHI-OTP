# Backend (demo)

This is a minimal demo backend (Express) to illustrate endpoints.

Install:
  npm install

Run:
  npm run dev

Endpoints:
  GET /            -> health
  POST /api/auth/register
  POST /api/auth/login
  GET /api/numbers/list
  POST /api/numbers/buy
  POST /api/otp/generate
  POST /api/otp/verify
  POST /api/wallet/topup
  GET  /api/wallet/txs

Note: This project uses in-memory stores (not for production). Replace with Postgres/Redis integrations and proper auth for production.
