import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function App(){
  const [numbers, setNumbers] = useState([]);
  useEffect(()=> {
    axios.get((import.meta.env.VITE_API_BASE || 'http://localhost:3000') + '/api/numbers/list')
      .then(r => setNumbers(r.data))
      .catch(() => setNumbers([]));
  }, []);
  return (
    <div style={{ padding: 24, fontFamily: 'Arial, sans-serif' }}>
      <h1>Mahi OTP (Demo)</h1>
      <p>Available numbers:</p>
      <ul>
        {numbers.map(n => <li key={n.id}>{n.number} — {n.country} — {n.provider}</li>)}
      </ul>
      <p>Open your browser console to interact with demo APIs.</p>
    </div>
  );
}
